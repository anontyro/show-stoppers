const mongoose = require('mongoose');
require('dotenv').config();

mongoose.Promise = global.Promise;
let isConnected;

module.exports = connectToDatabase = () => {
    if(isConnected) {
        Promise.resolve();
    }
    return mongoose.connect(process.env.MONGO_CONNECT)
        .then(db => isConnected = db.connections[0].readyState);
}