// merge multiple objects
const employee = {
  id: "S129",
  name: "Haider",
  age: 22,
  addr: "USA",
};
const job = {
  title: "Software Engineer",
  location: "Canada",
};

const merge = {...employee, ...job}
console.log(merge);

// simple swaping
let x = 5;
let y = 9;
console.log(x, y); // 5 9
[x, y] = [y, x]; //swaping
console.log(x, y); // 9 5

// palindrome checking
function isPalindrome(str)
{
  return str === str.split('').reverse().join('')
  
}
console.log(isPalindrome("mom")) // true
console.log(isPalindrome("ball")) // false
console.log(isPalindrome("maham")) // true