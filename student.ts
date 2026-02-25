class Student {
    name: string;
    marks: number;

    constructor(name: string, marks: number) {
        this.name = name;
        this.marks = marks;
    }

    display(): string {
        return "Name: " + this.name + " | Marks: " + this.marks;
    }
}

function addStudents(): void {

    let count = Number((<HTMLInputElement>document.getElementById("count")).value);

    let students: Student[] = [];

    
    for (let i = 0; i < count; i++) {

        let name = prompt("Enter name of student " + (i + 1)) || "";
        let marks = Number(prompt("Enter marks of student " + (i + 1)));

        
        let student = new Student(name, marks);

        students.push(student);
    }

    let result = "";

        for (let s of students) {
        result += s.display() + "<br>";
    }

    document.getElementById("output")!.innerHTML = result;
}
