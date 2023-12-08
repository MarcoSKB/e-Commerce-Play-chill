import { GamesDataResponse } from "./GamesDataResponse";

interface GameTagsData {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
  language: string;
  games: {
    id: number;
    slug: string;
    name: string;
    added: number;
  }[];
}

export interface GameTagsResponse extends GamesDataResponse {
  results: GameTagsData[];
}
