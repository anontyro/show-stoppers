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

    const showId = event.pathParameters.showId;

    const options = utils.buildGetRequestOptions('https://api.themoviedb.org/3/tv/' + showId, 1, process.env.MOVIE_DB_KEY_V3);

    callback(null, await utils.MovieDbGetRequest(options));

}
/**
 * Get a search of Tv shows using the user entered parameter which is already url encoded
 * and will get a list that best fits that query
 * @param {*} event standard server event on call contains the query in pathParameters
 * @param {*} context stamdard server context from aws
 * @param {*} callback aws response method
 */
module.exports.getShowSearch = async (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;

    const query = decodeURI(event.pathParameters.query);

    console.log(query);

    const options = utils.buildGetRequestOptions('https://api.themoviedb.org/3/search/tv', 1, process.env.MOVIE_DB_KEY_V3, query);

    callback(null, await utils.MovieDbGetRequest(options))
}

/**
 * Get similar shows to the show provided using the ShowId this will
 * return a list of shows that are similar to the show provided
 * this is useful to enhance the users experience
 * @param {*} event 
 * @param {*} context 
 * @param {*} callback 
 */
module.exports.getSimilarShows = async (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;

    const showId = event.pathParameters.showId;

    const options = utils.buildGetRequestOptions(`https://api.themoviedb.org/3/tv/${showId}/similar`, 1, process.env.MOVIE_DB_KEY_V3);

    callback(null, await utils.MovieDbGetRequest(options));
}

/**
 * Gets a predefined filter to allow the user to search via specific parameters
 * @param {*} event 
 * @param {*} context 
 * @param {*} callback 
 */
module.exports.getDiscoverTv = async (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;

    const query = 'with_genres=18&sort_by=vote_average.desc&vote_count.gte=10';
    const options = utils.buildGetRequestOptions('https://api.themoviedb.org/3/discover/tv', 1, process.env.MOVIE_DB_KEY_V3, query);

    callback(null, await utils.MovieDbGetRequest(options));
}

/**
 * Get details about a specific shows season 
 * @param {*} event in pathParameters contains showId and season both ints
 * @param {*} context 
 * @param {*} callback 
 */
module.exports.getTvSeasons = async (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;

    const showId = event.pathParameters.showId;
    const season = event.pathParameters.season;

    const options = utils.buildGetRequestOptions(`https://api.themoviedb.org/3/tv/${showId}/season/${season}`, 1, process.env.MOVIE_DB_KEY_V3);

    callback(null, await utils.MovieDbGetRequest(options));
}

/**
 * Get detailed information about a specific shows episode of a specific season
 * @param {*} event contains three params showId, season, episode all int
 * @param {*} context 
 * @param {*} callback 
 */
module.exports.getTvEpisodes = async (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;

    const showId = event.pathParameters.showId;
    const season = event.pathParameters.season;
    const episode = event.pathParameters.episode;

    const options = utils.buildGetRequestOptions(`https://api.themoviedb.org/3/tv/${showId}/season/${season}/episode/${episode}`, 1, process.env.MOVIE_DB_KEY_V3);

    callback(null, await utils.MovieDbGetRequest(options));
}