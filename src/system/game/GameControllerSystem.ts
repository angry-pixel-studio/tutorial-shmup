import { GameController } from "@component/game/GameController";
import { InputController } from "@component/input/InputController";
import { gameOverFactory } from "@factory/hud/GameOverFactory";
import { GameSystem } from "angry-pixel";

export class GameControllerSystem extends GameSystem {
    onUpdate() {
        this.entityManager.search(GameController).forEach(({ component: gameController }) => {
            const inputController = this.entityManager.search(InputController)[0].component;

            if (gameController.lives === 0 && !gameController.gameOver) {
                gameController.gameOver = true;

                this.timeManager.setInterval({
                    callback: () => {
                        gameController.gameOverMessage = true;
                        this.entityManager.createEntity(gameOverFactory(this.assetManager));
                    },
                    delay: 2000,
                    times: 1,
                });
            }

            if (gameController.gameOverMessage && inputController.anyKeyPressed) {
                this.sceneManager.loadScene("GameScene");
            }
        });
    }
}
