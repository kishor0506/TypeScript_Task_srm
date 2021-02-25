class car {
    name: string;
    brand: string;
    year: number;
    color: string;
    engine_cc: number;
    cyclinders: number;
    constructor(name: string, brand: string, year: number, color: string, engine_cc: number, cyclinders: number) {
        this.name = name;
        this.brand = brand;
        this.color = color;
        this.year = year;
        this.engine_cc = engine_cc;
        this.cyclinders = cyclinders;
    }
        StartCar():void{
            console.log("car is started and running");
        }
        AccelerateCar():void{
            console.log("Acclerate Your Car......");
        }
        OpenCarLock():void{
            console.log("  Car Lock is opened......");
        } 
        CloseCarLock():void{
            console.log(" car is locked......");
        }
    
        StopCar():void{
            console.log(" stop the car......");
        } 
    }
let car1=new car("octavia","skoda",2019,"black",2000,4);
console.log(car1)
car1.AccelerateCar();
car1.CloseCarLock();
car1.OpenCarLock();
car1.StartCar();
car1.StopCar();

        
    