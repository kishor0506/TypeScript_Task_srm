var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car(name) {
        this.name = name;
    }
    Car.prototype.absbrake = function () {
        console.log("abs is activated");
    };
    return Car;
}());
var xuv = /** @class */ (function (_super) {
    __extends(xuv, _super);
    function xuv(val) {
        return _super.call(this, val) || this;
    }
    xuv.prototype.drivecar = function () {
        console.log("xuv500 is a suv model");
        return true;
    };
    xuv.prototype.stopcar = function () {
        console.log("stop the car");
        return "stop";
    };
    xuv.prototype.startcar = function () {
        console.log("car is running");
        return "car started";
    };
    xuv.prototype.cruisecontrol = function () {
        console.log("cruise control activated");
        return true;
    };
    return xuv;
}(Car));
var x = new xuv("mahindra");
x.absbrake();
x.drivecar();
x.stopcar();
x.startcar();
x.cruisecontrol();
var honda = /** @class */ (function (_super) {
    __extends(honda, _super);
    function honda(val) {
        return _super.call(this, val) || this;
    }
    honda.prototype.drivecar = function () {
        console.log("city is a sedan model");
        return true;
    };
    honda.prototype.stopcar = function () {
        console.log("stop the car");
        return "stop";
    };
    honda.prototype.startcar = function () {
        console.log("car is running");
        return "car started";
    };
    honda.prototype.cruisecontrol = function () {
        console.log("cruise control activated");
        return true;
    };
    return honda;
}(Car));
var sedan = new honda("city");
sedan.absbrake();
sedan.drivecar();
sedan.stopcar();
sedan.startcar();
sedan.cruisecontrol();
var polo = /** @class */ (function (_super) {
    __extends(polo, _super);
    function polo(val) {
        return _super.call(this, val) || this;
    }
    polo.prototype.drivecar = function () {
        console.log("polo is a hatchback model");
        return true;
    };
    polo.prototype.stopcar = function () {
        console.log("stop the car");
        return "stop";
    };
    polo.prototype.startcar = function () {
        console.log("car is running");
        return "car started";
    };
    polo.prototype.cruisecontrol = function () {
        console.log("cruise control activated");
        return true;
    };
    return polo;
}(Car));
var vw = new polo("GT_TSI");
vw.absbrake();
vw.drivecar();
vw.stopcar();
vw.startcar();
vw.cruisecontrol();
