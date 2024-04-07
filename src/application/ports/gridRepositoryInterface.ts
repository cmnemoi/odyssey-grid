import { Grid } from "../../domain/model/grid.ts";

export interface GridRepositoryInterface {
  clear(): void;

  doesGridExist(): boolean;

  find(id: string): Grid | undefined;

  save(grid: Grid): void;
}
