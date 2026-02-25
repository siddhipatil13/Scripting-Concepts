class Student {
    marks: number;

    constructor(marks: number) {
        this.marks = marks;
    }

    getResult(): string {
        if (this.marks >= 75) {
            return "Distinction";
        } else if (this.marks >= 40) {
            return "Pass";
        } else {
            return "Fail";
        }
    }
}

const inputMarks: number = 60;

const student = new Student(inputMarks);

console.log("Marks:", inputMarks);
console.log("Result:", student.getResult());