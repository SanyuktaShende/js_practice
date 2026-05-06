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

/* innerText
The innerText property retrieves or sets the text content of the specified element, excluding any HTML tags.
 It represents only the visible text within the element, without considering its child elements.


*/ 

<p style="display: none">This has a property Hidden</p>
let myElement1 = document.getElementById("myPara");
     
         //Now retrieving innerText of the selected element
         let content1 = myElement1.innerText;
     
         console.log(content);



