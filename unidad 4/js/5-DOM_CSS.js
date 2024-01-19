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

//////////////////////////////////////////////
////////////modify CSS stylesheets////////////
//////////////////////////////////////////////
//Reasons to modify CSS instead of inline stlye:
//1-Apply the change to all elements with a certain selector. 
//2-Apply the change to future elements that will be added dynamically later on.
//3-Applying changes to a huge amount of elements sharing the selector would be extremely slow
//////////////////////////////////////////////

// Getting the stylesheet
////////////
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






