/*
addEventListener()
In JavaScript, addEventListener() is a method used to attach an event handler to an element, enabling it to listen for specific events and execute code/callback function in response to those events.


//element.addEventListener(event, callbackFunction, options);
*/


const changeContent = () => {
	let element1 =document.getElementById('fpara');
	element1.textContent = "Hello its San";
}


let element1 =document.getElementById('fpara');
element1.addEventListener('click', changeContent);