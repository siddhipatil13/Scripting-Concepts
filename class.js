var Student = /** @class */ (function () {
    function Student(marks) {
        this.marks = marks;
    }
    Student.prototype.getResult = function () {
        if (this.marks >= 75) {
            return "Distinction";
        }
        else if (this.marks >= 40) {
            return "Pass";
        }
        else {
            return "Fail";
        }
    };
    return Student;
}());
var inputMarks = 60;
var student = new Student(inputMarks);
console.log("Marks:", inputMarks);
console.log("Result:", student.getResult());
