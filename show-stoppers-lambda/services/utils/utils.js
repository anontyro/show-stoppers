'use strict'

const request = require('request');
require('dotenv').config();

module.exports.buildGetRequestOptions = (url, page, key, query) =>{
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

module.exports.MovieDbGetRequest = (options) =>{
    return new Promise((resolve, reject) =>{
        request(options, (err, res, body) => {
            if(err) {
                console.error(err);
                reject({
                    statusCode: 400,
                    body: {
                        response: {},
                        error: err
                    }
                })
            }
            if(!err && res.statusCode === 200) {
                resolve({
                    statusCode: 200,
                    body: {
                        response: JSON.parse(body),
                        error: {}
                    }
                })
            }
        })
    });

}