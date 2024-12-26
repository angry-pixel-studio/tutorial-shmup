import { BackgroundScroller } from "@component/stage/BackgroundScroller";
import { GameSystem, Transform } from "angry-pixel";

export class BackgroundScrollerSystem extends GameSystem {
    public onEnabled(): void {
        this.entityManager.search(BackgroundScroller).forEach(({ component: backgroundScroller, entity }) => {
            this.entityManager.getComponent(entity, Transform).position.y = backgroundScroller.startPosition;
        });
    }

    public onUpdate(): void {
        this.entityManager
            .search(BackgroundScroller)
            .forEach(({ component: { endPosition, scrollSpeed, startPosition }, entity }) => {
                const transform = this.entityManager.getComponent(entity, Transform);

                transform.position.y -= scrollSpeed * this.timeManager.deltaTime;

                if (transform.position.y <= endPosition) {
                    transform.position.y = startPosition;
                }
            });
    }
}
