```
function example() {
    var x = 10;
    console.log(x);
}

example();       // 10
console.log(x);       // Throws ReferenceError: x is not defined

```
// Re assignment using var
var x = 10;
console.log(x);    // Output : 10

x = "Sanyukta";
console.log(x);    // Output : Sanyukta

```
// Re definition using var
var x = 10;
console.log(x);    // Output : 10

var x = "Prabhu";
console.log(x);    // Output : Prabhu


```

```
let x = 10;
if (true) {
    let y = 20;
    console.log(x); // Output: 10
    console.log(y); // Output: 20
}
console.log(x); // Output: 10
console.log(y); // Throws ReferenceError: y is not defined 
```

```
// Re assignment using 'let'

let x = 10;
console.log(x);    // Output : 10

x = "Mayank";
console.log(x);    // Output : Mayank
```

```
// Re definition using 'let'

let x = 10;

let x = "Mayank";
console.log(x);    // Output : Error!
```