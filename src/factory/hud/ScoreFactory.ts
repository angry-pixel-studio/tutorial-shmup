import { Score } from "@component/hud/Score";
import { ASSETS } from "@config/assets";
import { RENDER_LAYERS } from "@config/layers";
import { AssetManager, TextOrientation, TextRenderer, Transform, Vector2 } from "angry-pixel";

export const scoreFactory = (assetManager: AssetManager, position: Vector2) => [
    new Transform({ position }),
    new TextRenderer({
        font: assetManager.getFont(ASSETS.fonts.main.name),
        fontSize: 8,
        text: "000000",
        layer: RENDER_LAYERS.Hud,
        color: "#FFFFFF",
        orientation: TextOrientation.Center,
        width: 128,
        height: 24,
        shadow: {
            color: "#000000",
            offset: new Vector2(1, -1),
            opacity: 0.7,
        },
    }),
    Score,
];
