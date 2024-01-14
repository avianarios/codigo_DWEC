//////////////////////////////
////manipulating CSS nodes////
//////////////////////////////


////createElement, createTextNode, createComment, appendChild////
//1: creates a node
//2: creates a text element
//3: creates a comment
//4: makes a node to be child of another one
//example 1: creates a new section with a comment and a paragraph on it
let seccion=document.createElement("section");
let comentario=document.createComment("esta sección no tiene utilidad alguna");
let nodo=document.createElement("p");
let texto=document.createTextNode("hola don pepito");
seccion.appendChild(comentario);
seccion.appendChild(nodo);
nodo.appendChild(texto);
document.body.appendChild(seccion);

////createDocumentFragment////
//creates a temporary DOM, disconnected from the real one, avoiding having to make recurrent changes into the real DOM and boosting performance
const temporal=document.createDocumentFragment();
temporal.appendChild(document.createComment("esto es una sección temporal"));
temporal.appendChild(seccion);
let aux;
for (let i=0; i<5; i++){
    parrafo=document.createElement("p");
    texto=document.createTextNode(`párrafo número ${i}`);
    parrafo.appendChild(texto);
    seccion.appendChild(parrafo);
}
temporal.appendChild(seccion);
console.log (temporal);
setTimeout(()=>{
	document.body.appendChild(temporal);  
},3000);

////cloneNode(arg), isConnected////
//if arg=true, it also clones children
//After cloning, connecting the node to the DOM is needed. isConnected returns true when the node is connected to DOM
const seccion_clonada=seccion.cloneNode(true);
console.log (seccion_clonada.isConnected);  //false
document.body.appendChild(seccion_clonada);
console.log (seccion_clonada.isConnected);  //true

////removeChild////
//example: removing the last section of the body
/*Slow way:
let padre=document.body;
let borrar=document.querySelector("section:last-of-type");
padre.removeChild(borrar);*/
document.body.removeChild(document.querySelector("section:last-of-type"));

////replaceWith, parentNode, insertBefore////
//1: Replaces a node with another one
//2: Returns the parent element of a given node
//3: Inserts a node before another one

//creates a form field and appends it
const dir = document.createElement("input");
dir.type="text";
dir.name="direccion";
dir.placeholder = "direccion";
dir.id = "direccion";
const form = document.getElementById("formulario-contacto");
form.appendChild(dir);

//moves the new created direccion field before button
const boton = document.getElementById("enviar");
const parent = boton.parentNode;
dir.replaceWith(boton);
parent.insertBefore(dir, boton);


*/