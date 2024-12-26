import { BackgroundScroller } from "@component/stage/BackgroundScroller";
import { ASSETS } from "@config/assets";
import { RENDER_LAYERS } from "@config/layers";
import { AssetManager, SpriteRenderer, Transform } from "angry-pixel";

export const stageBackgroundFactory = (assetManager: AssetManager) => [
    Transform,
    BackgroundScroller,
    new SpriteRenderer({
        image: assetManager.getImage(ASSETS.images.background),
        layer: RENDER_LAYERS.Background,
    }),
];
