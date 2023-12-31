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

////outerHTML////
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


//////////////////////////////////
///manipulating node attributes///
//////////////////////////////////

//HTML standard attributes have the DOM properties counterparts. They're case insensitive
//Non standard attributes can be created. they are useful to pass custom data from HTML to JavaScrip or to mark HTML elements to do something with them in JavaScript. User doesn't get affected

/*Example of standard and non-standard attributes:
<section class="container" data-attr="value"></div>
class and data-attr are attributes. the former is standard, the latter is not
*/

//Creating non-standard attributes
document.body.myData = {
    name: 'Cesar',
    title: 'Emperador'
  };
console.log (document.body.myData.title);

//HTML standard attributes can be accessed by using its name
let imagen=document.querySelector("img")
imagen.alt="el nuevo texto de la imagen";
imagen.src="https://picsum.photos/300";

//but non-standard attributes can't
document.body.myData.title="saludos";    //it doesn't work


//both standard and non standard attributes can be manipulated by using functions
////hasAttributes, hasAttribute, getAttributeNames, getAttribute, setAttribute, removeAttribute, toggleAttribute////
//1.-Checks if an element has attributes
//2.-Checks if an element has a specific attribute
//3.-Returns an array with the attributes of an element
//4.-Gets attribute value
//5.-Sets attribute value
//6.-Removes attribute from tag
//7.-If the attribute exists, it is removed. Otherwise, it is created

//example 1: standard attribute. Changing img src
console.log("¿La imagen tiene atributos?:"+imagen.hasAttributes());
console.log("Nombres de los atributos:"+imagen.getAttributeNames());
if (imagen.hasAttribute('src')){
    console.log ("El atributo src de la imagen es "+imagen.getAttribute('src'));
    imagen.setAttribute('src', 'https://picsum.photos/300');
}

//example 2: standard attribute. Removing id from paragraphs
let parrafos=Array.from (document.getElementsByTagName("p"));
parrafos.forEach(element => {
        if (element.hasAttribute('id')){
            element.removeAttribute('id');
        }
});

//example 3: modifying a boolean attribute
let boton=document.getElementById("enviar");
boton.setAttribute("disabled", "");     //it's a boolean attribute. Had we specify "true", it'd be treated as an string. Therefore, "" means true and the lack of the attribute means false
boton.toggleAttribute("disabled");  //if it doesn't exist, it is created (in a boolean attribute, means true). If it exists, it is removed (in a boolean attribute, means false)

//example 4: creating non-standard attribute
document.body.setAttribute('myData.title','hola');  //it works

//example 5: creating non-standard attribute and iterating through them
//attributes collection is iterable
document.body.setAttribute('myData.age','25');
for (let attr of document.body.attributes) { 
    console.log( `${attr.name} = ${attr.value}` );
}

//example 6
let mascotas=[
    {nombre:'gatín', raza:'común europeo'},
    {nombre:'perrín', raza:'cocker'}
];

let col=fila=0;
for(let elemento of document.querySelectorAll('[muestra-info]')) {
    // inserta la información correspondiente en el campo
    let field = elemento.getAttribute('muestra-info');
    elemento.innerHTML = mascotas[fila][field];
    col++;
    //como se ha usado un for let of, hay que controlar filas y columnas
  if (col%2==0){
    fila++;
    col=0;
  }
}