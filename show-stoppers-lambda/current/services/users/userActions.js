'use strict'

const connectToDatabase = require('../../connect');

const User = require('../../models/User');

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


// helper method to be moved
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