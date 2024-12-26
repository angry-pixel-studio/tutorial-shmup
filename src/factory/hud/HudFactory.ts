import { AssetManager, Vector2 } from "angry-pixel";
import { playerLivesFactory } from "./PlayerLivesFactory";
import { scoreFactory } from "./ScoreFactory";
import { PARAMETERS } from "@config/parameters";

export const hudFactory = (assetManager: AssetManager) => [
    playerLivesFactory(
        assetManager,
        new Vector2(PARAMETERS.stageBoundaries.left + 36, PARAMETERS.stageBoundaries.top - 24),
    ),
    scoreFactory(assetManager, new Vector2(PARAMETERS.stageBoundaries.right - 36, PARAMETERS.stageBoundaries.top - 24)),
];
