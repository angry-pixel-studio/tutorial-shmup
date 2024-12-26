import { EnemyDamageController } from "@component/enemy/EnemyDamageController";
import { PlayerStatus } from "@component/player/PlayerStatus";
import { COLLISION_LAYERS } from "@config/layers";
import { explosionFactory } from "@factory/shared/ExplosionFactory";
import { BoxCollider, GameSystem, Transform } from "angry-pixel";

export class EnemyDamageControllerSystem extends GameSystem {
    public onUpdate(): void {
        this.entityManager.search(EnemyDamageController).forEach(({ component: damageController, entity }) => {
            const collider = this.entityManager.getComponent(entity, BoxCollider);
            const playerCollisions = this.collisionRepository.findCollisionsForColliderAndLayer(
                collider,
                COLLISION_LAYERS.Player,
            );
            const projectileCollisions = this.collisionRepository.findCollisionsForColliderAndLayer(
                collider,
                COLLISION_LAYERS.PlayerProjectile,
            );

            projectileCollisions.forEach(() => {
                damageController.hitPoints -= 1;
            });

            const invulnerable = this.entityManager.search(PlayerStatus)[0]?.component?.invulnerable;

            if ((playerCollisions.length > 0 && !invulnerable) || damageController.hitPoints <= 0) {
                const transform = this.entityManager.getComponent(entity, Transform);
                this.entityManager.createEntity(explosionFactory(this.assetManager, transform.position));
                this.entityManager.removeEntity(entity);
            }
        });
    }
}
