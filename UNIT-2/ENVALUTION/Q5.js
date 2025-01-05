const employees = [
    { name: "Alice", age: 30, salary: 50000, department: "HR" },
    { name: "Bob", age: 35, salary: 60000, department: "Finance" },
    { name: "Charlie", age: 28, salary: 55000, department: "HR" },
    { name: "David", age: 40, salary: 70000, department: "IT" },
    { name: "Eve", age: 32, salary: 65000, department: "Finance" },
   ];

function groupByDepartment(employees){
  const grouped ={};
  for(let employee of employees){
    if(!grouped[employee.department]){
        grouped[employee.department]= [];
    }
    grouped[employee.department].push(employee);
  }
  for(let department in grouped){
    grouped[department].sort((a,b) =>a.age-b.age);
  }
  return grouped
}

  console.log(groupByDepartment(employees));
   