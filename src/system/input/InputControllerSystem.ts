import { InputController } from "@component/input/InputController";
import { GameSystem, Keyboard } from "angry-pixel";

export class InputControllerSystem extends GameSystem {
    public onUpdate(): void {
        this.entityManager.search(InputController).forEach(({ component: inputController }) => {
            const { keyboard } = this.inputManager;

            inputController.axes.x = keyboard.isPressedReturn("KeyA", -1, keyboard.isPressedReturn("KeyD", 1, 0));
            inputController.axes.y = keyboard.isPressedReturn("KeyW", 1, keyboard.isPressedReturn("KeyS", -1, 0));
            inputController.fire = keyboard.isPressed("Space");
            inputController.anyKeyPressed = keyboard.pressedKeys.length > 0;
        });
    }
}
