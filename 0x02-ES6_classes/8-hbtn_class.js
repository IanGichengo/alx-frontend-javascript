class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  get size() {
    return this._size;
  }

  get location() {
    return this._location;
  }

  // Overriding the default behavior of type casting to Number
  valueOf() {
    return this._size;
  }

  // Overriding the default behavior of type casting to String
  toString() {
    return this._location;
  }
}

export default HolbertonClass;
