// convert to boolean
const isName = !!"rohan";
const isAge = !!20;
const isValue = !!0;
console.log(isName); // true
console.log(isAge); // true
console.log(isValue); // false

// casting values in array
let selected_values = [ '1', '5', '8' ];

selected_values  = selected_values.map(Number);
console.log(selected_values); // [ 1, 5, 8 ]

// quick power
console.log(2 ** 3); // Result: 8

// filter out false values
const array = [1, 0, false, "", 2, null, 3];
const filteredArray = array.filter(Boolean);
console.log(filteredArray) // [1, 2, 3]