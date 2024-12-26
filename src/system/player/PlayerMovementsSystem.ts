import { InputController } from "@component/input/InputController";
import { PlayerMovements } from "@component/player/PlayerMovements";
import { GameSystem, RigidBody, Vector2 } from "angry-pixel";

export class PlayerMovementsSystem extends GameSystem {
    // auxiliar
    private unitAxes: Vector2 = new Vector2();

    public onUpdate(): void {
        const inputController = this.entityManager.search(InputController)[0].component;

        this.entityManager.search(PlayerMovements).forEach(({ component: { speed }, entity }) => {
            const rigidBody = this.entityManager.getComponent(entity, RigidBody);

            Vector2.scale(rigidBody.velocity, Vector2.unit(this.unitAxes, inputController.axes), speed);
        });
    }
}
