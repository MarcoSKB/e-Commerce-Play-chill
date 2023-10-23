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
      minimum:
        "Minimum: OS: Windows® 7/Vista/XP Processor: Intel® Core™ 2 Duo E6600 or AMD Phenom™ X3 8750 processor or better Memory: 2 GB RAM Graphics: Video card must be 256 MB or more and should be a DirectX 9-compatible with support for Pixel Shader 3.0 DirectX: Version 9.0c Storage: 15 GB available space",
      recommended:
        "Recommended: OS: Windows® 10 Processor: Intel® Core™ 5 or better Memory: 4 GB RAM Graphics: Video card must be 1024 MB or more DirectX: Version 9.0c Storage: 15 GB available space",
    };
  }
  return platformPC.requirements;
}
