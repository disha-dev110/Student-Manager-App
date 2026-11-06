
let students = [];

function addStudent(name, roll, marks) {
    students.push({ 
        name: name, 
        roll: roll, 
        marks: parseInt(marks) 
    });
}

function getAllStudents() {
    return students;
}
function deleteStudentByName(name) {
    const initialLength = students.length;
    
    students = students.filter(s => s.name.toLowerCase() !== name.toLowerCase());
    
    return initialLength !== students.length;
}

module.exports = { 
    addStudent, 
    getAllStudents, 
    deleteStudentByName 
};