/**
 * 
 */
'use strict';

const https = require('https');
require('dotenv').config();

/**
 * 
 * @param {*} uri 
 * @param {*} page 
 * @param {*} query 
 * @param {*} callback 
 */
module.exports.getRequest = (uri, page, query, callback) => {

const key = '&api_key=' + process.env.MOVIE_DB_KEY_V3;
let url = uri + '?page=' + page + '&language=en-US' + key;

// add in a query if it exists
if(query) {
 url += '&query=' + query;
}

// start the get request
https.get(url, (res =>{
    let data = '';
    
    res.on('data', (chunk) => {
      data += chunk;
    });

    res.on('end', () => {
        callback({
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*" 
            },
            body: JSON.stringify({
                response: JSON.parse(data),
                error: {}
            })
        });
    });

  })).on('error', (err) =>{
      callback({
        statusCode: 400,
        headers: {
            "Access-Control-Allow-Origin": "*" 
        },
        body: JSON.stringify({
            response: {},
            error: err
        })
      })
  });

}