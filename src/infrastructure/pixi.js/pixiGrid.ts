import { Application, Assets, Container, Sprite } from "pixi.js";
import { getRuneUrl } from "../../core/assets/runes/getRuneUrl";

const RUNE_SIZE = 20;
const RUNES_COUNT = 36;
const RUNES = ["axe", "potion", "shield", "sword"];

export class PixiGrid {
  public app: Application;

  constructor() {
    this.app = new Application();
  }

  public async setup(parentElement: HTMLElement) {
    await this.app.init({
      width: RUNE_SIZE * 6,
      height: RUNE_SIZE * 6,
      background: "#122931",
    });
    parentElement.appendChild(this.app.canvas);
  }

  public async preload() {
    const assets = RUNES.map((rune) => ({
      alias: rune,
      src: getRuneUrl(rune),
    }));

    await Assets.load(assets);
  }

  public addRunes() {
    const runesContainer = new Container();

    this.app.stage.addChild(runesContainer);

    for (let i = 0; i < RUNES_COUNT; i++) {
      const runeName = RUNES[Math.floor(Math.random() * RUNES.length)];

      const runeSprite = Sprite.from(runeName);

      // Center the rune anchor
      runeSprite.anchor.set(0.5);

      // Position the rune
      runeSprite.x = (i % 6) * RUNE_SIZE + RUNE_SIZE / 2;
      runeSprite.y = Math.floor(i / 6) * RUNE_SIZE + RUNE_SIZE / 2;

      // Add the rune sprite to the container
      runesContainer.addChild(runeSprite);

      // Opt-in to interactivity
      runeSprite.eventMode = "static";

      // Shows hand cursor
      runeSprite.cursor = "pointer";

      // Pointers normalize touch and mouse (good for mobile and desktop)
      runeSprite.on("pointerdown", onClick);

      function onClick() {
        // remove the rune
        runesContainer.removeChild(runeSprite);
      }
    }
  }
}
