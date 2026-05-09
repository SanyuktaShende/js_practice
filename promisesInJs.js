/*
---What are Promises?
A Promise is an object representing the eventual completion or failure of an asynchronous operation, and its resulting value. It allows us to write asynchronous code in a more sequential and readable manner.


---Creating a Promise
We can create a Promise using the Promise constructor, which takes a callback function with two parameters: resolve and reject.


const myPromise = new Promise((resolve, reject) => {
    // Asynchronous operation
    if 
	(
		// operation successful 
		
	) {
        resolve("Operation completed successfully");
    } else {
        reject("Operation failed");
    }
});

------------------------------------------------------------------------------------------

---Promise States
A Promise can be in one of three states:

Pending: Initial state, neither fulfilled nor rejected.
Fulfilled: The operation completed successfully.
Rejected: The operation failed.


-----------------------------------------------------------------------------------------------------------

---Chaining Promises
One of the most powerful features of Promises is the ability to chain them together using .then() and .catch() methods, enabling sequential execution of asynchronous operations.



myPromise
    .then((result) => {
        console.log(result); // Operation completed successfully
        return anotherPromise();
    })
    .then((anotherResult) => {
        console.log(anotherResult); // Another operation completed successfully
    })
    .catch((error) => {
        console.error(error); // Handle errors
    });
	
	
-----------------------------------------------------------------------------------------------------------

Promise.all()
The Promise.all() method allows us to wait for multiple Promises to complete simultaneously. It returns a single Promise that resolves when all of the input Promises have resolved, or rejects if any of the input Promises reject.

```
const promise1 = fetch('https://api.example.com/data1');
const promise2 = fetch('https://api.example.com/data2');

Promise.all([promise1, promise2])
    .then((responses) => {
        // Handle responses
    })
    .catch((error) => {
        console.error(error); // Handle errors
    });


*/