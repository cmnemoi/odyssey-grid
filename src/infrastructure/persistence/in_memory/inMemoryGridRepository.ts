import { Grid } from "../../../domain/model/grid.ts";
import { GridRepositoryInterface } from "../../../application/ports/gridRepositoryInterface.ts";

export class InMemoryGridRepository implements GridRepositoryInterface {
  private grid = new Set<Grid>();

  clear() {
    this.grid.clear();
  }

  doesGridExist(): boolean {
    return this.grid.size > 0;
  }

  find(): Grid | undefined {
    return this.grid.values().next().value;
  }

  save(grid: Grid) {
    this.grid.add(grid);
  }
}
