var car = /** @class */ (function () {
    function car(name, brand, year, color, engine_cc, cyclinders) {
        this.name = name;
        this.brand = brand;
        this.color = color;
        this.year = year;
        this.engine_cc = engine_cc;
        this.cyclinders = cyclinders;
    }
    car.prototype.StartCar = function () {
        console.log("car is started and running");
    };
    car.prototype.AccelerateCar = function () {
        console.log("Acclerate Your Car......");
    };
    car.prototype.OpenCarLock = function () {
        console.log("  Car Lock is opened......");
    };
    car.prototype.CloseCarLock = function () {
        console.log(" car is locked......");
    };
    car.prototype.StopCar = function () {
        console.log(" stop the car......");
    };
    return car;
}());
var car1 = new car("octavia", "skoda", 2019, "black", 2000, 4);
car1.AccelerateCar();
car1.CloseCarLock();
car1.OpenCarLock();
car1.StartCar();
car1.StopCar();
console.log(car1);
