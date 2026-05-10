
/**
 ---Understanding setTimeout()
 The setTimeout() method is a built-in JavaScript function that allows us to schedule the execution of a function or the evaluation of an expression after a specified delay, measured in milliseconds.
 
 setTimeout(function, delay);
 
 function sayHello() {
   console.log("Hello after 2 seconds!");
 }

 setTimeout(sayHello, 2000); // Call sayHello after 2 seconds (2000 milliseconds)

 console.log("This will be printed immediately.");
 
 -------------------------------------------------------------------------------------------------------------
 
 --- Passing Arguments
 
 function greet(name) {
   console.log("Hello, " + name + "!");
 }

 setTimeout(greet, 1000, "Alice"); // Call greet with "Alice" after 1 second
 
 -------------------------------------------------------------------------------------------------------
 
 ---Anonymous Function
 
 setTimeout(function() {
   console.log("This function is executed after 3 seconds.");
 }, 3000);
 
 --- Key Points
 Asynchronous: setTimeout is an asynchronous method. This means the browser won't wait for the function inside it to finish before continuing to execute other code. It schedules the function for execution after the specified delay.
 Return Value: setTimeout returns a numeric value, which is a timer ID. We can use this ID with clearTimeout to cancel the scheduled execution.
 
 
 --- clearTimeout() Method
 We can cancel a scheduled timeout using the clearTimeout() method by passing the timer ID returned by setTimeout().
 
 const timeoutId = setTimeout(() => {
     console.log("This message won't be displayed");
 }, 500);

 clearTimeout(timeoutId); // Cancel the scheduled timeout
 
 
 */
 

