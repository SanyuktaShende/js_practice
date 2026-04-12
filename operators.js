let x = 2;
let y = 4;
let sum = x+y;
console.log(sum);

```
let number1 = 25;
let number2 = 36;
let number3 = 56;

let sum = number1 + number2 + number3;
console.log(sum);    // 117
// ```

```
let number1 = 25;
let number2 = 36;

let diff = number1 - number2;
console.log(diff);    // -11
```

```
let number1 = 25;
let number2 = 36;

let prod = number1 * number2;
console.log(prod);    // 900
```

```
let x = 5;
let y = 5;

let ans = x ** 3;
console.log(ans);      // 125

ans = x ** y;
console.log(ans);      // 3125
```

```
let x = 10;
let y = 4;

let ans = x/y;
console.log(ans);    // 2.5
```

```
let x = 10;
let y = 4;

let ans = x % y;
console.log(ans);    // 2
```

```
let x = 10;
let y = 4;

x++;
console.log(x);      // 11

y--;
console.log(y);      // 3
```

//Post-increment/decrement 

```
//Pre increment/decrement
let x = 10;
let y = 4;

console.log(++x);    // 11
console.log(--y);    // 3
console.log(x);      // 11
console.log(y);      // 3

//Post increment/decrement
let a = 10;
let b = 4;
console.log(a++);      // 10
console.log(b--);      // 4

console.log(a);        // 11
console.log(b);        // 3
```

```
let firstName = "Mayank";
let y = 4;

console.log(firstName);      // Mayank
console.log(y);              // 4
```

//Strict Equality v/s Loose Equality

```
let x = "10";
console.log(typeof(x));        // string

let y = 10;
console.log(typeof(y));         // number

console.log(x == y);            // true

console.log(x === y);           // false
```

//AND operator
```
let alert1 = true;
let alert2 = false;
let alert3 = true;

console.log(alert1 && alert2);    // false
console.log(alert2 && alert3);    // false
console.log(alert1 && alert3);    // true

let num1 = 0;
let num2 = 1;
let num3 = 1;

console.log(num1 && num2);    // 0
console.log(num2 && num3);    // 1
console.log(num1 && num3);    // 0
```

//OR operator
```
let alert1 = false;
let alert2 = false;
let alert3 = true;

console.log(alert1 || alert2);    // false
console.log(alert2 || alert3);    // true
console.log(alert1 || alert3);    // true

let num1 = 0;
let num2 = 1;
let num3 = 0;

console.log(num1 || num2);    // 1
console.log(num2 || num3);    // 1
console.log(num1 || num3);    // 0
```

//NOT operator
```
let alert1 = false;
let alert2;
let alert3 = NaN;
let mySum = 45;
let gone = false;
let isFirst = true;

console.log(!alert1);      // true
console.log(!alert2);      // true
console.log(!alert3);      // true
console.log(!mySum);       // false
console.log(!gone);        // true
console.log(!isFirst);     // false
```



