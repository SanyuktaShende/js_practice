

```
------------Temporal dead zone is “The variable exists, but JavaScript won’t let you touch it yet.”
var age = 15;

// TDZ starts with LET


console.log(a); // ❌ error

let a = 10;     // ✅ TDZ ends here

console.log(a); // ✅ 10


// With VAR

console.log(b); // ✅ undefined

var b = 20;







