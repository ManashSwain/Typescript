"use strict";
console.log("Welcome to typescript setup!");
console.log("i love typescript!");
class User {
    constructor(name, email) {
        this.place = "chennai";
        this.name = name;
        this.email = email;
    }
    location() {
        console.log(`my name is ${this.name} and my email is ${this.email} and i stay in ${this.place}`);
    }
}
const user = new User("manash", "m@m.com");
user.location();
