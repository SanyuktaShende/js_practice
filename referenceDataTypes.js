```The following data types are classified as reference data types:

Objects: Objects store the data in the form of key-value pairs where keys are strings (or Symbols) and values can be of any data type, including other objects, functions, arrays, etc.

let person = {
    name: "San",
    age: 21,
    country: "India"
	message: function(){
		console.log('Hi this is ' + this.name);
	}
};

console.log(person.name);      // San
console.log(person.age);       // 21
console.log(person.city);      // India

//Dot Notation
console.log(person.name);      // San

//Bracket Notation
console.log(person['name']);   // San

// Adding a property
person.isSleeping = false;

// Modifying a property
person.age = 22;

// Deleting a property
delete person.country;

//person.message();
console.log(person);

// Output : { name: 'San', age: 22, isSleeping: false }
------------------------------------------------------------------------------

Arrays: Arrays in JavaScript is a collection of items of same datatype or different datatype at contiguous memory locations. Arrays are special types of objects that store collections of data. 


let fruits = ["Apple", "Banana", "Orange"];

let primeNumbers = [3, 5, 7, 11, 13];

let data = [true, 'ab', "great", 34];

//Accessing the items in an array:

let fruits = ["Apple", "Banana", "Orange"];

let fruit2 = fruits[1];
console.log(fruit2);                    // Banana

let primeNumbers = [2, 3, 5, 7, 11, 13];

let firstPrimeNum = primeNumbers[0];
console.log(firstPrimeNum);             // 2

let data = [true, 'ab', "great", 34];

let data3 = data[2];
console.log(data3);                     // great


------ We can also modify our array, we can add and delete items in our array using:

push : Adds an item to the end of the array.
unshift : Adds an item to the beginning of the array.
pop : Removes the last item from the array.
shift : Removes the first item from the array.

let fruits = ["Apple", "Banana", "Orange"];

fruits.push("Kiwi");

fruits.unshift("Grapes");

console.log(fruits);

 Output : [ 'Grapes', 'Apple', 'Banana', 'Orange', 'Kiwi' ]
 
 ----------------------------------------------------------------------------------

Functions: In JavaScript, functions are a fundamental building block of the language, functions are the reusable piece of code that can be called and executed at any point in our program. 


function sum(x, y){
    let result = x + y;
    return result;
}

let output = sum(3, 8);
console.log(output);         // 11
```

//anonymous ffunctioon

```
var add = function(x, y) {
  return x + y;
};
```