/**
 * TV SHOW GET HANDLER
 * 
 */
'use strict'

const request = require('request');
require('dotenv').config();
const utils = require('../../utils/utils');

/**
 * Get the now airing TV shows for the current day
 * returns a response object with the first page of current shows
 * @param {*} event 
 * @param {*} context 
 * @param {*} callback 
 */
module.exports.getNowAiringTv = async (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;

    const options = utils.buildGetRequestOptions('https://api.themoviedb.org/3/tv/airing_today', 1, process.env.MOVIE_DB_KEY_V3)

    callback(null, await utils.MovieDbGetRequest(options));
}

//get show details
module.exports.getShowDetails = async (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;

    const showId = event.pathParameters.showid;

    const options = utils.buildGetRequestOptions('https://api.themoviedb.org/3/tv/' + showId, 1, process.env.MOVIE_DB_KEY_V3)

    callback(null, await utils.MovieDbGetRequest(options));

}
//get show search

//get show similar