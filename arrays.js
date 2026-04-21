```
// Creating an array of numbers using Array constructor
const numbers = new Array(1, 2, 3, 4, 5);

// Creating an array of strings using Array constructor
const fruits = new Array('apple', 'banana', 'orange');

// Creating an empty array using Array constructor
const emptyArray = new Array();

console.log(numbers); // Output: [1, 2, 3, 4, 5]
console.log(fruits); // Output: ['apple', 'banana', 'orange']
console.log(emptyArray); // Output: []


const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];

// Accessing the first element of the array
console.log(fruits[0]);                    // apple

// Accessing the third element of the array
console.log(fruits[2]);                    // orange

// Accessing the last element of the array
console.log(fruits[fruits.length - 1]);        // kiwi

// Accessing an element using a variable
const index = 1;
console.log(fruits[index]);               // banana

