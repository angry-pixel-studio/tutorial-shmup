import { Game } from "angry-pixel";
import { GameScene } from "@scene/GameScene";
import { gameConfig } from "@config/gameConfig";

export const createAndStart = () => {
    // create game
    const game = new Game(gameConfig);

    //  add scenes
    game.addScene(GameScene, "GameScene", true);

    // start game
    game.start();
};

createAndStart();
