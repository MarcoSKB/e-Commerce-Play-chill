import { GamesDataResponse } from "./GamesDataResponse";

interface GamePlatformsData {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
  image: string;
  year_start: number;
  year_end: number;
}

export interface GamePlatformsResponse extends GamesDataResponse {
  results: GamePlatformsData[];
}
