export class GridAlreadyExistsError extends Error {
  constructor() {
    super("Grid already exists");
  }
}
