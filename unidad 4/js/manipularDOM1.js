const enlace = document.querySelector("a");
enlace.textContent = "Este texto ha cambiado";
enlace.href = "https://www.elpais.com";


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


////querySelectorAll////
//returns a static NodeList of elements that matches with one or a group of selectors. If no element matches, an empty NodeList is returned.



/////////////////////////////////
////manipulating DOM elements////
/////////////////////////////////

////innerHTML////
//Get and Set the HTML Content of the selection

//example 1: substitute a text
document.getElementById("titulo1").innerHTML="Animales que viven con nosotros (modificado tras haber sido renderizado)";

//example 2: adds a text to a list of elements
const parrafos=document.getElementsByTagName("p");
var listaParrafos=Array.prototype.slice.call(parrafos);
listaParrafos.forEach(element => {
    element.innerHTML+=" Este texto se le ha añadido al enlace original";
});

////textContent////
//returns the text content of an element
console.log (document.getElementById("enviar").textContent);
document.getElementById("enviar").textContent="aaa";

////createElement////
////createTextNode////
//creates a node
const seccion=document.createElement("section");
const nodo=document.createElement("p");
const texto=document.createTextNode("hola don pepito");
seccion.appendChild(nodo);
nodo.appendChild(texto);
document.body.appendChild(seccion);


//creates a form field and appends it
const dir = document.createElement("input");
dir.type="text";
dir.name="direccion";
dir.placeholder = "direccion";
dir.id = "direccion";
const form = document.getElementById("formulario-contacto");
form.appendChild(dir);

document.getElementById("enviar").parentNode
getElementById("direccion")
childNode[4].parentNode.insertBefore(childNode[4], childNode[3]);





////appendchild////
//adds a child to a node