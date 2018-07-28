'use strict'

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const connectToDatabase = require('../../connect');
const User = require('../../models/User');

/**
 * Login method that will check the user email and password are correct along with them being validated first
 * then they will get a JWT token back
 * @param {*} email 
 * @param {*} password 
 * @param {*} callback 
 */
module.exports.login = (email, password, callback) => {
    if(!email || !password) {
        throw new Error('username or password not present');
    }

    return connectToDatabase()
        .then(() => {
            User.findOne({email: email})
                .then(user => {
                    if(!user.verified) {
                        return {
                            statusCode: 401,
                            body: JSON.stringify({
                                error: 'user is not verified',
                                username: user.email
                            })
                        }
                    }
                    const validate = bcrypt.compareSync(password, user.password);
                    if(!validate) {
                        return {
                            statusCode: 401,
                            body: JSON.stringify({
                                error: 'username or password is not correct',
                                username: user.email
                            })
                        }
                    }
                    const token = jwt.sign(
                        {id: user._id, username: user.email},
                        process.env.JWT_SECRET, {expiresIn: 86400});
                        callback ({
                            statusCode: 200,
                            body: JSON.stringify({
                                auth: true,
                                token: token
                            })
                        });
                })
        })

}

/**
 * Allows a user to sign up for the site just using the typical method using the database
 * @param {*} event 
 * @param {*} callback 
 */
module.exports.register = (event, callback) => {
    const {firstname, lastname, email, password} = JSON.parse(event.body);

    if(!firstname || !lastname || !email || !password) {
        throw new Error('missing fields');
    }

    const hashedPass = bcrypt.hashSync(password, 8);

    connectToDatabase()
        .then(() => {
            User.create({
                firstname: firstname,
                lastname: lastname,
                email: email,
                password: hashedPass,
                verified: false
            })
            .then(user => {
                const token = jwt.sign({
                    id: user._id, username: user.email
                }, process.env.JWT_SECRET, {expiresIn: 86400});
                
                callback({
                    statusCode: 201,
                    body: JSON.stringify({
                        auth: true,
                        username: user.email,
                        token: token
                    })
                });

            })
        })
        .catch(ex => {
            console.log(ex);
        });
}

/**
 * Authorization policy from AWS to allow users to verfiy their JWT and login
 * @param {*} userId 
 * @param {*} effect 
 * @param {*} resource 
 * @param {*} context 
 */
module.exports.buildIAMPolicy = (userId, effect, resource,context) => {
    const policy = {
        principalId: userId,
        policyDocument: {
          Version: '2012-10-17',
          Statement: [
            {
              Action: 'execute-api:Invoke',
              Effect: effect,
              Resource: resource,
            },
          ],
        },
        context,
    };
    
    return policy;
}