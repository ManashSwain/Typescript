"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score = 43;
score = 89;
score = "79";
console.log(score);
var manash = {
    userName: "Manash",
    id: 89
};
console.log(manash);
// union in functions
function getDbId(id) {
    console.log("database id is : ".concat(id));
}
getDbId("jgdf");
getDbId(89);
function getPass(id) {
    if (typeof id == 'string') {
        id = id.toLowerCase();
        console.log(id);
    }
    else {
        id = id.toFixed(2);
        console.log(id);
    }
}
getPass("HJKL");
getPass(456.876);
// union in  arrays 
var data1 = [1, 2, 3];
var data2 = ["1", "2", "3"];
var data3 = ["1", "2"];
var data4 = [1, "2", false];
// exact matching values in union 
var seat;
seat = "aisle";
console.log("seat is : " + seat);
