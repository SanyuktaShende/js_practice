let element = document.getElementById("spara");
console.log(element.style);

```


---The 'style' Method
The style method allows us to directly access and modify CSS properties of an HTML element through its style object.


// Accessing an element
const element = document.getElementById("myElement");

// Setting a style property
element.style.property = "value";

// Getting a style property
const propertyValue = element.style.property;

---The 'cssText' Method
The cssText is similar to the style method but the only difference is, 
using cssText we can handle multiple CSS properties in single string. 


// Accessing an element
const element = document.getElementById("myElement");

// Setting cssText property
element.style.cssText = "property1: value1; property2: value2;";

// Getting cssText property
const currentStyles = element.style.cssText;



---setAttribute()
The setAttribute() method in JavaScript is used to add a new attribute or update an existing attribute on an HTML element. 
This method allows us to dynamically modify the attributes of HTML elements in our web page.


element.setAttribute(attributeName, attributeValue);

element: The HTML element to which we want to add or update the attribute.
attributeName: The name of the attribute we want to add or update it can be class, id, style, etc.
value: The value to assign to the attribute.
First fetch/select your element from the document using querySelector or getElementById or any other method, then apply the setAttribute method.
//Now Let's try to add a 'class = helpcode' to myElement using setAttribute() method...
   myElement.setAttribute("class", "helpcode");

    //Now Let's try to add a "background color = red" to my Element using setAttribute() method...
    myElement.setAttribute("style", "background-color:red;")
	
	//Now Let's try to add a "link = www.codehelp.in" to myElement using setAttribute() method...
	  myElement.setAttribute("href", "https://www.codehelp.in/");
	  
	  
// ******very imp, iff you are setting attribute of thee same element second time then it will remove the first attribute and add the latest ones******

---getAttribute()
The getAttribute() method in JavaScript is used to retrieve the value of a specified attribute on an HTML element. This method allows us to access the value of any attribute associated with an HTML element.

var attributeValue = element.getAttribute(attributeName);

function getAttributeValue() {
            var para = document.getElementById("fpara");
            var titleAttributeValue = para.getAttribute("title");

            alert("The value of the 'title' attribute is: " + titleAttributeValue);

            //Output : The value of the 'title' attribute is: Page Title
        }















```

