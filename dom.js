```
---Document Object Model (DOM)
---The Document Object Model (DOM) is a programming interface for web documents, providing a structured representation of HTML and XML documents. It allows JavaScript to interact with and manipulate the content, structure, and style of web pages dynamically.
---HTML code ko JS object me convert krte h aur use DOCUMENT kehte h isliye uska naam pdha DOM.

----------------------------------------------------------------------------

---Browser Object model
BOM = Browser Object Model
👉 It allows JavaScript to interact with the browser (not the webpage content)
DOM → works with HTML
BOM → works with browser
Main BOM object
✅ window
It is the top-level object
Everything in BOM comes under it

---getElementById()
---getElementById() is a method used to retrieve an HTML element from the DOM (Document Object Model) by its unique ID. 

let element = document.getElementById(elementId);
------------------------------------------------------------------------------------------
---getElementsByClassName()
---The method getElementsByClassName() returns a collection of elements with the specified class name.

document.getElementsByClassName(className);

-------------------------------------------------------------------------------------

---getElementsByTagName()
---getElementsByTagName() is a powerful method in JavaScript used to fetch HTML elements from the DOM (Document Object Model) based on their tag names.

document.getElementsByTagName(tagName);

----------------------------------------------------------------------------------------------------------------

---HTML DOM Query Selectors
---There are two different Query Selectors :

---querySelector()
---querySelectorAll()

----------------------------------------------------------------------------------------------------------

---querySelector()

---Returns the first element within the document that matches the specified selector or group of selectors.
---If no matches are found, it returns null.

document.querySelector(selector);

------------------------------------------------------------------------------------------------

---querySelectorAll():

---It returns a static NodeList representing a list of elements that match the specified group of selectors.
---If no matches are found, it returns an empty NodeList.


document.querySelectorAll(selector);

-----------------------------------------------------------------------------

Points to remember:
The basic syntax for query selectors involves using the document object followed by the querySelector() or querySelectorAll() method.
Use querySelector() for selecting a single element and querySelectorAll() for selecting multiple elements.