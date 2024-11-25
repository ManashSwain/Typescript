"use strict";
// Numbers 
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
addTwo(78);
// Strings 
function toUpper(value) {
    return value.toUpperCase();
}
toUpper("manash");
// with multiple values 
function signUpUser(name, email, isPaid) { }
signUpUser("manash", "m@m.com", true);
// using arrow function and giving default values 
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
loginUser("manash", "m@m.com");
