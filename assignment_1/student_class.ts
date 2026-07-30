class Student {
    name: string;
    rollNumber: number;
    course: string;

    // Constructor to initialize student details
    constructor(name: string, rollNumber: number, course: string) {
        this.name = name;
        this.rollNumber = rollNumber;
        this.course = course;
    }

    // Display the student details
    displayDetails(): void {
        console.log("\nStudent Details");
        console.log("Name :", this.name);
        console.log("Roll Number :", this.rollNumber);
        console.log("Course :", this.course);
    }
}

let student = new Student("Harshitha", 101, "AI & Data Science");

student.displayDetails();
export{}