// use every and some method to check all the elements are true or not 
const random_numbers = [ 13, 2, 37, 18, 5 ]
const more_random_numbers = [ 0, -1, 30, 22 ]

const isPositive = (number) => {
  return number > 0
}

random_numbers.every(isPositive); // returns true
more_random_numbers.every(isPositive); // returns false

// const random_numbers = [ 13, 2, 37, 18, 5 ]
// const more_random_numbers = [ 0, -1, 30, 22 ]

// const isPositive = (number) => {
//   return number > 0
// }

// random_numbers.some(isPositive); // returns true
// more_random_numbers.some(isPositive); // returns true