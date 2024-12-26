import { InputController } from "@component/input/InputController";
import { PlayerWeapon } from "@component/player/PlayerWeapon";
import { playerProjectileFactory } from "@factory/player/PlayerProjectileFactory";
import { GameSystem, Transform } from "angry-pixel";

export class PlayerWeaponSystem extends GameSystem {
    public onUpdate(): void {
        const inputController = this.entityManager.search(InputController)[0].component;

        this.entityManager.search(PlayerWeapon).forEach(({ component: playerWeapon, entity }) => {
            if (inputController.fire && playerWeapon.fireReleased) {
                playerWeapon.intervalId = this.timeManager.setInterval({
                    callback: () => {
                        const { position } = this.entityManager.getComponent(entity, Transform);
                        this.entityManager.createEntity(playerProjectileFactory(this.assetManager, position.clone()));
                    },
                    delay: playerWeapon.cooldown,
                    executeImmediately: true,
                });
            } else if (!inputController.fire) {
                this.timeManager.clearInterval(playerWeapon.intervalId);
            }

            playerWeapon.fireReleased = !inputController.fire;
        });
    }
}
