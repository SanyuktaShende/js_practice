In JavaScript, hoisting means declarations are moved to the top of their scope during compilation.But variables and functions behave differently.

	//with var
	console.log(a); // undefined
var a = 10;


//--------What JS sees internally:

var a;
console.log(a); // undefined
a = 10;

//----------------Function Declaration (Fully hoisted)

greet(); // ✅ Works

function greet() {
	console.log("Hello");
}
//Internally:

//-----Entire function is hoisted (name + body)



//------------Function Expression (NOT fully hoisted)
sayHi(); // ❌ Error

var sayHi = function() {
	console.log("Hi");
};
