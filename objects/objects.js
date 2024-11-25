"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "Manash",
    email: "m@m.com",
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: "Manash", isPaid: true });
// return type = object
function createCourse() {
    return { course: "reactjs", price: 7634 };
}
