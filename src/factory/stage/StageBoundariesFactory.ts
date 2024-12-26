import { COLLISION_LAYERS } from "@config/layers";
import { PARAMETERS } from "@config/parameters";
import { EdgeCollider, RigidBody, RigidBodyType, Transform, Vector2 } from "angry-pixel";

const { bottom, left, right, top } = PARAMETERS.stageBoundaries;

export const stageBoundariesFactory = () => [
    Transform,
    new RigidBody({
        type: RigidBodyType.Static,
    }),
    new EdgeCollider({
        vertexModel: [
            new Vector2(left, bottom),
            new Vector2(right, bottom),
            new Vector2(right, top),
            new Vector2(left, top),
            new Vector2(left, bottom),
        ],
        layer: COLLISION_LAYERS.StageBoundaries,
    }),
];
