/*createElement() Method
The document.createElement() method is a fundamental DOM manipulation technique in JavaScript. As the name suggests, 
it allows us to dynamically create HTML elements within the DOM. The method takes a single argument.*/ */


//Creation of a new Element div
let newElement1 = document.createElement('div');
console.log(newElement1);                          //<div></div>

//Creation of a new Element paragraph
let newElement2 = document.createElement('p');
console.log(newElement2);                          //<p></p>

//Creation of a new Element heading
let newElement3 = document.createElement('h1');
console.log(newElement3);        

newElement1.textContent = "Hello guys!"
console.log(newElement1);       

/**appendChild() Method
The appendChild() method belongs to the Node interface and is primarily used to add a node to the end of the list of children of a specified parent node.
 */

newElement1.append(newElement2);
newElement2.textContent = "I am appended child";

newElement3.textContent = "I am directly attached to DOM";
document.body.appendChild(newElement3);
