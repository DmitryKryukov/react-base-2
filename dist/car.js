"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
class BasicEngine {
    constructor() {
        this.running = false;
    }
    start() {
        this.running = true;
        console.log("%c▶️ Двигатель запущен.", "color: green;");
    }
    stop() {
        this.running = false;
        console.log("%c⏸ Двигатель заглушен.", "color: red;");
    }
    getStatus() {
        return this.running ? "Двигатель работает." : "Двигатель не работает.";
    }
}
class BasicWheels {
    constructor() {
        this.rotating = false;
    }
    rotate() {
        this.rotating = true;
        console.log("%c▶️ Колёса начали вращаться.", "color: green;");
    }
    brake() {
        this.rotating = false;
        console.log("%c⏸ Колёса заблокированы.", "color: red;");
    }
    getStatus() {
        return this.rotating ? "Колёса вращаются." : "Колёса не вращаются.";
    }
}
class BasicLights {
    constructor() {
        this.on = false;
    }
    turnOn() {
        this.on = true;
        console.log("%c▶️ Фары включены.", "color: green;");
    }
    turnOff() {
        this.on = false;
        console.log("%c⏸ Фары выключены.", "color: red;");
    }
    getStatus() {
        return this.on ? "Фары горят." : "Фары не горят.";
    }
}
class Car {
    constructor() {
        this.engine = new BasicEngine();
        this.wheels = new BasicWheels();
        this.lights = new BasicLights();
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
