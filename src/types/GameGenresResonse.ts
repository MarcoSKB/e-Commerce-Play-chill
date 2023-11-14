import { GamesDataResponse } from "./GamesDataResponse";

interface GameGenresData {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
  games: {
    id: number;
    slug: string;
    name: string;
    added: number;
  }[];
}

export interface GameGenresResponse extends GamesDataResponse {
  results: GameGenresData[];
}
