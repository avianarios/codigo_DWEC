/*main sources:
https://www.javascripttutorial.net/javascript-dom/
https://www.w3schools.com/
*/
//////////////////////////////////
////manipulating text elements////
//////////////////////////////////

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