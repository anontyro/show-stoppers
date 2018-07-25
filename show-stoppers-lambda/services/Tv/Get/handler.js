
'use strict'

const request = require('request');
require('dotenv').config();

const buildRequestOptions = (url, page, key, query) => {
    const options = {
        method: 'GET',
        url: url,
        qs: {page: page, language: 'en-us', api_key: key},
        body: '{}' };
    
    if(query){
        options.qs.query = query;
    }
    return options;
}

module.exports.getNowAiringTv = (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;

    const options = buildRequestOptions('https://api.themoviedb.org/3/tv/airing_today', 1, process.env.MOVIE_DB_KEY_V3)

    request(options, (err, res, body) => {
        if(err) {
            console.error(err);
        }
        if(!err && res.statusCode === 200) {
            callback(null,{
                statusCode: 200,
                body: {
                    response: JSON.parse(body)
                }
            });
        }
    });

}