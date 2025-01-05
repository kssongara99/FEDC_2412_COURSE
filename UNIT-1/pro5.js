const students = [
    { name: "Alice 1", age: 20, marks: { math: 95, science: 90, english: 85 } }, 
    { name: "Alice 2", age: 21, marks: { math: 90, science: 85, english: 80 } },  
    { name: "Alice 3", age: 22, marks: { math: 85, science: 80, english: 75 } },  
];
students.push({ name: "Alice 4", age: 19, marks: { math: 75, science: 95, english: 90 } } );
const highest = {name : "" ,averageMarks : -1};

for(let index = 0; index < students.length; index++){
    const student = students[index]; 
    const marks =Object.values(student.marks);
    const averageMarks = marks.reduce((sum,curValue) => {
        sum += curValue;
        return sum;
    },0) / marks.length;

    if(highest.averageMarks < averageMarks){
        highest.averageMarks = averageMarks;
        highest.name = student.name;
    }

    console.log(`${student.name} has an average of ${averageMarks}`);
}   
console.log(`${highest.name} has an highest average of ${highest.averageMarks}`);



