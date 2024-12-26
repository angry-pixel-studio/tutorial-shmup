import { PARAMETERS } from "@config/parameters";
import { smallEnemyFactory } from "@factory/enemy/SmallEnemyFactory";
import { GameSystem, randomInt, Vector2 } from "angry-pixel";

export class EnemySpawnerSystem extends GameSystem {
    onEnabled(): void {
        this.timeManager.setInterval({
            callback: () => {
                this.spawnEnemies();
            },
            delay: 2000, // milliseconds,
            times: 1,
        });
    }

    private spawnEnemies(): void {
        const delay = 800; // milliseconds
        const offsetX = 32;

        this.timeManager.setInterval({
            callback: () => {
                const { top, left, right } = PARAMETERS.stageBoundaries;
                const position = new Vector2(randomInt(left + offsetX, right - offsetX), top);
                this.entityManager.createEntity(smallEnemyFactory(this.assetManager, position));
            },
            delay,
        });
    }
}
