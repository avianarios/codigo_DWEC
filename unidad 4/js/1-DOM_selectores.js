/////////////////////
////DOM selectors////
/////////////////////

//getElementById//
//returns an element whose id matches a passed string. Since the ids of elements are unique, this is the fastest way to select an element.
let aux=document.getElementById("parrafo1");
console.log (aux);

////getElementsByTagName////
//returns a collection of all the elements present in the document that have the specified tag name, in the order of their appearance in the document.
let aux2=document.getElementsByTagName("p");
console.log (aux2[0], aux2.length);

////getElementsByClassName////
//returns an HTMLCollection of elements that match the passed class name. Bypassing the class names separated by whitespace, we can search for multiple class names.
let aux3=document.getElementsByClassName("seccion");
console.log (aux3[0], aux3.length);

////getElementsByName////
//returns a NodeList Collection of the elements that match the value of the name attribute with the passed string.
let aux4=document.getElementsByName("nombre");
console.log (aux4[0],aux4.length);

////querySelector////
//returns the very first element within the document that matches the given selector. It only returns the element that matches with one of the specified CSS selectors, or a group of selectors.
let seccion=document.querySelector("section");
console.log(seccion);

////querySelectorAll////
//returns a static NodeList of elements that matches with one or a group of selectors. If no element matches, an empty NodeList is returned.
let secciones=document.querySelectorAll("section");
console.log (secciones);