export const GLobalVars = {
    apiUri: 'https://1yjzj2zqii.execute-api.us-east-1.amazonaws.com/dev/',
    apiPosterUri: 'https://image.tmdb.org/t/p/w300/',
    tvRoutes: {
        getNowAiring: 'tv/now',
        /** tv/showId */
        getShowDetail: 'tv/',
        /** uri encoded query */
        getShowSearch: 'tv/search/',
        /** predefined filters not fully implemented */
        getDiscoverFilter: 'tv/filter',
        /** tv/similar/showId */
        getSimilarShows: 'tv/similar/',
        /** example tv/showId/Season */
        getSeasonDetail: 'tv/',
        /** example tv/showId/Season/Episode */
        getEpisodeDetail: 'tv/'
    }
};
// https://1yjzj2zqii.execute-api.us-east-1.amazonaws.com/dev/tv/now/
