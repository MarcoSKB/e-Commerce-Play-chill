import { GamesDataResponse } from "./GamesDataResponse";
import { Store } from "./StoreType";

export interface GamePreviewInfo {
  id: number;
  slug: string;
  name: string;
  released: string;
  tba: boolean;
  background_image: string;
  rating: number;
  rating_top: number;
  ratings: {};
  stores: Store[];
  ratings_count: number;
  metacritic: number;
  suggestions_count: number;
  platforms: unknown[];
}

export interface GamePreviewData extends GamesDataResponse {
  results: GamePreviewInfo[];
}
