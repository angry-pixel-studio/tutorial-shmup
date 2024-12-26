import { cameraFactory } from "@factory/CameraFactory";
import { ASSETS } from "@config/assets";
import { RENDER_LAYERS } from "@config/layers";
import { defaultRenderLayer, Scene, Vector2 } from "angry-pixel";
import { stageBackgroundFactory } from "@factory/stage/StageBackgroundFactory";
import { stageBoundariesFactory } from "@factory/stage/StageBoundariesFactory";
import { BackgroundScrollerSystem } from "@system/stage/BackgroundScrollerSystem";
import { playerFactory } from "@factory/player/PlayerFactory";
import { InputControllerSystem } from "@system/input/InputControllerSystem";
import { PlayerMovementsSystem } from "@system/player/PlayerMovementsSystem";
import { InputController } from "@component/input/InputController";
import { EnemyMovementSystem } from "@system/enemy/EnemyMovementSystem";
import { ExplosionSystem } from "@system/shared/ExplosionSystem";
import { EnemyDamageControllerSystem } from "@system/enemy/EnemyDamageControllerSystem";
import { PlayerWeaponSystem } from "@system/player/PlayerWeaponSystem";
import { PlayerProjectileSystem } from "@system/player/PlayerProjectileSystem";
import { EnemySpawnerSystem } from "@system/enemy/EnemySpawnerSystem";
import { PlayerDamageControllerSystem } from "@system/player/PlayerDamageControllerSystem";
import { PlayerStatusSystem } from "@system/player/PlayerStatusSystem";
import { hudFactory } from "@factory/hud/HudFactory";
import { PlayerLivesSystem } from "@system/hud/PlayerLivesSystem";
import { ScoreSystem } from "@system/hud/ScoreSystem";
import { GameControllerSystem } from "@system/game/GameControllerSystem";
import { GameController } from "@component/game/GameController";

export class GameScene extends Scene {
    loadAssets(): void {
        Object.values(ASSETS.images).forEach((filename) => this.assetManager.loadImage(filename));
        Object.values(ASSETS.fonts).forEach((data) => this.assetManager.loadFont(data.name, data.url));
        Object.values(ASSETS.audio).forEach((filename) => this.assetManager.loadAudio(filename));
    }

    loadSystems(): void {
        this.systems.push(
            GameControllerSystem,
            BackgroundScrollerSystem,
            InputControllerSystem,
            PlayerMovementsSystem,
            PlayerWeaponSystem,
            PlayerProjectileSystem,
            EnemySpawnerSystem,
            EnemyMovementSystem,
            EnemyDamageControllerSystem,
            PlayerDamageControllerSystem,
            PlayerStatusSystem,
            ExplosionSystem,
            PlayerLivesSystem,
            ScoreSystem,
        );
    }

    setup(): void {
        // Camera
        this.entityManager.createEntity(
            cameraFactory([
                RENDER_LAYERS.Background,
                RENDER_LAYERS.Projectile,
                RENDER_LAYERS.Player,
                RENDER_LAYERS.Enemy,
                RENDER_LAYERS.Explosion,
                RENDER_LAYERS.Hud,
                defaultRenderLayer,
            ]),
        );

        // Game Management Entities
        this.entityManager.createEntity([GameController]);
        this.entityManager.createEntity([InputController]);

        // Stage Entities
        this.entityManager.createEntity(stageBackgroundFactory(this.assetManager));
        this.entityManager.createEntity(stageBoundariesFactory());

        // Player Entity
        this.entityManager.createEntity(playerFactory(this.assetManager, new Vector2(0, -92)));

        // HUD Entities
        this.entityManager.createEntities(hudFactory(this.assetManager));
    }
}
