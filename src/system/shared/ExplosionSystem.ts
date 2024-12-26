import { Explosion } from "@component/shared/Explosion";
import { Animator, GameSystem } from "angry-pixel";

export class ExplosionSystem extends GameSystem {
    public onUpdate(): void {
        this.entityManager.search(Explosion).forEach(({ component: explosion, entity }) => {
            const animator = this.entityManager.getComponent(entity, Animator);

            explosion.animationStarted = animator.playing || explosion.animationStarted;

            if (explosion.animationStarted && !animator.playing) {
                this.entityManager.removeEntity(entity);
            }
        });
    }
}
