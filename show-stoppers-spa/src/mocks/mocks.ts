import { TvItem } from './../app/models/tvItem.model';
import { Season } from '../app/models/season.model';

export const MockTv1: TvItem = {
    backdrop_path: '',
    first_air_date: new Date(),
    genre_ids: [],
    id: 123,
    origin_country: [],
    original_language: 'english',
    original_name: 'Test Name',
    overview: 'A show',
    popularity: 12.2,
    poster_path: 'path.jpg',
    vote_average: 5,
    vote_count: 100
};

export const MockSeason1: Season = {
        air_date: new Date(),
        episodes: [],
        id: 777,
        name: 'first season',
        overview: 'a show with seasons',
        poster_path: 'location.jpg',
        season_number: 1,
};

export const MockSeason2: Season = {
    air_date: new Date(),
    episodes: [],
    id: 557,
    name: 'second season',
    overview: 'a show with more seasons',
    poster_path: 'location2.jpg',
    season_number: 2,
};
