import { Explosion } from "@component/shared/Explosion";
import { ASSETS } from "@config/assets";
import { RENDER_LAYERS } from "@config/layers";
import { Animation, Animator, AssetManager, SpriteRenderer, Transform, Vector2 } from "angry-pixel";

export const explosionFactory = (assetManager: AssetManager, position: Vector2) => [
    new Transform({ position }),
    new SpriteRenderer({ layer: RENDER_LAYERS.Explosion }),
    new Animator({
        animation: "default",
        animations: new Map([
            [
                "default",
                new Animation({
                    image: assetManager.getImage(ASSETS.images.explosion),
                    fps: 8,
                    loop: false,
                    slice: { size: new Vector2(16, 16), offset: new Vector2(), padding: new Vector2() },
                    frames: [0, 1, 2, 3, 4],
                }),
            ],
        ]),
    }),
    Explosion,
];
