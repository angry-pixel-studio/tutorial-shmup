import { GameController } from "@component/game/GameController";
import { PlayerLives } from "@component/hud/PlayerLives";
import { PlayerStatus } from "@component/player/PlayerStatus";
import { GameSystem, SpriteRenderer } from "angry-pixel";

export class PlayerLivesSystem extends GameSystem {
    onUpdate(): void {
        this.entityManager.search(PlayerLives).forEach(({ entity }) => {
            const spriteRenderer = this.entityManager.getComponent(entity, SpriteRenderer);
            const { lives, maxLives } = this.entityManager.search(GameController)[0]?.component;

            if (lives !== maxLives) {
                spriteRenderer.tiled.x = lives;
                spriteRenderer.offset.x = ((lives - maxLives) * spriteRenderer.width) / 2;
            }
        });
    }
}
