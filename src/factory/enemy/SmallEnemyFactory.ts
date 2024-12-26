import { EnemyDamageController } from "@component/enemy/EnemyDamageController";
import { EnemyMovements } from "@component/enemy/EnemyMovements";
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

export const smallEnemyFactory = (assetManager: AssetManager, position: Vector2) => [
    new Transform({ position }),
    new SpriteRenderer({
        layer: RENDER_LAYERS.Enemy,
    }),
    new Animator({
        animation: "default",
        animations: new Map([
            [
                "default",
                new Animation({
                    image: assetManager.getImage(ASSETS.images.enemySmall),
                    fps: 8,
                    loop: true,
                    slice: { size: new Vector2(16, 16), offset: new Vector2(), padding: new Vector2() },
                    frames: [0, 1],
                }),
            ],
        ]),
    }),
    new RigidBody({
        type: RigidBodyType.Dynamic,
        gravity: 0,
    }),
    new BoxCollider({
        layer: COLLISION_LAYERS.Enemy,
        width: 16,
        height: 16,
        physics: false,
    }),
    new EnemyMovements({
        direction: new Vector2(0, -1),
        speed: 150,
    }),
    new EnemyDamageController(1),
];
