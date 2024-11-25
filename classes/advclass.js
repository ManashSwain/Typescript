"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(id, email) {
        this.city = "chennai";
        this.courseCount = 1;
        this.id = id;
        this.email = email;
    }
    Object.defineProperty(User.prototype, "getAppleEmail", {
        get: function () {
            return "email id is ".concat(this.email, " and city is ").concat(this.city);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "coursecount", {
        set: function (courseCount) {
            if (courseCount <= 0) {
                throw new Error("error");
            }
            else {
                this.courseCount++;
            }
        },
        enumerable: false,
        configurable: true
    });
    User.prototype.deleteToken = function () {
        console.log("token deleted!");
    };
    return User;
}());
var newuser = new User(32, "m@m.com");
