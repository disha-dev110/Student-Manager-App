const readline = require('readline');

const { addStudent, getAllStudents, deleteStudentByName } = require('./students');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function showMenu() {
    console.log("\n--- Student Manager ---");
    console.log("1. Add Student");
    console.log("2. Show All");
    console.log("3. Delete");
    console.log("4. Exit");
    
    rl.question("Choose (1-4): ", (choice) => {
        if (choice === '1') {
            rl.question("Name: ", (name) => {
                rl.question("Roll: ", (roll) => {
                    rl.question("Marks: ", (marks) => {
                        addStudent(name, roll, marks);
                        console.log("Student Added Successfully!");
                        showMenu();
                    });
                });
            });
        } else if (choice === '2') {
            const students = getAllStudents();
            if (students.length === 0) {
                console.log("No students found.");
            } else {
                console.log("\n--- Student List ---");
                students.forEach((s, index) => {
                    console.log(`${index + 1}. Name: ${s.name}, Roll: ${s.roll}, Marks: ${s.marks}`);
                });
            }
            showMenu();
        } else if (choice === '3') {
            rl.question("Name to delete: ", (name) => {
                const deleted = deleteStudentByName(name);
                if (deleted) {
                    console.log("Student Deleted!");
                } else {
                    console.log("Student not found.");
                }
                showMenu();
            });
        } else if (choice === '4') {
            console.log("Exiting... Goodbye!");
            rl.close();
        } else {
            console.log("Invalid choice! Please try again.");
            showMenu();
        }
    });
}

showMenu();