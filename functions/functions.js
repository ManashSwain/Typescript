"use strict";
// void 
Object.defineProperty(exports, "__esModule", { value: true });
function consoleError(errmsg) {
    console.log(errmsg);
}
// never 
function handleError(errmsg) {
    throw new Error(errmsg);
}
