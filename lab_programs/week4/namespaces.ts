namespace College {

    // Private variable
    const passingMarks = 40;

    // Exported function
    export function isPassed(mark: number): boolean {

        return mark >= passingMarks;
    }

    export function calculatePercentage(total: number, obtained: number): number {

        return (obtained / total) * 100;
    }

    // Nested namespace
    export namespace Grade {

        export function getGrade(mark: number): string {

            if (mark >= 90)
                return "A";

            if (mark >= 75)
                return "B";

            return "C";
        }

    }

}

// ---------- Using Namespace ----------

let marks = 82;

console.log(College.isPassed(marks));
console.log(College.Grade.getGrade(marks));