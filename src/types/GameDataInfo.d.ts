export interface platformType {
  platform: {
    id: number;
    slug: string;
    name: string;
  };
  released_at: string;
  requirements: {
    minimum: string;
    recommended: string;
  } | null;
}

interface metacritic {
  metascore: number;
  url: string;
}

export interface genres {
  id: number;
  games_count: number;
  image_background: string;
  name: string;
  slug: string;
}

interface rating {
  id: number;
  title: string;
  count: number;
  percent: number;
}

interface esrb_rating {
  id: number;
  slug: string;
  name: string;
}

export interface GameDataInfo {
  id: number;
  slug: string;
  name: string;
  name_original: string;
  description: string;
  metacritic: number;
  metacritic_platforms: metacritic[];
  released: string;
  tba: boolean;
  updated: string;
  background_image: string;
  background_image_additional: string;
  rating: number;
  ratings: rating[];
  genres: genres[];
  screenshots_count: number;
  movies_count: number;
  achievements_count: number;
  parent_achievements_count: string;
  reviews_text_count: string;
  ratings_count: number;
  suggestions_count: number;
  alternative_names: string[];
  metacritic_url: string;
  parents_count: number;
  additions_count: number;
  game_series_count: number;
  esrb_rating: esrb_rating;
  platforms: platformType[];
}
