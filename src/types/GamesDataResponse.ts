import { GamePreviewDataInfo } from "@/src/types/GamePreviewDataInfo";

export interface GamesDataResponse<T = GamePreviewDataInfo> {
  count: string;
  next: string;
  previous: string;
  results: T[];
}
