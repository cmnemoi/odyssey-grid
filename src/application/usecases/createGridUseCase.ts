import { Grid } from "../../domain/model/grid";
import { IdResponse } from "../../domain/viewmodel/idResponse";
import { GridRepositoryInterface } from "../ports/gridRepositoryInterface.ts";
import { GridAlreadyExistsError } from "../../core/errors/gridAlreadyExistsError";

export class CreateGridUseCase {
  private gridRepository: GridRepositoryInterface;

  constructor(gridRepository: GridRepositoryInterface) {
    this.gridRepository = gridRepository;
  }

  public execute(width: number, height: number): string {
    const grid = new Grid(width, height);

    if (this.gridRepository.doesGridExist()) {
      throw new GridAlreadyExistsError();
    }

    this.gridRepository.save(grid);

    return new IdResponse(grid.id).id;
  }
}
