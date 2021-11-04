import Vehicle from "./Vehicle.js";

export default class Truck extends Vehicle {
    constructor(carModel, carYear, maxSpeed, gasTank, maxGasTank) {
        super(carModel, carYear, maxSpeed, gasTank, maxGasTank);
        this.type = "truck";
    }

    static carryGoods() {
        console.log("I'm transporting different things");
    }
}
