/**
 *  Understanding Reflow and Repaint
 Reflow (or Layout)
 Reflow is the process of recalculating the positions and geometries of elements in the document, which may be triggered by changes that affect layout, such as resizing the browser window, modifying DOM elements, or changing CSS styles that affect layout properties (e.g., width, height, margin, padding).

 Repaint
 Repaint occurs after reflow and involves updating the visual representation of affected elements on the screen. It doesn't involve changing the layout but rather updating the pixels to reflect changes in appearance, such as color, background, border, or visibility.
 
 ---what is documnet fragement: lightweight document object-- does not take reflow or repaint
 
 
 
 Inefficient code
 
 ------------------------------------------------------------------------
 // This code triggers a reflow for every paragraph element
 for (let i = 0; i < 100; i++) {
   const paragraph = document.createElement('p');
   paragraph.textContent = 'New paragraph';
   document.body.appendChild(paragraph);
 }
 
 ------------------------------------------------------------------------------
 ```
 
 Efficient code using document fragment
 const fragment = document.createDocumentFragment();
 for (let i = 0; i < 100; i++) {
   const paragraph = document.createElement('p');
   paragraph.textContent = 'New paragraph';
   fragment.appendChild(paragraph);
 }
 document.body.appendChild(fragment);
 
 * 
 */