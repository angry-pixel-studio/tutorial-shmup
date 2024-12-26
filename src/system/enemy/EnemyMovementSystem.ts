import { EnemyMovements } from "@component/enemy/EnemyMovements";
import { PARAMETERS } from "@config/parameters";
import { GameSystem, RigidBody, Transform, Vector2 } from "angry-pixel";

export class EnemyMovementSystem extends GameSystem {
    public onUpdate(): void {
        this.entityManager.search(EnemyMovements).forEach(({ component: { direction, speed }, entity }) => {
            const rigidBody = this.entityManager.getComponent(entity, RigidBody);
            const { position } = this.entityManager.getComponent(entity, Transform);
            const { bottom } = PARAMETERS.stageBoundaries;

            if (position.y < bottom) {
                this.entityManager.removeEntity(entity);
                return;
            }

            Vector2.scale(rigidBody.velocity, direction, speed);
        });
    }
}
