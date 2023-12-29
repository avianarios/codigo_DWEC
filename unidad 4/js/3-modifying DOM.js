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


