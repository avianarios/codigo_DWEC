////////////////////////////////
/////////window object////////
////////////////////////////////


//reference to window object can be skipped at any method. window.open(url) == open(url)

///////////////////
//////methods//////
///////////////////

///open method///
//open an url in a new window
/*arguments: 
    1- the URL to load
    2- the window target (name or _self, _blank, _parent, and _top)
    3- a string of window features (properties of the new window as width, height, menubar, toolbar, location, status, scrollbar or resizable)*/
let url="https://www.mozilla.org";
let destino="_blank";
let caracteristicas='height=600,width=800, resizable';
window.open(url, destino, caracteristicas)

let url2 = 'https://elpais.com';
//let abreVentana=(url, destino, caracteristicas) => (window.open(url, destino, caracteristicas));
//abreVentana(url, '_blank', caracteristicas);
//abreVentana(url2, 'ventana', caracteristicas);

///setTimeout method///
//executes a callback function once specified time has expired
//setTimeout (funcion, retraso, ..parámetros para la función)
window.setTimeout(() => {
    window.open (url);
  }, 2000, "https://elpais.com");

//example 2
function mensaje(nombre, mensaje){
    console.log (`hola, ${nombre} y te tengo que decir que ${mensaje}`);
}
setTimeout(mensaje, 2000, "Perico", "buenas noches");

///clearTimeout method///
//removes the timeout
//it needs the timestamp returned when calling setTimeout
let timeoutID=setTimeout(alert, 5000, "texto de la alerta");
clearTimeout(timeoutID);    //cancels timeout

///setInterval method///
//executes a function periodically
function mensaje2(){
    alert ("mensaje");
}
setInterval(mensaje2, 2000);

setInterval(()=>{
    alert("mensaje");
}, 2000);

// window.setTimeout(window.open (url), 2000); //doesn't work. setTimeout expects the first argument to be a function


///resize method///
//resizeBy adds or substract a certain amount of px to current window (if it is resizable)
nuevaVentana=window.open("www.duckduckgo.es", "unNombre", "height=1000, width=900, resizable");
setTimeout(() => {
  nuevaVentana.resizeBy(-300,-200);
}, 2000);  

setTimeout(() => {
    window.open ("www.elpais.com");
  }, 2000); 

//resizeTo sets current window to a specific size (if it is resizable)
setTimeout(() => {
    nuevaVentana.resizeTo(600, 900);
}, 2000);

///moveTo method///
//moves a window to a specific location
setTimeout(() => {
    nuevaVentana.moveTo(500, 500);
}, 2000);

///close method///
//closes a window
setTimeout(() => {
    nuevaVentana.close();
}, 2000);

///alert method///
///shows a message
window.alert("esto es un mensaje");
alert("esto es otro mensaje");

///confirm method///
///shows a confirmation window
//it has two buttons, ok or cancel, and return true or false
let opcion=window.confirm("¿Está seguro de que desea borrarlo?");
opcion ? alert ("vamos a borrarlo") : alert ("no lo borramos");

///prompt method///
///shows an input field
//a default text can be provided
let nombre=window.prompt("Dígame su nombre", "nombre");
let edad=Number(window.prompt("Dígame su edad","edad"));

///////////////////////
///////properties//////
///////////////////////

//innerHeight returns the interior height of the window in pixels
//it's read-only
console.log (window.innerHeight);

//innerWidth returns the interior width of the window in pixels
//it's read-only
console.log (window.innerWidth);

//location is a window property, as well as an object
//represents the current url
console.log (window.location);

//document
//returns a reference to an object document representing the content showed in the window
console.log (window.document);

//localStorage and sessionStorage are window properties, as well as objects

//screen
//screen is a window property, as well as an object
//represents the screen the object is being represented on
//read-only properties
console.log (window.screen.availHeight);    //pixels available in the screen in the vertical dimension. Some devices reserves space for themselves
console.log (window.screen.height);
console.log (window.screen.availWidth);
console.log (window.screen.width);
console.log (window.screen.colorDepth);
console.log (window.screen.orientation);

