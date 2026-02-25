var Table = /** @class */ (function () {
    function Table(number) {
        this.number = number;
    }
    Table.prototype.printTable = function () {
        var result = "";
        for (var i = 1; i <= 10; i++) {
            result += this.number + " x " + i + " = " + (this.number * i) + "\n";
        }
        return result;
    };
    return Table;
}());
var input = 5;
var obj = new Table(input);
console.log(obj.printTable());
