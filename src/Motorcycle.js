import Vehicle from "./Vehicle.js";

export default class Motorcycle extends Vehicle {
    constructor(motoModel, motoYear, maxSpeed, gasTank, maxGasTank){
        super(motoModel, motoYear, maxSpeed, gasTank, maxGasTank);
        this.type = "motorcycle";
    }

    getGas(){
        if(this.gasTank < this.maxGasTank){
            this.gasTank += 5;
        } else {
            console.log("Your gas tank is full");
        }

        return this.gasTank;
    }

    drive(){
        if(this.gasTank > 0){
            this.gasTank -= 5;
        } else {
            console.log("Your gas tank is empty");
        }

        return this.gasTank;
    }
}