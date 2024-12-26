import { PlayerLives } from "@component/hud/PlayerLives";
import { ASSETS } from "@config/assets";
import { RENDER_LAYERS } from "@config/layers";
import { AssetManager, SpriteRenderer, Transform, Vector2 } from "angry-pixel";

export const playerLivesFactory = (assetManager: AssetManager, position: Vector2) => [
    new Transform({ position }),
    new SpriteRenderer({
        image: assetManager.getImage(ASSETS.images.ship),
        slice: { x: 32, y: 0, width: 16, height: 16 },
        tiled: new Vector2(3, 1),
        layer: RENDER_LAYERS.Hud,
        width: 12,
        height: 12,
    }),
    PlayerLives,
];
