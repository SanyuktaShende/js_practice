//The JavaScript Math object is a built-in object that provides mathematical constants and functions for performing mathematical operations in JavaScript
// 
// ---MAth.PI
```
let value = Math.PI;
console.log(value);

Output : 3.141592653589793

---MAth.E


let value = Math.E;
console.log(value);

//Output : 2.718281828459045


--------Math.LN2
Math.LN2 is used to calculate the natural logarithm of 2, approximately 0.693
let value = Math.LN2;
console.log(value);

//Output : 0.6931471805599453


-------Math.LN10
Math.LN10
Math.LN10 is used to calculate the natural logarithm of 10, approximately 2.303

let value = Math.LN10;
console.log(value);

//Output : 2.302585092994046


-------FFUNCTIONS IN MATH

---Math.random()
Math.random() returns a random floating-point number between 0 (inclusive) and 1 (exclusive).


let value = Math.random();
console.log(value);
//Output : 0.048542301899791696

value = Math.random();
console.log(value);
//Output : 0.3692583661676796

---Math.abs()
Math.abs(x) returns the absolute value of a number 'x'.


let value = Math.abs(-2.7);
console.log(value);

//Output : 2.7


---Math.sqrt()
Math.sqrt(x) method returns the square root of a number 'x'. It takes only one argument, and returns the square root as a floating-point number.


let value = Math.sqrt(15);
console.log(value);
//Output : 3.872983346207417

value = Math.sqrt(36);
console.log(value);
//Output : 6


---Math.pow()
Math.pow(x, y) method is used to return a value of, 'x raised to the power of y'. It takes two arguments the base(x) & the exponent (y) and returns the result raising the base to the power of exponent.

let value = Math.pow(2,3);
console.log(value);
//Output : 8

value = Math.pow(4,2);
console.log(value);
//Output : 16

---MAth.floor()
Math.floor(x) is a method returns the largest integer less than or equal to a given number 'x'. The Math.floor() function is commonly used when we need to convert a floating-point number to an integer while rounding down.

let value = Math.floor(2.5);
console.log(value);
//Output : 2

value = Math.floor(4.3);
console.log(value);
//Output : 4

---Math.ceil()
Math.ceil(x) is a method returns the smallest integer greater than or equal to a given number 'x'. The Math.ceil() function is commonly used when we need to convert a floating-point number to an integer while rounding up.

let value = Math.ceil(2.5);
console.log(value);
//Output : 3

value = Math.ceil(4.3);
console.log(value);
//Output : 5

---Math.round()
Math.round(x) is used to return the value of a number 'x' rounded to the nearest integer. If the fractional part of x is less than 0.5, the result is rounded down. If it is 0.5 or greater, the result is rounded up.

For example: If x = 2.76, then Math.round(x) = 3,

If x = 2.37, then Math.round(x) = 2.


let value = Math.round(2.3);
console.log(value);
//Output : 2

value = Math.round(4.5);
console.log(value);
//Output : 5

---Math.min()
Math.min(x1, x2, x3, x4) is used to return the smallest of the given numbers.

For example: Math.min(-2) = -2,

Math.min() = Infinity

Math.min(2, -4, 68, -11) = -11


let value = Math.min(2,3,70,9);
console.log(value);
//Output : 2

value = Math.min(-10,-3,-9);
console.log(value);
//Output : -10


---Math.max()
Math.max(x1, x2, x3, x4) is used to return the largest of the given numbers.

For example: Math.max(-2) = -2,

Math.max() = -Infinity

Math.max(2, -4, 68, -11) = 68


let value = Math.max(2,3,70,9);
console.log(value);
//Output : 70

value = Math.max(-10,-3,-9);
console.log(value);
//Output : -3

value = Math.max();
console.log(value);
//Output : -Infinity













