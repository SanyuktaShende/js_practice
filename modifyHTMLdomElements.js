/*
IMP Note:n the vast majority of cases, using textContent will suffice for dynamically changing the content of your HTML DOM elements.

---innerHTML
---The innerHTML property allows us to retrieve or replace the HTML content within an element. It represents the markup of the element's descendants, including text and child elements.

*/

let myElement = document.getElementById("myPara");
let content = myElement.innerHTML;
console.log(content);


// --- we can also change the contect of the element

let newPara = 'U better be joking';
myElement.innerHTML = newPara;
console.log(content);



