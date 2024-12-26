import { PlayerLives } from "@component/hud/PlayerLives";
import { GameSystem, SpriteRenderer } from "angry-pixel";

export class PlayerLivesSystem extends GameSystem {
    onUpdate(): void {
        this.entityManager.search(PlayerLives).forEach(({ entity, component: { lives, maxLives } }) => {
            const spriteRenderer = this.entityManager.getComponent(entity, SpriteRenderer);

            if (lives !== maxLives) {
                spriteRenderer.tiled.x = lives;
                spriteRenderer.offset.x = ((lives - maxLives) * spriteRenderer.width) / 2;
            }
        });
    }
}
