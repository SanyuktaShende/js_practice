//Error Handling in JS
```

The try...catch statement is used to handle exceptions (errors) that occur within a block of code.



try {
  // Code that may or may not throw an error
} catch (error) {
  // Code to handle the error
  console.error('An error occurred:', error.message);
}
----------------------------------------------------------
//Handling specific issues


try {
  // Code that may or may not throw an error
} catch (TypeError) {
  console.error('A type error occurred');
} catch (error) {
  console.error('An error occurred:', error.message);
}

--------------------------------------------------------------------
try...catch...finally
The finally block allows us to execute code, regardless of whether an error occurs or not.


try {
  // Code that may throw an error
} catch (error) {
  // Code to handle the error
} finally {
  // Code to execute regardless of errors
}
------------------------------------------
Throw
Throw is used to manually create error

function checkAge(age) {
  if (age < 18) {
    throw new Error("Not allowed");
  }
  return "Access granted";
}

try {
  console.log(checkAge(16));
} catch (err) {
  console.log(err.message); // Not allowed
}
