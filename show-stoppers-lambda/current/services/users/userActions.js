'use strict'

const connectToDatabase = require('../../connect');

const User = require('../../models/User');

/**
 * Returns a select set of fields from the user table along with the favourites array
 * @param {*} username 
 * @param {*} callback 
 */
module.exports.getFavourites = (username, callback) => {
    connectToDatabase()
        .then(() => {
            User.findOne({email: username})
                .then(user =>{
                    callback({
                        firstname: user.firstname,
                        email: user.email,
                        createdDate: user.createdDate,
                        favourites: user.favourites
                    })
                });
        });
}

module.exports.postFavourite = (username, event, callback) => {
    const {id, name, poster_path} = JSON.parse(event.body);
    const favourite = {
        id: id,
        name: name,
        poster_path: poster_path
    }
    connectToDatabase()
        .then(() => {
            User.findOneAndUpdate({email: username}, {$push : {favourites: favourite}})
                .then( user => {
                        callback({
                            email: user.email,
                            favourites: user.favourites
                        })
                    })

        });
}

/**
 * Find the user by their ID and return the user object
 * @param {*} id 
 * @param {*} callback 
 */
module.exports.userLookupById = (id, callback) => {
    connectToDatabase()
        .then(() => {
            User.findById(id)
                .then(user => callback(user) )
                .catch(err => {
                    console.error(err);
                    throw new Exception(err);
                })
        });
  };