/*main sources:
https://www.digitalocean.com/community/tutorials/how-to-modify-attributes-classes-and-styles-in-the-dom
https://www.javascripttutorial.net/javascript-dom/
https://alvarotrigo.com/blog/change-css-javascript/
https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
https://developer.mozilla.org/en-US/docs/Web/API/Document/styleSheets
https://www.w3schools.com/
*/

///////////////////////////////////
////manipulating CSS Properties////
///////////////////////////////////
/*CSS property names are converted to JavaScript identifier with these rules:
    If the property is made of one word, it remains as it is: height stays as is (in lowercase).
    If the property is made of several words, separated by dashes, the dashes are removed and it is converted to camel case: background-attachment becomes backgroundAttachment.
    The property float, being a reserved JavaScript keyword, is converted to cssFloat.*/

//by using elemento.style.CSSConvertedPropertyName, inline styles are those being modified
let elemento=document.getElementById("parrafo1");
setTimeout(()=>{
    elemento.style.backgroundColor="#00ff00";
    elemento.style.fontSize="1rem";
    elemento.style.textAlign="center";
    elemento.style.fontWeight="bold";
}, 3000);


const miEstilo= `
    display: block;
    width: 80%;
    background-color: red;
    border: 2px;
    font-size: 5em;
    color: white;
    margin: 20px;
    padding-left: 10px;
    padding-bottom: 10px;
    border: 2px solid black;
`;
elemento.style.cssText=miEstilo;

///////////////////////////////////
////manipulating tag attributes////
///////////////////////////////////
////hasAttribute, getAttribute, setAttribute, removeAttribute////
//1- Checks if a tag has an attribute or not
//2- Gets attribute value
//3- Sets attribute value
//4- Removes attribute from tag
//example 1: changing img src
let imagen=document.querySelector("img");
if (imagen.hasAttribute('src')){
    console.log ("La imagen actual es "+imagen.getAttribute('src'));
    imagen.setAttribute('src', 'https://picsum.photos/300');
}

//example 2: removing id from paragraphs
let parrafos=Array.from (document.getElementsByTagName("p"));
parrafos.forEach(element => {
        if (element.hasAttribute('id')){
            element.removeAttribute('id');
        }
});

////////////////////////////////////////////
////add, remove, replace, toggle classes////
////////////////////////////////////////////
//4-If it doesn't exist, then it's added. If it exists, then it's removed
let a=Array.from(document.getElementsByClassName("parrafo_cuerpo"));
a.forEach(elemento=>{
    elemento.classList.add("otraClase");
    elemento.classList.toggle("parrafo_cuerpo")
});


//////////////////////////////////////////////
////////////modify CSS stylesheets////////////
//////////////////////////////////////////////
//Reasons to modify CSS instead of inline stlye:
//1-Apply the change to all elements with a certain selector. 
//2-Apply the change to future elements that will be added dynamically later on.
//3-Applying changes to a huge amount of elements sharing the selector would be extremely slow
//////////////////////////////////////////////

// Getting the stylesheet
////////////zzzzzzzzzzzzzz
const stylesheet = document.styleSheets[1]; //the second linked stylesheet
let elementRules;

// looping through all its rules and getting your rule
for(let i = 0; i < stylesheets.cssRules.length; i++) {
  if(stylesheet.cssRules[i].selectorText === '#parrafo') {
    elementRules = stylesheets.cssRules[i];
  }
}

// modifying the rule in the stylesheet
elementRules.style.setProperty('background', 'blue');



/*
const button = document.querySelector('button');
// Not all browsers have `forEach` on NodeLists, convert to array
const paragraphs = Array.from(document.querySelectorAll('p'));
const image = document.querySelector('img');

button.addEventListener('click', clickHandler);
image.addEventListener('click', clickHandler);

function clickHandler(e) {
  // Loop through all paragraph tags
  paragraphs.forEach(p => p.style.color = 'red');
}*/








