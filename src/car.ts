interface IEngine {
    start(): void;
    stop(): void;
    getStatus(): string;
}

interface IWheels {
    rotate(): void;
    brake(): void;
    getStatus(): string;
}

interface ILights {
    turnOn(): void;
    turnOff(): void;
    getStatus(): string;
}

interface ICar {
    engine: IEngine;
    wheels: IWheels;
    lights: ILights;
    displayInfo(): void;
}

class BasicEngine implements IEngine {
    private running: boolean = false;

    start(): void  {
        this.running = true;
        console.log("%c▶️ Двигатель запущен.", "color: green;");
    }

    stop(): void {
        this.running = false;
        console.log("%c⏸ Двигатель заглушен.", "color: red;");
    }

    getStatus(): string {
        return this.running ? "Двигатель работает." : "Двигатель не работает.";
    }
}

class BasicWheels implements IWheels {
    private rotating: boolean = false;

    rotate(): void  {
        this.rotating = true;
        console.log("%c▶️ Колёса начали вращаться.", "color: green;");
    }
    brake(): void  {
        this.rotating = false;
        console.log("%c⏸ Колёса заблокированы.", "color: red;");
    }

    getStatus(): string {
        return this.rotating ? "Колёса вращаются." : "Колёса не вращаются.";
    }
}

class BasicLights implements ILights {
    private on: boolean = false;

    turnOn(): void {
        this.on = true;
        console.log("%c▶️ Фары включены.", "color: green;");
    }

    turnOff(): void {
        this.on = false;
        console.log("%c⏸ Фары выключены.", "color: red;");
    }

    getStatus(): string {
        return this.on ? "Фары горят." : "Фары не горят.";
    }
}

class Car implements ICar {
    engine: IEngine;
    wheels: IWheels;
    lights: ILights;

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

export { Car }