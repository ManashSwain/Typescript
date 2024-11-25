"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createUser(user) { }
createUser({ name: "Manash", age: 43, isPaid: true });
// ? means optional 
var allUser = {
    _id: "235",
    name: "Manash",
    email: "m@m.com",
    isActive: false,
};
// modifying email 
allUser.email = "a@a.com";
// allUser._id = "7689"; // not possible because it is in readonly 
console.log(allUser);
