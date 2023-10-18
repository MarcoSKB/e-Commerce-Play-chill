import { GameDataInfo } from "@/src/types/GameDataInfo";

export interface GameDataResponse<T = GameDataInfo> {
  count: string;
  next: string;
  previous: string;
  results: T[];
}
