/**
 * UTILITY CLASS
 * this class is a support class that holds methods used commonly across the api
 */
'use strict'

const request = require('request');
require('dotenv').config();

/**
 * Method used to create the options class for require GET requests
 * used to send requests to the api required for the other methods
 * in this class
 * @param {*} url the api endpoint to call
 * @param {*} page which page to display
 * @param {*} key API Key that is required for each request stored in env
 * @param {*} query optional param that provides a ?query string must be url encoded
 */
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

/**
 * Movie DB Get request which requires the options param to be built prior
 * to making the request
 * @returns JSON object that is to be passed to the AWS callback as is to display the data correctly
 * if an error occures the error object is populated else the response is populated
 * @param {*} options Creating a standard options object using the buildGetRequestOptions
 */
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