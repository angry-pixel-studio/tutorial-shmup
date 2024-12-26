import { Vector2 } from "angry-pixel";

export class EnemyMovements {
    direction: Vector2;
    speed: number;

    constructor(options: Partial<EnemyMovements>) {
        Object.assign(this, options);
    }
}
