export const GLobalVars = {
    apiUri: 'http://localhost:3000/',
    tvRoutes: {
        getNowAiring: 'tv/now',
        /** tv/showId */
        getShowDetail: 'tv/',
        /** uri encoded query */
        getShowSearch: 'tv/search/',
        getDiscoverFilter: 'tv/filter',
        /** tv/similar/showId */
        getSimilarShows: 'tv/similar/',
        /** example tv/showId/Season */
        getSeasonDetail: 'tv/',
        /** example tv/showId/Season/Episode */
        getEpisodeDetail: 'tv/'
    }
};
