import "./style.css";
import { PixiGrid } from "./infrastructure/pixi.js/pixiGrid";

const appElement = document.getElementById("app")!;

const grid = new PixiGrid();

await grid.setup(appElement);
await grid.preload();

grid.addRunes();
