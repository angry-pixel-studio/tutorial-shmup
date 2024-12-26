import { CollisionMatrix } from "angry-pixel";
import { COLLISION_LAYERS } from "./layers";

export const collisionMatrix = [
    [COLLISION_LAYERS.Player, COLLISION_LAYERS.StageBoundaries],
    [COLLISION_LAYERS.Player, COLLISION_LAYERS.Enemy],
    [COLLISION_LAYERS.Player, COLLISION_LAYERS.EnemyProjectile],
    [COLLISION_LAYERS.PlayerProjectile, COLLISION_LAYERS.Enemy],
] as CollisionMatrix;
