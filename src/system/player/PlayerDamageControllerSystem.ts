import { PlayerStatus } from "@component/player/PlayerStatus";
import { COLLISION_LAYERS } from "@config/layers";
import { BoxCollider, GameSystem, SpriteRenderer } from "angry-pixel";

export class PlayerDamageControllerSystem extends GameSystem {
    public onUpdate(): void {
        this.entityManager.search(PlayerStatus).forEach(({ entity, component: playerStatus }) => {
            const collider = this.entityManager.getComponent(entity, BoxCollider);
            const collisions = this.collisionRepository.findCollisionsForColliderAndLayer(
                collider,
                COLLISION_LAYERS.Enemy,
            );

            if (collisions.length > 0 && !playerStatus.invulnerable) {
                playerStatus.hits += 1;
                playerStatus.invulnerable = true;

                this.timeManager.setInterval({
                    callback: () => {
                        playerStatus.invulnerable = false;
                    },
                    delay: playerStatus.invulnerableTime,
                    times: 1,
                });
            }

            this.entityManager.getComponent(entity, SpriteRenderer).opacity = playerStatus.invulnerable ? 0.5 : 1;
        });
    }
}
