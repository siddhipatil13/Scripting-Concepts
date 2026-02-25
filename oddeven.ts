import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ", (input: string) => {

    let num: number = Number(input);

    for (let i: number = 1; i <= num; i++) {

        if (i % 2 === 0) {
            console.log(i + " is Even");
        } else {
            console.log(i + " is Odd");
        }

    }

    rl.close();
});