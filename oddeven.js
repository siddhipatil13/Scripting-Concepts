"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter a number: ", function (input) {
    var num = Number(input);
    for (var i = 1; i <= num; i++) {
        if (i % 2 === 0) {
            console.log(i + " is Even");
        }
        else {
            console.log(i + " is Odd");
        }
    }
    rl.close();
});
