export class Season {
    public air_date: Date;
    public episodes: Array<Episode>;
    public id: number;
    public name: string;
    public overview: string;
    public poster_path: string;
    public season_number: number;
    public _id: string;
}

export class Episode {
    public air_date: Date;
    public crew: Array<any>;
    public episode_number: number;
    public guest_stars: Array<any>;
    public id: number;
    public name: string;
    public overview: string;
    public production_code: any;
    public season_number: number;
    public show_id: number;
    public still_path: string;
    public vote_average: number;
    public vote_count: number;
}
