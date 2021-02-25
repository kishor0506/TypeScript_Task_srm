abstract class Car {
    private name: string;

    constructor(name: string) {
        this.name = name
    }
    public absbrake() {
        console.log("abs is activated");
    }
    abstract drivecar(): boolean;
    abstract startcar():string;
    abstract cruisecontrol():boolean;
    
    abstract stopcar():string;

}
class xuv extends Car {
    constructor(val: string) {
        super(val);
    }
    drivecar(): boolean {
        console.log("xuv500 is a suv model")
        return true;
    }
    stopcar():string{
        console.log("stop the car");
        return "stop";
    }
    startcar():string{
    console.log("car is running");
    return "car started"
    }
    
    cruisecontrol():boolean{
        console.log("cruise control activated");
        return true
        }
}
let x: xuv = new xuv("mahindra");
x.absbrake();
x.drivecar();
x.stopcar();
x.startcar();
x.cruisecontrol();

class honda extends Car {
    constructor(val: string) {
        super(val);
    }
    drivecar(): boolean {
        console.log("city is a sedan model")
        return true;
    }
    stopcar():string{
        console.log("stop the car");
        return "stop";
    }
    startcar():string{
    console.log("car is running");
    return "car started"
    }
    
    cruisecontrol():boolean{
        console.log("cruise control activated");
        return true
        }
}
let sedan: honda = new honda("city");
sedan.absbrake();
sedan.drivecar();
sedan.stopcar();
sedan.startcar();
sedan.cruisecontrol();

class polo extends Car {
    constructor(val: string) {
        super(val);
    }
    drivecar(): boolean {
        console.log("polo is a hatchback model")
        return true;
    }
    stopcar():string{
        console.log("stop the car");
        return "stop";
    }
    startcar():string{
    console.log("car is running");
    return "car started"
    }
    
    cruisecontrol():boolean{
        console.log("cruise control activated");
        return true
        }
}
let vw: polo = new polo("GT_TSI");
vw.absbrake();
vw.drivecar();
vw.stopcar();
vw.startcar();
vw.cruisecontrol();


