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



//-------MAP

In JavaScript, map() is an array method used to transform each element of an array and return a new array.

“Take an array → apply some logic to each item → get a new array”

--Normal Fucntion--
const numbers = [1, 2, 3, 4];

const doubled = numbers.map(function(num) {
  return num * 2;
});

console.log(doubled); // [2, 4, 6, 8]
----------------------------------------------------------------------------------------------------
--Arrow FFunction--

const doubled = numbers.map(num => num * 2);

-----👉 Difference:

function(num) → num =>
{ return num * 2 } → num * 2 (arrow automatically returns)
----------------------------------------------------------------------------------
//-------Filter


------------In JavaScript, the filter() method is used to create a new array with all elements that satisfy the specific condition in the provided callback function. It doesn't change the original array.

--------filter() method returns a new array with elements that satisfy the condition specified in the callback function.
//Syntax


----Filter Method on Array of Numbers--------
------const newArray = array.filter(_callback function_);--------

const numbers = [-1, 0, -20, 45, 3, 74, -5, 6];

// Filtering positive numbers
const positiveNumbers = numbers.filter(function(number) {
  return number > 0;
});

console.log(positiveNumbers); // Output: [ 45, 3, 74, 6 ]


*******Why is it called a “callback” function?

👉 A callback function is just:

A function that is passed into another function and is called later (called back).************

-------

--------Filter Method on Array of Objects---------

const products = [
    {
        id: 1,
        name: "Product A",
        price: 10 
    },
    {
        id: 2,
        name: "Product B",
        price: 20 
    },
    {
        id: 3,
        name: "Product C",
        price: 30
    },
];

const expensiveProducts = products.filter((product) => product.price > 15);

console.log(expensiveProducts);

/* Output : 
[
  { id: 2, name: 'Product B', price: 20 },
  { id: 3, name: 'Product C', price: 30 }
]
*/
------------------------------------------------------------------------------------------
--------------Reduce Method on Arrays
----------In JavaScript, the reduce() method is used to reduce an array to a single value. It executes a provided callback function once for each element of the array, resulting in a single output value.


--SYNTAX-----
array.reduce(callback(accumulator, currentValue), initialValue)

****Terminologies******
callback: A function that executes on each element of the array, taking following arguments:
accumulator: The accumulated value resulting from the reduction.
currentValue: The current element being processed in the array.
initialValue (optional): An initial value for the accumulator. If not provided, the first element of the array will be used as the initial value, and iteration starts from the second element.


const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log(sum);
// Output: 15

```