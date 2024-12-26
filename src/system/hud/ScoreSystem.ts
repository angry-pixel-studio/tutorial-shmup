import { Score } from "@component/hud/Score";
import { GameSystem, SpriteRenderer, TextRenderer } from "angry-pixel";

export class ScoreSystem extends GameSystem {
    onUpdate(): void {
        this.entityManager.search(Score).forEach(({ entity, component: { score } }) => {
            const textRenderer = this.entityManager.getComponent(entity, TextRenderer);
            textRenderer.text = score.toString().padStart(6, "0");
        });
    }
}
