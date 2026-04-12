// String literals : String literals in JavaScript are sequences of characters enclosed within single ('') or double ("") quotation marks. 

let name = "Sanyukta";
let surmname = 'Shende';

//concatenation of strings
```
let firstName = "San";
let lastName = "Shende";
let fullName = firstName + " " + lastName;

console.log(fullName);

//Output : San Shende
```

//Template literals
```
let number1 = 10;
let number2 = 20;

let sum = number1 + number2;

console.log(`The sum of ${number1} + ${number2} is equal to ${sum}`);

//Output : The sum of 10 + 20 is equal to 30
```

//printing multi line strings
```
let string1 = "Now he's thinking bout me,";

let string2 = "everynight oh isn't that sweet I guess so";

let multiLineString = `
    ${string1},
    ${string2}`

console.log(multiLineString);

/*
Output :
    Now he's thinking bout me,
	everynight oh isn't that sweet I guess so
	
*/```

//Object literals
```
let person = {
	name: 'San',
	age: 24,
	favColor: 'Pink',
	isWorking: True
}
```
//It is worth noting that while dealing with objects in JavaScript, we don't use a semicolon ';' inside the object literal '{}'. Instead, we use a comma ',' after every key-value pair.

//Array literals

```
let colors = ['orange', 'red', 'aqua', 'green', 'blue'];


let container = [2, "laptop", true, "papers", "watch"];

```
