import { GameController } from "@component/game/GameController";
import { Score } from "@component/hud/Score";
import { GameSystem, TextRenderer } from "angry-pixel";

export class ScoreSystem extends GameSystem {
    onUpdate(): void {
        this.entityManager.search(Score).forEach(({ entity }) => {
            const textRenderer = this.entityManager.getComponent(entity, TextRenderer);
            const { score } = this.entityManager.search(GameController)[0].component;

            textRenderer.text = score.toString().padStart(6, "0");
        });
    }
}
