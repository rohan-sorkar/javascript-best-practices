// filter unique values
const numbersArray = [4, 5, 4, 6, 32, 5, 3, 5, 7, 1, 3, 4];
const uniqueValuesOfNumbersArray = [...new Set(numbersArray)];
console.log(uniqueValuesOfNumbersArray);

// convert number to string
const num = 21 + "";
console.log(num); // Result: "21"

// convert string to number
let number = "25";
number = +number;
console.log(number); // 21

// rounding number using toFixed()
let decimalNumber = 3.2198379128;
decimalNumber = decimalNumber.toFixed(2);
console.log(decimalNumber); // num will be equal to 3.21