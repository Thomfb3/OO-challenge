//Part one
class Vehicle {
    constructor(make, model, year) {
        if (!Number.isFinite(year) || year < 1886) {
            throw new Error("Must provide an appropriate year!")
        }
        if (typeof (make) !== 'string' || typeof (model) !== 'string') {
            throw new Error("Make and Model must be strings!")
        }
        this.make = make;
        this.model = model;
        this.year = year;
    }

    honk() {
        return "Beep.";
    }

    toString() {
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`
    }
}


//Part two
class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 4;
    }
}


//Part Three
class Motorcycle extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 2;
    }

    revEngine() {
        return "VROOM!!!"
    }
}


//Part Four
class Garage {
    constructor(capacity) {
        this.capacity = capacity;
        this.vehicles = [];
    }
    add(vehicle) {
        if (!(vehicle instanceof Vehicle)) {
            return "Only vehicles are allowed in here!";
        } else if (this.vehicles.length === this.capacity) {
            return "Sorry, we're Full!"
        } else {
            this.vehicles.push(vehicle);
        }
    }
}
