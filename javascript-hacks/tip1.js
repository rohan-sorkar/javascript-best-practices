// use logical operator `&&, ||` for conditions
const value = 20;
value === 10 && 'if it is true then show me';
value === 5 || 'if it is false then show me';

// short circuit evaluation
const x = 150;
x > 100 ? 'Above 100' : 'Below 100';
x > 100 ? (x > 200 ? 'Above 200' : 'Between 100-200') : 'Below 100';

// Truncating an array
let arr = [100, 200, 300, 400, 500, 600]
// make size 3
arr.length = 3
console.log(arr) //[100, 200, 300]
// make size 0
arr.length = 0
console.log(arr) // []

// Smart Replacing
const str = "This is potato and potato";
console.log(str.replace(/pot/, "tom")); // This is tomato and potato
console.log(str.replace(/pot/g, "tom")); // This is tomato and tomato

// Reverse any String
const reverse = string => string.split("").reverse().join("");
console.log(reverse("programming")) //  gnimmargorp