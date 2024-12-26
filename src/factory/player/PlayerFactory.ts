import { PlayerMovements } from "@component/player/PlayerMovements";
import { PlayerStatus } from "@component/player/PlayerStatus";
import { PlayerWeapon } from "@component/player/PlayerWeapon";
import { ASSETS } from "@config/assets";
import { COLLISION_LAYERS, RENDER_LAYERS } from "@config/layers";
import {
    Animation,
    Animator,
    AssetManager,
    BoxCollider,
    RigidBody,
    RigidBodyType,
    SpriteRenderer,
    Transform,
    Vector2,
} from "angry-pixel";

export const playerFactory = (assetManager: AssetManager, position: Vector2) => [
    new Transform({ position }),
    new SpriteRenderer({
        layer: RENDER_LAYERS.Player,
    }),
    new Animator({
        animation: "default",
        animations: new Map([
            [
                "default",
                new Animation({
                    image: assetManager.getImage(ASSETS.images.ship),
                    fps: 8,
                    loop: true,
                    slice: { size: new Vector2(16, 24), offset: new Vector2(), padding: new Vector2() },
                    frames: [2, 7],
                }),
            ],
        ]),
    }),
    new RigidBody({
        type: RigidBodyType.Dynamic,
        gravity: 0,
    }),
    new BoxCollider({
        layer: COLLISION_LAYERS.Player,
        width: 16,
        height: 16,
        offset: new Vector2(0, 4),
    }),
    PlayerMovements,
    PlayerWeapon,
    PlayerStatus,
];
