class Building {
    constructor(sqft) {
        this._sqft = sqft;
    }

    // Getter for _sqft
    get sqft() {
        return this._sqft;
    }

    // Abstract method (to be overridden by subclasses)
    evacuationWarningMessage() {
        throw new Error("Class extending Building must override evacuationWarningMessage");
    }
}

// Example usage
const b = new Building(100);
console.log(b.sqft); // Prints 100

class TestBuilding extends Building {
    // You must override evacuationWarningMessage in subclasses
    evacuationWarningMessage() {
        return "Evacuate the building!";
    }
}

try {
    new TestBuilding(200);
} catch (err) {
    console.log(err.message); // Prints "Evacuate the building!"
}
