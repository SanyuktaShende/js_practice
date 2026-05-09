/*
---The Event Loop
The Event Loop is a fundamental concept that governs how JavaScript handles asynchronous operations, callbacks, and concurrency. In this article, we'll explore what the Event Loop is, how it works, and how to leverage it effectively in your code.

What is the Event Loop?
Before we get to know "Event Loop", we need to understand what an Event is?

An event is an announcement which is triggered as per the actions performed by the user or the browser.

---Why we need event loop and async js? 
Now, the problem here is sometimes we get some functions to execute inside our call stack which blocks the execution of next lined up requests which makes our program to blow off 


---Asynchronous Execution
The Event Loop is a mechanism in JavaScript that allows the runtime environment (typically a web browser or Node.js) to manage asynchronous operations and execute code in a non-blocking manner. It ensures that JavaScript remains single-threaded while handling I/O operations, timers, and events.

How Does the Event Loop Work?
The 'Event Loop' consists of three parts :

The Call Stack : Whenever a function is invoked, a corresponding frame (or execution context) is pushed onto the call stack. JavaScript executes functions in a synchronous, single-threaded manner, meaning only one operation can be processed at a time.
The Browser : The Browser, or runtime environment (in the case of Node.js), provides the execution environment for JavaScript code. It includes the JavaScript engine (e.g., V8 in Chrome), which interprets and executes JavaScript code, as well as various APIs for interacting with the browser environment (e.g., DOM manipulation, timers).
The Task Queue : Task Queue (also known as the Callback Queue or Message Queue) is where asynchronous tasks are queued for execution once the Call Stack is empty. Asynchronous tasks include events like DOM events, network requests, and timers (e.g., setTimeout(), setInterval()).

---------------------------------------------------------------------------------------------------------

The Event Loop
The Event Loop is the mechanism that continuously checks the Call Stack and the Task Queue. When the Call Stack is empty, the Event Loop moves tasks from the Task Queue to the Call Stack for execution. This process ensures that asynchronous operations are handled in a non-blocking manner while maintaining the single-threaded nature of JavaScript.

 */