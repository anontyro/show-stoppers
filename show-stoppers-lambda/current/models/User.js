const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    /** First name of the person to add */
    firstname: {type: String, required: true},
    /** last name of the preson to add */
    lastname: {type: String, required: true},
    /** Unique email should not exist in the database already */
    email: {
        type: String, 
        match: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        required: true,
        unique: true
    },
    /** The contact number of the person not required */
    contactNumber: {
        type: String
    },
    /** URL for their own website, not required */
    website: {
        type: String
    },
    /** PAssword field to be hashed is required */
    password: {
        type: String, 
        required: true
    },
    /** Boolean defaults to false to control what users are able to access the restricted areas and get a JWT */
    verified: {
        type: Boolean,
        default: false
    },
    /** Unique onetime link that will allow them to verfiy their account */
    verificationLink: {
        type: String
    },
    /** Auto added by the database to record when this record was created */
    createdDate: {
        type: Date,
        default: Date.now
    },
    /** Selection of favourite shows the user has added */
    favourites: [{
        id: Number,
        name: String,
        poster_path: String,
    }]

}, {collection: 'show_stoppers_users'});


module.exports =  mongoose.model('User', userSchema);