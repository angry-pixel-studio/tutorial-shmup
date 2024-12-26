import { PlayerProjectile } from "@component/player/PlayerProjectile";
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

export const playerProjectileFactory = (assetManager: AssetManager, position: Vector2) => [
    new Transform({ position }),
    new SpriteRenderer({
        layer: RENDER_LAYERS.Projectile,
    }),
    new Animator({
        animation: "default",
        animations: new Map([
            [
                "default",
                new Animation({
                    image: assetManager.getImage(ASSETS.images.laserBolts),
                    fps: 8,
                    loop: false,
                    slice: { size: new Vector2(16, 16), offset: new Vector2(), padding: new Vector2() },
                    frames: [2, 3],
                }),
            ],
        ]),
    }),
    new RigidBody({
        type: RigidBodyType.Dynamic,
    }),
    new BoxCollider({
        width: 12,
        height: 12,
        layer: COLLISION_LAYERS.PlayerProjectile,
        physics: false,
    }),
    PlayerProjectile,
];
