// empty an array
const fruits = ["apple", "banana", "watermelon"];
fruits.length = 0;
console.log(fruits); //[]

// use splice to remove an item from array
const items = [13, 5, 3, 6, 2, "string", true];
items.length; // return 7
items.splice(3, 1);
items.length; // return 6
console.log(items); // [13, 5, 3, 2, "string", true]

// float to integer
console.log(33.9 | 0); // 33
console.log(-33.9 | 0); // -33

// get the last item(s) in an array
const someArray = [13, 5, 3, 6, 2, "string", true];
console.log(someArray.slice(-1)); // [true]
console.log(someArray.slice(-4)); //  [6, 2, "string", true]
console.log(someArray.slice(-5)); //  [3, 6, 2, "string", true]