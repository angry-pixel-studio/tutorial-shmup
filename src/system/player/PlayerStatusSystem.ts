import { PlayerLives } from "@component/hud/PlayerLives";
import { PlayerStatus } from "@component/player/PlayerStatus";
import { PlayerWeapon } from "@component/player/PlayerWeapon";
import { explosionFactory } from "@factory/shared/ExplosionFactory";
import { GameSystem, Transform } from "angry-pixel";

export class PlayerStatusSystem extends GameSystem {
    public onUpdate(): void {
        this.entityManager.search(PlayerStatus).forEach(({ entity, component: playerStatus }) => {
            const playerLives = this.entityManager.search(PlayerLives)[0].component;

            if (playerLives.maxLives === 0) playerLives.maxLives = playerStatus.lives;
            playerLives.lives = playerStatus.lives;

            if (playerStatus.lives <= 0) {
                const { position } = this.entityManager.getComponent(entity, Transform);
                this.entityManager.createEntity(explosionFactory(this.assetManager, position.clone()));

                const weapon = this.entityManager.getComponent(entity, PlayerWeapon);
                if (weapon.intervalId) this.timeManager.clearInterval(weapon.intervalId);

                this.entityManager.removeEntity(entity);
            }
        });
    }
}
