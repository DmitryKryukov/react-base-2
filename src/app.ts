import { Car } from "./car";

const myCar = new Car();
myCar.displayInfo();

myCar.engine.start();
myCar.lights.turnOn();
myCar.wheels.rotate();
myCar.displayInfo();

myCar.engine.stop();
myCar.lights.turnOff();
myCar.wheels.brake();
myCar.displayInfo();