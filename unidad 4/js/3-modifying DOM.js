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
let temporal=document.createDocumentFragment();
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
let seccion_clonada=seccion.cloneNode(true);
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


////replaceChild////
let sustituido=document.querySelector("#parrafos p:first-of-type");
let sustituto=document.querySelector("#parrafos p:last-of-type");
let padre=document.querySelector("#parrafos>article");
padre.replaceChild(sustituto, sustituido);


////insertBefore////
//parent element must be specified
let parrafo_temporal=document.createDocumentFragment();
nodo=document.createElement("p");
texto=document.createTextNode("texto creado en una estructura temporal antes de insertarlo en el DOM"); //equivalent to nodo.textContent("texto....");
nodo.appendChild(texto);
parrafo_temporal.appendChild(nodo);

padre=document.querySelector("#parrafos>article");
lugar_insercion1=document.querySelector("#parrafos>article:first-of-type>p:nth-of-type(3)");
lugar_insercion2=document.querySelector("#parrafos>article:first-of-type>p:last-of-type");

padre.insertBefore(parrafo_temporal, lugar_insercion1);


////before and after////
//before is similar to insertBefore method, but needless to specify parent element
//example 1
lugar_insercion1.before(parrafo_temporal);
lugar_insercion2.after(parrafo_temporal);

//example 2
dir = document.createElement("input");
dir.type="text";
dir.name="direccion";
dir.placeholder = "direccion";
dir.id = "direccion";
boton = document.getElementById("enviar");
boton.before(dir);



////append and prepend////
//1: adds a new element after the last child
//2: adds a new element before the first child
//creating 2 elements: one would be inserted after and, the other one, before
let lista=document.querySelector("ul");

//two ways of creating li element: innerHTML and createTextNode-append
let elemento=document.createElement("li");
elemento.innerHTML="kiwis"

let elemento2=document.createElement("li");
let fruta2=document.createTextNode("mango");
elemento2.append(fruta2);

lista.append(elemento); //same as lista.appendChild(elemento);
lista.prepend(elemento2);


////replaceWith and replaceWithChildren////
//1: Replaces all children, at any level, of a given node
//2: Replace only the last level of children of a given node

//let's start by cloning a section to see the difference between them
objetivo=document.querySelector("#parrafos");
seccion_clonada=objetivo.cloneNode(true);

objetivo.after(seccion_clonada);


/*let contenedor=document.querySelector("#parrafos>article");
let elemento_final=document.querySelector("#parrafos>article>p:last-of-type");*/

let parrafo=document.createElement("p");
parrafo.textContent="nuevo texto";
//element=document.createTextNode("nuevo texto");

//elemento_final.replaceWith(parrafo);
contenedor.replaceWith(parrafo);
contenedor.replaceChildren(parrafo);

