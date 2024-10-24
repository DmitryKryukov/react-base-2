"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
class CarSystem {
    constructor(car) {
        this.isActive = false;
        this.car = car;
    }
    getStatus(activeMessage, inactiveMessage) {
        return this.isActive ? activeMessage : inactiveMessage;
    }
}
class BasicEngine extends CarSystem {
    constructor(car) {
        super(car);
    }
    start() {
        this.isActive = true;
        console.log("%c▶️ Двигатель запущен.", "color: green;");
    }
    stop() {
        this.isActive = false;
        console.log("%c⏸ Двигатель заглушен.", "color: red;");
    }
    getStatus() {
        return super.getStatus("Двигатель активен.", "Двигатель не активен.");
    }
}
class BasicWheels extends CarSystem {
    rotate() {
        this.isActive = true;
        console.log("%c▶️ Колёса начали вращаться.", "color: green;");
    }
    brake() {
        this.isActive = false;
        console.log("%c⏸ Колёса заблокированы.", "color: red;");
    }
    getStatus() {
        return super.getStatus("Колёса вращаются.", "Колёса не вращаются.");
    }
}
class BasicLights extends CarSystem {
    turnOn() {
        this.isActive = true;
        console.log("%c▶️ Фары включены.", "color: green;");
    }
    turnOff() {
        this.isActive = false;
        console.log("%c⏸ Фары выключены.", "color: red;");
    }
    getStatus() {
        return super.getStatus("Фары горят.", "Фары не горят.");
    }
}
class Car {
    constructor() {
        this.engine = new BasicEngine(this);
        this.wheels = new BasicWheels(this);
        this.lights = new BasicLights(this);
    }
    displayInfo() {
        const statuses = [
            this.engine.getStatus(),
            this.wheels.getStatus(),
            this.lights.getStatus()
        ].join('\n');
        console.log(`\n🚗 Состояние автомобиля:\n${statuses}\n---\n`);
    }
}
exports.Car = Car;
