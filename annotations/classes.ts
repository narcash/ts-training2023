class Vehicle {
    // public drive(): void {
    //     console.log(`I'm driving!`);
    // }
    //**  */
    // color: string;
    // constructor(color: string) {
    //     this.color = color;
    // }
    constructor(public color: string) { }
    public stop(): void {
        console.log(`I've stopped!`);
    }
    protected beep(): void {
        console.log(`beep!`);
    }
}
class Car extends Vehicle {
    private drive(): void {
        console.log(`I'm a car and I'm driving!`);
    }
    startDrivingProcess(): void {
        this.drive();
        this.beep();
    }
    constructor(public wheels: number, color: string) {
        super(color);
    }
}

const vehicle = new Vehicle('white');
console.log(vehicle.color);

// vehicle.drive();
// vehicle.stop();

const car = new Car(4, 'red');
// car.startDrivingProcess();
// car.stop();