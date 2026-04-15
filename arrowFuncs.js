//to avoid bulky repetitve code we bundle the data into a fucntion and wwe can call that function anytime anywhere without repeating the code Functions are the building blocks of JavaScript, allowing developers to encapsulate reusable blocks of code. 

//syntax off function
```
function functionName(parameter1, parameter2, ...) {
    // Function body
    // Code to be executed
    return value; // Optional
}
--function definition--
eg:
function sayMyName(){
	console.log("Sanyukta");
}

--function call--
sayMyName();

```
//Return makes sure whoever is calling the function ... it will return entity written in front of it
```
function sum(a,b){
	return a+b;
}

sum(1,2);
```

//Arrow Functions


```
let getExponetital = (x,y) => {
	return (x**y);
}


const greet = (name) => {
    return `Hello, ${name}!`;
};
console.log(greet("John")); // Output: Hello, John!

```