const newEmployee = { id: 5, firstName: "Alp", lastName: "Işık", age: 25 };

employees.push(newEmployee);

console.log(employees);

const newArray = [
  ...employees,
  { id: 6, firstName: "Fatma", lastName: "Çimen", age: 40 },
];
console.log(newArray);
