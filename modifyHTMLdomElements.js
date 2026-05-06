/*
IMP Note:n the vast majority of cases, using textContent will suffice for dynamically changing the content of your HTML DOM elements.

---innerHTML: child k bhi text dikhenge
---The innerHTML property allows us to retrieve or replace the HTML content within an element. 
It represents the markup of the element's descendants, including text and child elements.

*/

let myElement = document.getElementById("myPara");
let content = myElement.innerHTML;
console.log(content);


// --- we can also change the contect of the element

let newPara = 'U better be joking';
myElement.innerHTML = newPara;
console.log(content);

/* ---innerText: JAsie dom me h vaisa he dikhega
The innerText property retrieves or sets the text content of the specified element, excluding any HTML tags.
 It represents only the visible text within the element, without considering its child elements.


*/

let myElement1 = document.getElementById("myPara");

//Now retrieving innerText of the selected element
let content1 = myElement1.innerText;

console.log(content1);

/*-----outerHTML: decendants ka bhi content dikhega
		 The outerHTML property, on the other hand, represents the HTML content of the element itself along with its descendants. 
		 It includes the element's start tag, content, and end tag.


*/
let content2 = myElement.outerHTML;

console.log(content2);

/* Output:
<p id="myPara">
	This element     has <span>spacing</span>
</p>
*/

// Setting outerHTML content (replaces the entire element)
//let newPara1 = '<div>Hiii</div>';
//myElement.outerHTML = newPara1;


/**textContent: Hidden rehkr bhi text dikhayega
The textContent property retrieves or sets the text content of the specified element, 
but unlike innerText, it includes all text content, including child elements and their text.
The textContent property returns the content as it in the HTML markup.
Like innerText, it also ignores the HTML tags. But it doesn't consider styles, so it returns the text even though it's hidden.
 */

//Selecting the element with id "myPara"
let myElement3 = document.getElementById("myPara");

//Now retrieving textContent of the selected element
let content3 = myElement3.textContent;

console.log(content3);


