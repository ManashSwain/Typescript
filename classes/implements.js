// implements => class to interface
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
var car = /** @class */ (function () {
    function car() {
    }
    car.prototype.drive = function () {
        console.log("I am driving");
    };
    car.prototype.newfun = function () {
        console.log("I have been added!");
    };
    return car;
}());
var car1 = new car();
console.log(car1.newfun());
console.log(car1.drive());
// extends class to class
var Animal = /** @class */ (function () {
    function Animal(sound) {
        this.sound = sound;
    }
    Animal.prototype.makesound = function () {
        console.log(this.sound);
    };
    return Animal;
}());
var dog = /** @class */ (function (_super) {
    __extends(dog, _super);
    function dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    dog.prototype.bark = function () {
        console.log('woof!');
    };
    return dog;
}(Animal));
var dog1 = new dog("bow bow");
dog1.bark();
dog1.makesound();
var people = {
    name: "manash",
    eid: 7
};
console.log(people);
