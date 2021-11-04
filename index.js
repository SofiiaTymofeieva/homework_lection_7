import Car from './src/Car.js'
import Motorcycle from './src/Motorcycle.js';
import Truck from './src/Truck.js';


const Shewrole = new Car('Impala', 1966, 180, 30, 50);
Shewrole.transportPeople();
Shewrole.drive();
console.log(Shewrole.gasTank)
Shewrole.drive();
Shewrole.drive();
console.log(Shewrole.gasTank)
Shewrole.drive();
console.log('-------------');

const HarleyDavidson = new Motorcycle('V-ROD', 2010, 300, 20, 30);
HarleyDavidson.getGas();
HarleyDavidson.getGas();
HarleyDavidson.getGas();
console.log(HarleyDavidson.gasTank);
HarleyDavidson.drive();
console.log(HarleyDavidson.gasTank);
console.log('-------------');


Truck.carryGoods();
const Scania = new Truck('Scania', 2008, 240, 60, 100);
Scania.displayInfo();