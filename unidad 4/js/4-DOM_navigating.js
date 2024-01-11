//////////////////////////////
////manipulating CSS nodes////
//////////////////////////////



////createElement, createTextNode, appendChild////
//1: creates a node
//2: creates a text element
//3: makes a node to be child of another one
//example 1: creates a new section with a p section and a text on it
const seccion=document.createElement("section");
const nodo=document.createElement("p");
const texto=document.createTextNode("hola don pepito");
seccion.appendChild(nodo);
nodo.appendChild(texto);
document.body.appendChild(seccion);

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


////firstChild, firstElementChild////
//1: get the first Child of any type provided a given node.
// Caution: Any whitespace will create a text_node (#text "\n  "), from a single space to multiple spaces, returns, tabs...
//2: get the first Child of type "element_node" provided a given node (#text is not)
document.getElementById("listaCompra").firstElementChild.innerHTML="mangos";



////lastChild, lastElementChild, childNodes////
//1: get the lastChild of a given node (including text_node, nº3)
//2: get the last child of a given node which is a element_node (nº1)
//3: get the list of the children of a given node ()
//document.getElementById("listaCompra").firstChild.innerHTML="mangos";



/*

document.getElementById("enviar").parentNode
getElementById("direccion")
childNode[4].parentNode.insertBefore(childNode[4], childNode[3]);





////appendchild////
//adds a child to a node*/