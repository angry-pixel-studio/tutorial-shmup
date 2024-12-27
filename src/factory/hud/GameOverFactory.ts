import { ASSETS } from "@config/assets";
import { RENDER_LAYERS } from "@config/layers";
import { AssetManager, MaskRenderer, MaskShape, TextOrientation, TextRenderer, Transform, Vector2 } from "angry-pixel";

export const gameOverFactory = (assetManager: AssetManager) => [
    new Transform(),
    new MaskRenderer({
        shape: MaskShape.Rectangle,
        color: "#000000",
        opacity: 0.5,
        layer: RENDER_LAYERS.Hud,
        width: 208,
        height: 48,
    }),
    new TextRenderer({
        font: assetManager.getFont(ASSETS.fonts.main.name),
        fontSize: 8,
        text: `       GAME OVER\nPress ANY KEY to restart`,
        layer: RENDER_LAYERS.Hud,
        color: "#FFFFFF",
        orientation: TextOrientation.Center,
        width: 256,
        height: 64,
        lineHeight: 16,
        shadow: {
            color: "#000000",
            offset: new Vector2(2, -2),
            opacity: 1,
        },
    }),
];
