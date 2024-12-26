import { GameConfig } from "angry-pixel";
import { collisionMatrix } from "./collisionMatrix";

const params = new URLSearchParams(window.location.search);

// create game
export const gameConfig: GameConfig = {
    containerNode: document.querySelector("#app"),
    width: 1920,
    height: 1080,
    canvasColor: "#000000",
    collisions: {
        collisionMatrix,
    },
    debugEnabled: Boolean(Number(params.get("debug"))),
};
