import Vehicle from "./Vehicle.js";

export default class Car extends Vehicle {
    constructor(carModel, carYear, maxSpeed, gasTank, maxGasTank) {
        super(carModel, carYear, maxSpeed, gasTank, maxGasTank);
        this.type = "car";
    }

    transportPeople() {
        console.log(`I am starting transporting passengers`);
    }
}
