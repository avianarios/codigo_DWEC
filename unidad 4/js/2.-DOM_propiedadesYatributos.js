/*main sources:
https://www.javascripttutorial.net/javascript-dom/
https://es.javascript.info/basic-dom-node-properties
https://es.javascript.info/dom-attributes-and-properties
https://www.w3schools.com/
*/

////////////////
////nodetype////
////////////////
//it gets the type of node
//most common: 1->element, 3->text, 9->document
console.log (document.getElementById("titulo1").nodeType,
            document.body.firstChild.nodeType,  //the first child of body is a comment because there is no space between them. If there were a space, DOM would've created an empty #text node
            document.body.getElementsByTagName("section")[0].firstChild.nodeType, //the fist child of the section tag is an empty text node
            document.getElementById("titulo1").firstChild.nodeType,
            document.nodeType);


////////////////
////nodename////
////////////////
console.log (document.getElementById("titulo1").nodeName,
            document.body.firstChild.nodeName,  //the first child of body is a comment because there is no space between them. If there were a space, DOM would've created an empty #text node
            document.body.getElementsByTagName("section")[0].firstChild.nodeName, //the fist child of the section tag is an empty text node
            document.getElementById("titulo1").firstChild.nodeName,
            document.nodeName);


///////////////
////content////
///////////////
////innerHTML, innerText and textContent////
//getting and setting text
//1:HTML Content of the selection including spacing, line breaks and formatting (html tags) --> Avoid using it. HTML malicious content could be inserted
//2:Just the visible text, without text spacing and tags
//3:All the text, including invisible, with spacing --> Should be used

//example 1: substitute a text
document.getElementById("titulo1").innerHTML="<article>Animales que viven con nosotros (modificado tras haber sido renderizado)</article>";

//example 2: adds a text to a list of elements
//const parrafos=document.getElementsByTagName("p");
//let listaParrafos=Array.prototype.slice.call(parrafos);
let listaParrafos=Array.from (document.getElementsByTagName("p"));
listaParrafos.forEach(elemento => {
    setTimeout(()=>{
        elemento.innerHTML+="<article>Este texto se le ha añadido al enlace original</article>";        //Should innerText or textContend be used, HTML tags would've been literally added
    }, 3000);
});

//example 3
let seleccionado=Array.from(document.getElementsByClassName("parrafo_cuerpo"));
seleccionado.forEach(elemento=>{
    setTimeout(()=>{
        elemento.textContent+=" Vaya animal más adorable";
    }, 2000);
});

//example 4
setTimeout(()=>{
    document.getElementById("enviar").textContent="Texto cambiado";
}, 2000);

////outherHTML////
//innerHTML+the HTML element itself
let aux=document.querySelector("h2");
aux.outerHTML="<h3>Este es el nuevo encabezado</h3>";
console.log (aux.outerHTML);        //be carefull, aux still holds a reference to the former element altough it doesn't exist anymore!!
console.log (document.querySelector("h2"));     //undefined (h2 no longer exists and there were only one h2 header)

////data////
//text nodes don't have innerHTML, but data
console.log (document.getElementsByTagName("section")[0].firstChild.nodeType); //type 3: text node
console.log (document.getElementsByTagName("section")[0].firstChild.data);
console.log (document.getElementById("titulo1").firstChild.nodeType); //type 1: element node
console.log (document.getElementById("titulo1").firstChild.innerHTML);

///////////////////////////////////
////manipulating node attributes////
///////////////////////////////////
//HTML standard attributes have the DOM properties counterparts. They're case insensitive
//Non standard attributes can be created
document.body.myData = {
    name: 'Cesar',
    title: 'Emperador'
  };
console.log (document.body.myData.title);


//HTML standard attributes can be accessed by using its name
let imagen=document.querySelector("img")
imagen.alt="el nuevo texto de la imagen";
imagen.src="https://picsum.photos/300";

//but non standard attributes can't
document.body.myData.title="saludos";    //it doesn't work


//both standard and non standard attributes can be manipulated by using functions
////hasAttribute, getAttribute, setAttribute, removeAttribute////
//1- Checks if a tag has an attribute or not
//2- Gets attribute value
//3- Sets attribute value
//4- Removes attribute from tag

//example 1: standard attribute. Changing img src
if (imagen.hasAttribute('src')){
    console.log ("La imagen actual es "+imagen.getAttribute('src'));
    imagen.setAttribute('src', 'https://picsum.photos/300');
}

//example 2: standard attribute. Removing id from paragraphs
let parrafos=Array.from (document.getElementsByTagName("p"));
parrafos.forEach(element => {
        if (element.hasAttribute('id')){
            element.removeAttribute('id');
        }
});

//example 3: creating non-standard attribute
document.body.setAttribute('myData.title','hola');  //it works

//example 4: creating non-standard attribute and iterating through them
//attributes collection is iterable
document.body.setAttribute('myData.age','25');
for (let attr of document.body.attributes) { 
    console.log( `${attr.name} = ${attr.value}` );
}

//why would I want non-standard attributes? 
//they are useful to pass custom data from HTML to JavaScrip or to mark HTML elements to do something with them in JavaScript. User doesn't get affected
/*let mascota={
    nombre: 'gatín',
    raza: 'común europeo'
};

 // el código encuentra un elemento con la marca y muestra lo que se solicita
 let user = {
    nombre: "Pete",
    edad: 25
  };

  for(let div of document.querySelectorAll('[show-info]')) {
    // inserta la información correspondiente en el campo
    let field = div.getAttribute('show-info');
    div.innerHTML = user[field]; // primero Pete en "nombre", luego 25 en "edad"
  }
*/

let mascotas=[
    {nombre:'gatín', raza:'común europeo'},
    {nombre:'perrín', raza:'cocker'}
];

console.log (mascotas[1]);


//no funciona aún
let i=0;
for(let elemento of document.querySelectorAll('[muestra-info]')) {
    // inserta la información correspondiente en el campo
    let field = elemento.getAttribute('muestra-info');
    elemento.innerHTML = mascotas[i%2][field]; // primero Pete en "nombre", luego 25 en "edad"
    console.log (document.querySelectorAll('[muestra-info]').length, i);
    i++;
}