export default class Vehicle {
    constructor(vehicleModel, vehicleYear, maxSpeed, gasTank, maxGasTank) {
        this.model = vehicleModel;
        this.year = vehicleYear;
        this.speed = maxSpeed;
        this.gasTank = gasTank;
        this.maxGasTank = maxGasTank;
    }

    displayInfo() {
        console.log(
            `Name: ${this.model};
            Year: ${this.year};
            Max Speed: ${this.speed};
            Type: ${this.type};
            Gas tank: ${this.gasTank};
            Max gas tank: ${this.maxGasTank};`
        );
    }

    getGas(){
        if(this.gasTank < this.maxGasTank){
            this.gasTank +=10;
        } else {
            console.log("Your gas tank is full");
        }

        return this.gasTank;
    }

    drive(){
        if(this.gasTank > 0){
            this.gasTank -=10;
        } else {
            console.log("Your gas tank is empty");
        }

        return this.gasTank;
    }

}