"use strict";
//Assignment 02
class Vehicle {
    constructor(_make, _model, _year, _rented) {
        this._make = _make;
        this._model = _model;
        this._year = _year;
        this._rented = _rented;
    }
    get make() {
        return this._make;
    }
    get model() {
        return this._model;
    }
    get year() {
        return this._year;
    }
    get rented() {
        return this._rented;
    }
    set rented(rented) {
        this._rented = rented;
    }
    rent() {
        if (this.rented) {
            console.log("Sorry, this vehicle is already rented.");
        }
        else {
            this.rented = true;
            console.log("You have rented this vehicle.");
        }
    }
    return() {
        if (this.rented) {
            this.rented = false;
            console.log("Thank you for returning this vehicle.");
        }
        else {
            console.log("This vehicle has not been rented yet.");
        }
    }
}
class Car extends Vehicle {
    constructor(make, model, year, rented, name, tyres, color) {
        super(make, model, year, rented);
        this.name = "string";
        this.tyres = tyres;
        this.color = color;
        this.name = name;
    }
    rentalRate() {
        console.log("The Rental Rate of a car is 20k");
    }
}
class Truck extends Vehicle {
    constructor(make, model, year, rented, name, tyres, color) {
        super(make, model, year, rented);
        this.name = "string";
        this.tyres = tyres;
        this.color = color;
        this.name = name;
    }
    rentalRate() {
        console.log("The Rental Rate of a Truck is 80k");
    }
}
class MotorCycle extends Vehicle {
    constructor(make, model, year, rented, name, tyres, color) {
        super(make, model, year, rented);
        this.name = "string";
        this.tyres = tyres;
        this.color = color;
        this.name = name;
    }
    rentalRate() {
        console.log("The Rental Rate of a MotorCycle is 10k");
    }
}
const motorcycle = new MotorCycle("make", 1999, 2002, false, "honda", 2, "red");
console.log("---------Instance of a MotorCycle---------");
console.log(motorcycle.rentalRate());
console.log("Nmae : " + motorcycle.name, "Color : " + motorcycle.color, "Tyres :" + motorcycle.tyres);
console.log(motorcycle.rent());
console.log(motorcycle.return());
const truck = new Truck("make", 1989, 1975, false, "PSO", 22, "Black and White");
console.log("---------Instance of a Truck---------");
console.log(truck.rentalRate());
console.log("Nmae : " + truck.name, "Color : " + truck.color, "Tyres : " + truck.tyres);
console.log(truck.rent());
console.log(truck.return());
const car = new Car("make", 1989, 1975, true, "Civic", 4, "Black ");
console.log("---------Instance of a Car---------");
console.log(car.rentalRate());
console.log("Nmae : " + car.name, "Color : " + car.color, "Tyres : " + motorcycle.tyres);
console.log(truck.rent());
console.log(truck.return());
//# sourceMappingURL=app.js.map