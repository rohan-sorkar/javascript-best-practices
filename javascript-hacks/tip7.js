// json output with spaces
const employee = {
  name: "Haider",
  age: 22,
  salary: 500000,
};
const jsonEmployee = JSON.stringify(employee, null, 2);
console.log(jsonEmployee);
//output 
// {
//     "name": "Haider",
//     "age": 22,                      
//     "salary": 500000
// }

// check is Array or not
const array1 = [1, 3, 4, 5]
console.log(Array.isArray(array1)) // true
const array2 = {}
console.log(Array.isArray(array2)) // false