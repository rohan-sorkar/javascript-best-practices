// array to object
let arr = ["value1", "value2", "value3"]; 
let arrObject = {...arr};

// initialize an array of size and fill default values
const size = 5;
const defaultValue = 0;
const arr2 = Array(size).fill(defaultValue);
console.log(arr2); // [0, 0, 0, 0, 0]

// shuffle an array
const list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const shuffle = list.sort(() => {
    return Math.random() - 0.5;
});

console.log(shuffle)
// [4, 3, 9, 1, 2,5, 6, 7, 8]
// // call it again
// [3, 8, 7, 5, 4,6, 2, 9, 1]
