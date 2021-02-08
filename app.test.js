describe("#Part One: class Vehicle", function () {

    const newVehicle = new Vehicle("Toyota", "Camry", 1999);
    const errorYearBeforeCars = () => {
        return new Vehicle("Toyota", "Camry", 1885);
    }
    const errorYearIsString = () => {
        return new Vehicle("Toyota", "Camry", "2020");
    }
    const makeNotString = () => {
        return new Vehicle(1234, "Camry", 2020);
    }
    const modelNotString = () => {
        return new Vehicle("Toyota", 1234, 2020);
    }

    it("should return honk", function () {
        expect(newVehicle.honk()).toEqual("Beep.");
    });

    it("should return string with object properties", function () {
        expect(newVehicle.toString()).toEqual("The vehicle is a Toyota Camry from 1999.");
    });

    it("should throw error for the year", function () {
        expect(errorYearBeforeCars).toThrow(new Error("Must provide an appropriate year!"));
    });
    it("should throw error for the year", function () {
        expect(errorYearIsString).toThrow(new Error("Must provide an appropriate year!"));
    });

    it("should throw error for the make", function () {
        expect(makeNotString).toThrow(new Error("Make and Model must be strings!"));
    });

    it("should throw error for the model", function () {
        expect(modelNotString).toThrow(new Error("Make and Model must be strings!"));
    });

});


describe("#Part Two: class Car", function () {

    const newCar = new Car("Toyota", "Camry", 1999);

    it("should return honk", function () {
        expect(newCar.honk()).toEqual("Beep.");
    });

    it("should return string with object properties", function () {
        expect(newCar.toString()).toEqual("The vehicle is a Toyota Camry from 1999.");
    });

    it("should return numWheels as 4", function () {
        expect(newCar.numWheels).toEqual(4);
    });
});


describe("#Part Three: class Motocyle", function () {

    const newMotorcycle = new Motorcycle("Toyota", "Camry", 1999);

    it("should return honk", function () {
        expect(newMotorcycle.honk()).toEqual("Beep.");
    });

    it("should return VROOM", function () {
        expect(newMotorcycle.revEngine()).toEqual("VROOM!!!");
    });

    it("should return string with object properties", function () {
        expect(newMotorcycle.toString()).toEqual("The vehicle is a Toyota Camry from 1999.");
    });

    it("should return numWheels as 4", function () {
        expect(newMotorcycle.numWheels).toEqual(2);
    });
});


describe("#Part Four: class Garage", function () {

    const newGarage = new Garage(2);
    newGarage.add(new Car("Hyundai", "Elantra", 2015));
    newGarage.add(new Motorcycle("Honda", "Nighthawk", 2001));

    it("should return a newGarage.vehicles.length to equal 2", function () {
        expect(newGarage.vehicles.length).toEqual(2);
    });

    it("should return only vehicles are allowed", function () {
        expect(newGarage.add("Taco")).toEqual("Only vehicles are allowed in here!");
    });

    it("should return Sorry, we're full", function () {
        expect(newGarage.add(new Motorcycle("Toyota", "Camry", 1999))).toEqual("Sorry, we're Full!");
    });

});

