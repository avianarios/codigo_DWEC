/////////////////////////////////
////manipulating DOM elements////
/////////////////////////////////

////innerHTML, innerText and textContent////
//getting and setting text
//1:HTML Content of the selection including spacing, line breaks and formatting (html tags) --> Avoid using it. HTML malicious content could be inserted
//2:Just the visible text, without text spacing and tags
//3:All the text, including invisible, with spacing --> Should be used

//example 1: substitute a text
document.getElementById("titulo1").innerHTML="<article>Animales que viven con nosotros (modificado tras haber sido renderizado)</article>";

//example 2: adds a text to a list of elements
const parrafos=document.getElementsByTagName("p");
let listaParrafos=Array.prototype.slice.call(parrafos);
listaParrafos.forEach(elemento => {
    setTimeout(()=>{
        elemento.innerHTML+="<article>Este texto se le ha añadido al enlace original</article>";        //Should innerText or textContend be used, HTML tags would've been literally added
    }, 3000);
});

console.log (document.getElementById("parrafo2").innerHTML);
console.log (document.getElementById("parrafo2").innerText);
console.log (document.getElementById("parrafo2").textContent);

//example 3
let seleccionado=Array.from(document.getElementsByClassName("parrafo_cuerpo"));
seleccionado.forEach(elemento=>{
    setTimeout(()=>{
        elemento.innerHTML+=" Vaya animal <span style='display: none;'>bonito<span>.";
    }, 2000);
});

setTimeout(()=>{
    console.log (document.getElementById("parrafo2").innerHTML);
    console.log (document.getElementById("parrafo2").innerText);
    console.log (document.getElementById("parrafo2").textContent);
},3000);



//example 3
document.getElementById("parrafo1").style.backgroundColor="#00ff00";
/*        elemento.style.fontSize="1rem";
        elemento.style.textAlign="center";
        elemento.style.fontWeight="bold";
        elemento.innerHTML+=" Vaya animal <span style='display: none;'>bonito<span>";
//        elemento.innerText+=" <strong>Vaya animal <span style='display: none;'>bonito<span></strong>";
  //      elemento.textContent+=" <strong>Vaya animal <span style='display: none;'>bonito<span></strong>";
    }, 1000);
});
//document.getElementById("enviar").textContent="Texto cambiado";



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








