/*
---addEventListener()
In JavaScript, addEventListener() is a method used to attach an event handler to an element, enabling it to listen for specific events and execute code/callback function in response to those events.


//---element.addEventListener(event, callbackFunction, options);



const changeContent = () => {
	let element1 =document.getElementById('fpara');
	element1.textContent = "Hello its San";
}


let element1 =document.getElementById('fpara');
element1.addEventListener('click', changeContent);


---removeEventListener()
removeEventListener() is the opposite of addEventListener() in JavaScript. It's used to remove an event listener that was previously attached to an element using addEventListener(). This method is essential for managing event handlers, 
especially when they are no longer needed to prevent memory leaks and optimize performance.

```
element.removeEventListener(event, callbackFunction, options);

-------------------------------------------------------------------------------------------------------------

---event Object

What is the Event Object?
The event object is a built-in object in JavaScript that contains information about the event that has occurred. It provides details such as the type of event, the target element, mouse coordinates, keyboard keys pressed, and more.

const button = document.getElementById('myButton');

    button.addEventListener('click', function(event) {
      console.log('Event type:', event.type);                 
      console.log('Target element:', event.target);
      console.log('Mouse X coordinate:', event.clientX);
      console.log('Mouse Y coordinate:', event.clientY);
    });
	
	
--------------------------------------------------------------------------------------------------

---preventing default behaviour
In the above example, when the link is clicked, the event object is passed to the event handler function. We call the preventDefault() method on the event object to prevent the default behavior of following the event.



const link = document.getElementById('myLink');

    link.addEventListener('click', function(event) {
      event.preventDefault();
      console.log('Default behavior prevented');
    });




*/