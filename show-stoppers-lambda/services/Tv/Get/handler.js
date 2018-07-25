/**
 * TV SHOW GET HANDLER
 * Main handler class for the TV show get end points
 * This is the method used to communicate with the movie database data
 */
'use strict'

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

    const options = utils.buildGetRequestOptions('https://api.themoviedb.org/3/tv/airing_today', 1, process.env.MOVIE_DB_KEY_V3);

    callback(null, await utils.MovieDbGetRequest(options));
}

/**
 * Get the show details sending the unique movie Database show Id
 * as a parameter.
 * @param {*} event 
 * @param {*} context 
 * @param {*} callback 
 * @returns will return a JSON object containing either a 200 or 400 response with the response data or an error respectively
 */
module.exports.getShowDetails = async (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;

    const showId = event.pathParameters.showid;

    const options = utils.buildGetRequestOptions('https://api.themoviedb.org/3/tv/' + showId, 1, process.env.MOVIE_DB_KEY_V3);

    callback(null, await utils.MovieDbGetRequest(options));

}
//get show search
module.exports.getShowSearch = async (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;

    const query = event.pathParameters.query;

    const options = utils.buildGetRequestOptions('https://api.themoviedb.org/3/search/tv', 1, process.env.MOVIE_DB_KEY_V3, query);

    callback(null, await utils.MovieDbGetRequest(options))
}

//get show similar
module.exports.getSimilarShows = async (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;

    const showId = event.pathParameters.showId;

    const options = utils.buildGetRequestOptions(`https://api.themoviedb.org/3/tv/${showId}/similar`, 1, process.env.MOVIE_DB_KEY_V3);

    callback(null, await utils.MovieDbGetRequest(options));

}
//get discover TV
module.exports.getDiscoverTv = async (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;

    const query = 'with_genres=18&sort_by=vote_average.desc&vote_count.gte=10';
    const options = utils.buildGetRequestOptions('https://api.themoviedb.org/3/discover/tv', 1, process.env.MOVIE_DB_KEY_V3, query);

    callback(null, await utils.MovieDbGetRequest(options));

}
//TV seasons
module.exports.getTvSeasons = (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;

}
//TV episodes
module.exports.getTvEpisodes = (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;

}