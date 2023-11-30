/////////////////////
////DOM selectors////
/////////////////////

//getElementById//
//returns an element whose id matches a passed string. Since the ids of elements are unique, this is the fastest way to select an element.
document.getElementById("parrafo1");


////getElementsByTagName////
//returns a collection of all the elements present in the document that have the specified tag name, in the order of their appearance in the document.
document.getElementsByTagName("p");

/*
getElementsByClassName: returns an HTMLCollection of elements that match the passed class name. Bypassing the class names separated by whitespace, we can search for multiple class names.
getElementsByName: returns a NodeList Collection of the elements that match the value of the name attribute with the passed string.


querySelector: returns the very first element within the document that matches the given selector. It only returns the element that matches with one of the specified CSS selectors, or a group of selectors.
<p class="example">I am a paragraph.</p>
<p class="example">I am a paragraph.</p> 

<script>
document.querySelector(".example").style.backgroundColor = "red";
</script>



querySelectorAll: returns a static NodeList of elements that matches with one or a group of selectors. If no element matches, an empty NodeList is returned.
*/


/////////////////////////////////
////manipulating DOM elements////
/////////////////////////////////

//innerHTML
//Get and Set the HTML Content of the selection
console.log(document.getElementByTagName("parrafo1").innerHTML);
document.getElementById("parrafo1").innerHTML="este párrafo ha sido modificado tras haber sido renderizado";






