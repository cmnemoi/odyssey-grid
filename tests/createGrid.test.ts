import { beforeEach, describe, it, expect } from "vitest";
import { Grid } from "../src/domain/model/grid";
import { InMemoryGridRepository } from "../src/infrastructure/persistence/in_memory/inMemoryGridRepository";
import { CreateGridUseCase } from "../src/application/usecases/createGridUseCase";

describe("Grid creation", () => {
  const gridRepository = new InMemoryGridRepository();

  beforeEach(() => {
    gridRepository.clear();
  });

  it("should create grid", () => {
    const gridRepository = new InMemoryGridRepository();
    const createGridUseCase = new CreateGridUseCase(gridRepository);

    const gridId = createGridUseCase.execute(10, 10);

    const expectedGrid = new Grid(10, 10);
    const actualGrid = gridRepository.find();

    expect(actualGrid).toEqual(expectedGrid);
  });

  it("should not create another grid if one already exists", () => {
    const createdGrid = new Grid(10, 10);
    gridRepository.save(createdGrid);

    const createGridUseCase = new CreateGridUseCase(gridRepository);

    expect(() => createGridUseCase.execute(10, 10)).toThrowError(
      "Grid already exists"
    );
  });
});
