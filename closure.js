/**
 * ---A closure in JavaScript happens when a function “remembers” the variables from its outer function even after the outer function has finished executing.
 * 
 *  Inner function carrying a backpack of variables from the place where it was created.
 *
 * 
 * ------------------------------------------------------------------------------ 
 * function outerFunction() {
	let count = 0;

	function innerFunction() {
		count++;
		console.log(count);
	}

	return innerFunction;
}

let counter = outerFunction();

counter(); // 1
counter(); // 2
counter(); // 3
------------------------------------------------------------------------

---Explanation

When this runs:

let counter = outerFunction();
outerFunction() executes.
Normally, local variables like count should disappear after execution.
BUT innerFunction is still using count.

So JavaScript keeps count alive in memory.
That remembered connection between:

innerFunction
and the variable count

is called a closure.

--------------------------------------------------------------------------------
---Important interview definition

A closure is created when an inner function retains access to variables of its lexical scope even after the outer function has executed.

Here “lexical scope” means:


Where the function was written in the code.


 */