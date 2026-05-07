```

Class List v/s Class Name in JavaScript
JavaScript, being the powerhouse of interactivity, provides developers with various methods to manipulate CSS classes. 
Among these methods, two commonly used ones are className and classList.
 While they might seem similar, they have distinct differences and are suitable for different scenarios. 
 
 --- className
 The className property in JavaScript is a string representing the class attribute of an element. The className property is a straightforward way to access or modify the classes of an HTML element. It returns a string containing all the classes assigned to the element.

 It allows us to get or set the value of the class attribute, enabling the addition, removal, or replacement of CSS classes.
 
 
 //Get the element from the HTML DOM using 'getElementById' method
     let myElement = document.getElementById("babbar");

     //Now we can add multiple class names to it if there is no class
     myElement.className += 'class1 class3'


     //We can also replace an existing class with a new class
     myElement.classList = myElement.className.replace("class1", 'class2');
     console.log(myElement);

     /*
     Output:
       <div id="babbar" class="class2 class3">
         Hello Guys this is love Babbar!
       </div>
     */
   </script>
 </body>
 </html>
 
 
 
 -----------------------------------------------------------------------------------------------------------------
 
 
 --- classList
 In JavaScript, the classList property of an HTML element provides an interface to manipulate the classes of that element easily. It's a read-only property that returns a live DOMTokenList collection of the class attributes of the element.

 This DOMTokenList behaves like an array of strings, where each string represents a single class of the element.

 The classList property exposes several methods to add, remove, toggle, or check for the presence of classes on the element without directly manipulating the className string. These methods are:

 add(class1, class2, ...) : Adds one or more classes to the element.
 remove(class1, class2, ...) : Removes one or more classes from the element.
 toggle(class, force) : Toggles the presence of a class. If the class exists, it's removed; otherwise, it's added. The force parameter is optional and if set to true, it forces the class to be added or removed based on its presence.
 contains(class) : Checks whether the element has the specified class. Returns true if the class exists on the element, otherwise false.
 
 /Get the element from the HTML DOM using 'getElementById' method
     let myElement = document.getElementById("fpara");

     //Print all the classes using 'classList' method
     let existingClasses = myElement.classList;
     console.log(existingClasses);
 /* OUTPUT : 
     DOMTokenList(3) ['class1', 'class2', 'class3', value: 'class1 class2 class3']
       0: "class1"
       1: "class2"
       2: "class3"
       length: 3
       value: "class1 class2 class3"
       [[Prototype]]: DOMTokenList
 */

     //We can add new classes
     myElement.classList.add('class4');
     
     //We can remove the existing class
     myElement.classList.remove('class2');
     console.log(myElement);

     //We can check if the specific classname is present of not
     let isPresent = myElement.classList.contains('class2');
     console.log(isPresent); //False

     //We can also toggle the classes
     myElement.classList.toggle('class5');

 