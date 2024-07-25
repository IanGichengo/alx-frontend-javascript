class Building {
  constructor(sqft) {
    if (new.target === Building) {
      throw new Error("Cannot instantiate abstract class Building");
    }
    if (typeof this.evacuationWarningMessage !== "function") {
      throw new Error("Class extending Building must implement evacuationWarningMessage");
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }
}
export default Building;
