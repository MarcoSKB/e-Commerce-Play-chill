import { GameDataInfo } from "../types/GameDataInfo";

export function getRequirements(platforms: GameDataInfo["platforms"]) {
  const platformPC = platforms.find(({ platform }) => {
    return platform.id === 4;
  });

  const checkKeysInObject =
    platformPC === undefined ||
    platformPC.requirements === null ||
    platformPC.requirements["minimum"] === undefined;

  if (checkKeysInObject) {
    return {
      minimum: "123",
      recommended: "456",
    };
  }
  return platformPC.requirements;
}
