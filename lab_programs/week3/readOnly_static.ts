class Student {

    // STATIC: Shared by all student objects
    public static schoolName: string = "ABC School";
    public static totalStudents: number = 0;

    // READONLY: Can be assigned only in constructor
    public readonly rollNo: number;
    public studentName: string;

    constructor(name: string, roll: number) {
        this.studentName = name;
        this.rollNo = roll;

        // Increase student count
        Student.totalStudents++;
    }

    // Static method
    public static schoolInfo(): void {
        console.log("Welcome to " + Student.schoolName);
    }

    // Instance method
    public displayStudent(): void {
        console.log("Name : " + this.studentName);
        console.log("Roll : " + this.rollNo);
    }
}

// ---------- Execution ----------

// Access static members
console.log(Student.schoolName);
Student.schoolInfo();

// Create objects
const s1 = new Student("Ravi", 1);
const s2 = new Student("Priya", 2);

// Display details
s1.displayStudent();
s2.displayStudent();

// Readonly property
console.log(s1.rollNo);

// s1.rollNo = 10; // ERROR

console.log("Total Students: " + Student.totalStudents);