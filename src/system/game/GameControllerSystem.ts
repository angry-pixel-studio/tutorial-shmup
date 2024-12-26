import { GameController } from "@component/game/GameController";
import { GameSystem } from "angry-pixel";

export class GameControllerSystem extends GameSystem {
    onUpdate() {
        this.entityManager.search(GameController).forEach(({ component: gameController }) => {
            if (gameController.gameOver) {
                // todo: show gameover messaage entity
            }
        });
    }
}
