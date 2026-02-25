class Table {
    number: number;

    constructor(number: number) {
        this.number = number;
    }

    printTable(): string {
        let result: string = "";

        for (let i: number = 1; i <= 10; i++) {
            result += this.number + " x " + i + " = " + (this.number * i) + "\n";
        }

        return result;
    }
}

const input = 5;
const obj = new Table(input);

console.log(obj.printTable());