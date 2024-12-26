import { PlayerProjectile } from "@component/player/PlayerProjectile";
import { COLLISION_LAYERS } from "@config/layers";
import { PARAMETERS } from "@config/parameters";
import { BoxCollider, GameSystem, RigidBody, Transform } from "angry-pixel";

export class PlayerProjectileSystem extends GameSystem {
    public onUpdate(): void {
        this.entityManager.search(PlayerProjectile).forEach(({ component: playerProjectile, entity }) => {
            const enemyCollisions = this.collisionRepository.findCollisionsForColliderAndLayer(
                this.entityManager.getComponent(entity, BoxCollider),
                COLLISION_LAYERS.Enemy,
            );
            const { position } = this.entityManager.getComponent(entity, Transform);

            if (enemyCollisions.length > 0 || position.y > PARAMETERS.stageBoundaries.top) {
                this.entityManager.removeEntity(entity);
            } else {
                this.entityManager.getComponent(entity, RigidBody).velocity.set(0, playerProjectile.speed);
            }
        });
    }
}
