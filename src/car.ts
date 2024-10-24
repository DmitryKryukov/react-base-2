interface ICarSystem {
    getStatus(): string;
}

interface IEngine extends ICarSystem {
    start(): void;
    stop(): void;
}

interface IWheels extends ICarSystem {
    rotate(): void;
    brake(): void;
}

interface ILights extends ICarSystem {
    turnOn(): void;
    turnOff(): void;
}

interface ICar {
    engine: IEngine;
    wheels: IWheels;
    lights: ILights;
    displayInfo(): void;
}

class CarSystem {
    protected car: ICar;
    protected isActive: boolean = false;

    constructor(car: ICar) {
        this.car = car;
    }

    getStatus(activeMessage: string, inactiveMessage: string): string {
        return this.isActive ? activeMessage : inactiveMessage;
    }
}

class BasicEngine extends CarSystem implements IEngine {
    constructor(car: ICar) {
        super(car);
    }

    start(): void {
        this.isActive = true;
        console.log("%c▶️ Двигатель запущен.", "color: green;");
    }

    stop(): void {
        this.isActive = false;
        console.log("%c⏸ Двигатель заглушен.", "color: red;");
    }

    getStatus(): string {
        return super.getStatus("Двигатель активен.", "Двигатель не активен.");
    }
}

class BasicWheels extends CarSystem implements IWheels {
    rotate(): void {
        this.isActive = true;
        console.log("%c▶️ Колёса начали вращаться.", "color: green;");
    }

    brake(): void {
        this.isActive = false;
        console.log("%c⏸ Колёса заблокированы.", "color: red;");
    }

    getStatus(): string {
        return super.getStatus("Колёса вращаются.", "Колёса не вращаются.");
    }
}

class BasicLights extends CarSystem implements ILights {
    turnOn(): void {
        this.isActive = true;
        console.log("%c▶️ Фары включены.", "color: green;");
    }

    turnOff(): void {
        this.isActive = false;
        console.log("%c⏸ Фары выключены.", "color: red;");
    }

    getStatus(): string {
        return super.getStatus("Фары горят.", "Фары не горят.");
    }
}

class Car implements ICar {
    engine: IEngine;
    wheels: IWheels;
    lights: ILights;

    constructor() {
        this.engine = new BasicEngine(this);
        this.wheels = new BasicWheels(this);
        this.lights = new BasicLights(this);
    }

    displayInfo(): void {
        const statuses = [
            this.engine.getStatus(),
            this.wheels.getStatus(),
            this.lights.getStatus()
        ].join('\n');
        console.log(`\n🚗 Состояние автомобиля:\n${statuses}\n---\n`);
    }
}

export { Car };