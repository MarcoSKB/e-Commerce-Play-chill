import { GamesDataResponse } from "./GamesDataResponse";
interface GameScreenshotInfo {
  id: number;
  image: string;
  width: number;
  height: number;
  is_deleted: boolean;
}

export interface GameScreenshotData extends GamesDataResponse {
  results: GameScreenshotInfo[];
}
