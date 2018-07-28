/**
 * TV SHOW GET HANDLER
 * Main handler class for the TV show get end points
 * This is the method used to communicate with the movie database data
 */
'use strict';

const requests = require('./services/utils/apiUtils');
var jwt = require('jsonwebtoken');
const auth = require('./services/auth/auth');
const policyCreation = require('./services/auth/auth').buildIAMPolicy;

const userActions = require('./services/users/userActions');

/**
 * Get the now airing TV shows for the current day
 * returns a response object with the first page of current shows
 * @param {*} event 
 * @param {*} context 
 * @param {*} callback 
 */
module.exports.getNowAiringTv = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  const uri = 'https://api.themoviedb.org/3/tv/airing_today';

  requests.getRequest(uri, 1, '', resp =>{
    callback(null, resp);
  });

}

/**
 * Get the show details sending the unique movie Database show Id
 * as a parameter.
 * @param {*} event 
 * @param {*} context 
 * @param {*} callback 
 * @returns will return a JSON object containing either a 200 or 400 response with the response data or an error respectively
 */
module.exports.getShowDetails = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  const showId = event.pathParameters.showId;

  const uri = `https://api.themoviedb.org/3/tv/${showId}`;

  requests.getRequest(uri, 1, '', resp =>{
    callback(null, resp);
  });

}

/**
 * Get a search of Tv shows using the user entered parameter which is already url encoded
 * and will get a list that best fits that query
 * @param {*} event standard server event on call contains the query in pathParameters
 * @param {*} context stamdard server context from aws
 * @param {*} callback aws response method
 */
module.exports.getShowSearch = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  const query = event.pathParameters.query;

  const page = event.pathParameters.page ? event.pathParameters.page : 1 ;

  const uri = 'https://api.themoviedb.org/3/search/tv';

  requests.getRequest(uri, page, query, resp =>{
    callback(null, resp);
  });

}

/**
 * Get similar shows to the show provided using the ShowId this will
 * return a list of shows that are similar to the show provided
 * this is useful to enhance the users experience
 * @param {*} event 
 * @param {*} context 
 * @param {*} callback 
 */
module.exports.getSimilarShows = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  const showId = event.pathParameters.showId;

  const uri = `https://api.themoviedb.org/3/tv/${showId}/similar`;

  requests.getRequest(uri, 1, '', resp =>{
    callback(null, resp);
  });

}

/**
 * Gets a predefined filter to allow the user to search via specific parameters
 * @param {*} event 
 * @param {*} context 
 * @param {*} callback 
 */
module.exports.getDiscoverTv = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  const query = 'with_genres=18&sort_by=vote_average.desc&vote_count.gte=10';

  const uri = 'https://api.themoviedb.org/3/discover/tv';

  requests.getRequest(uri, 1, query, resp =>{
    callback(null, resp);
  });

}

/**
 * Get details about a specific shows season 
 * @param {*} event in pathParameters contains showId and season both ints
 * @param {*} context 
 * @param {*} callback 
 */
module.exports.getTvSeasons = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  const showId = event.pathParameters.showId;
  const season = event.pathParameters.season;

  const uri = `https://api.themoviedb.org/3/tv/${showId}/season/${season}`;

  requests.getRequest(uri, 1, '', resp =>{
    callback(null, resp);
  });

}

/**
 * Get detailed information about a specific shows episode of a specific season
 * @param {*} event contains three params showId, season, episode all int
 * @param {*} context 
 * @param {*} callback 
 */
module.exports.getTvEpisodes = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  const showId = event.pathParameters.showId;
  const season = event.pathParameters.season;
  const episode = event.pathParameters.episode;

  const uri = `https://api.themoviedb.org/3/tv/${showId}/season/${season}/episode/${episode}`;

  requests.getRequest(uri, 1, '', resp =>{
    callback(null, resp);
  });

}

/**
 * Search for the user in the database and return a list of their favourites along
 * with their basic information
 * @param {*} event 
 * @param {*} context 
 * @param {*} callback 
 */
module.exports.getUserFavourites = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  try{
    const username = JSON.parse(event.requestContext.authorizer.user).username;

    userActions.getFavourites(username, response => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify({
          user: response
        })
      })
    })
  } catch (ex) {
    callback(null, {
      statusCode: 400,
      body: JSON.stringify({
        error: ex
      })
    })
  }

}

module.exports.postUserFavourite = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  try{
    const username = JSON.parse(event.requestContext.authorizer.user).username;

    userActions.postFavourites(username, event, response => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify({
          user: response
        })
      })
    })
  } catch (ex) {
    callback(null, {
      statusCode: 400,
      body: JSON.stringify({
        error: ex
      })
    })
  }
  
}

/**
 * Main login method that checks the email and password before allowing the user to login
 * must check the hashed password against the one provided
 * @param {*} event 
 * @param {*} context 
 * @param {*} callback 
 */
module.exports.login = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  const {email, password} = JSON.parse(event.body);

  try{
    auth.login(email,password, response => {
      callback(null, response);
    });

  } catch (ex) {
    callback(null, {
      statusCode: 401,
      body: 'username or password incorrect',
      error: ex
    });
  }

}

/**
 * Simple registration form for the user to allow them to register
 * will set the user as unvalidated initially
 * @param {*} event 
 * @param {*} context 
 * @param {*} callback 
 */
module.exports.register = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  try{
    auth.register(event, response => {
      callback(null, response);
    });
  } catch (ex) {
    callback(null, {
      statusCode: 401,
      body: 'username or password incorrect',
      error: ex
    });
  }

}

/**
 * Checks the users JWT token to ensure it is valid
 * if it is the policy will be created else 401 is given
 * @param {*} event 
 * @param {*} context 
 * @param {*} callback 
 */
module.exports.isUserAuthorised = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  const token = event.authorizationToken;
    
  try{
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const userId = decoded.id;
      console.log(decoded);

      userActions.userLookupById(userId, user => {
          const isAllowed = 'Allow';
          const authContext = {user: JSON.stringify({ id: user._id, username: user.email, firstname: user.firstname, lastname: user.lastname})};
          const policy = policyCreation(userId, isAllowed, event.methodArn, authContext);
          callback(null, policy);
      })

  }
  catch(ex) {
      callback('Unauthorized');
  }

}

