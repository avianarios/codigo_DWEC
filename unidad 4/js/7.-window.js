////////////////////////////////
/////////window object////////
////////////////////////////////


//reference to window object can be skipped at any method. window.open(url) == open(url)

///////////////////
//////methods//////
///////////////////

////setTimeout, setInterval and clearTimeout////
//setTimeout performs an action with a given delay
let texto1=document.getElementById("texto1");
let demora=3000;
document.getElementById("settimeout_example").addEventListener("click", ()=>{
    setTimeout((funcion, destino, tiempo) => {
        texto1.textContent=`Ejemplo de cómo pasar parámetros a la función ${funcion} para que se vean en ${destino} a los ${tiempo} segundos`;
        //console.log (`hola, soy ${nombre} y te tengo que decir que ${mensaje}`);
    }, demora, "setTimeout", "pantalla", demora/1000);
});

//setInterval
//two paramethers: function and miliseconds to call the function. Optional paramethers, to be specified after the former, can be passed to the function
let demora2=1000;
let timeoutID;
document.getElementById("setinterval_example").addEventListener("click", (evento)=>{
    timeoutID=setInterval(incrementSeconds, demora2, evento.currentTarget.textContent);
    let seconds=0;
    function incrementSeconds(donde) {
        texto1.textContent = `Button "${donde}" clicked ${seconds} seconds ago`;
        seconds++;
    }
});

//clearTimeout method//
//removes the timeout by using the timestamp returned when calling setTimeout
document.getElementById("cleartimeout_example").addEventListener("click", (evento)=>{
    clearTimeout(timeoutID);    //cancels timeout
});


//open method//
//open an url in a new window
/*arguments: 
    1- the URL to load
    2- the window target (name or _self, _blank, _parent, and _top)
    3- a string of window features (properties of the new window as width, height, menubar, toolbar, location, status, scrollbar or resizable)*/

let url="https://www.mozilla.org";
document.getElementById("abre_ventana1").addEventListener("click", (evento)=>{
    let destino="_blank";
    let caracteristicas='height=600,width=800, resizable';
    window.open(url, destino, caracteristicas)
});

//let abreVentana=(url, destino, caracteristicas) => (window.open(url, destino, caracteristicas));
//abreVentana(url, '_blank', caracteristicas);
//abreVentana(url2, 'ventana', caracteristicas);


let espera=5000;
document.getElementById("abre_ventana2").addEventListener("click", (evento)=>{
    let seconds = espera/1000;
    let muestra_contador = document.getElementById('contador');
    muestra_contador.classList.toggle("dp_none");
    function incrementSeconds() {
        muestra_contador.textContent = "Opening window in " + seconds + " seconds.";
        seconds--;
        console.log (seconds);
        if (seconds==-1){
            clearInterval(cancelar_intervalo);
            muestra_contador.textContent="Window already opened";
        }
    }
    let cancelar_intervalo = setInterval(incrementSeconds, 1000);
    window.setTimeout(() => {
        window.open (url);
    }, espera);
});
// window.setTimeout(window.open (url), 2000); //doesn't work. setTimeout expects the first argument to be a function



///resize method///
//resizeBy adds or substract a certain amount of px to current window (if it is resizable)

document.getElementById("redimensiona_ventana1").addEventListener("click", (evento)=>{
//    nuevaVentana=window.open(window.location.href, "unNombre", "height=1000, width=1500, resizable");
    nuevaVentana=window.open("", "unNombre", "height=1000, width=1500, resizable");
    setTimeout(() => {
      nuevaVentana.resizeBy(-400,-300);
    }, 2000);
});

document.getElementById("redimensiona_ventana2").addEventListener("click", (evento)=>{
    nuevaVentana=window.open("", "unNombre", "height=1000, width=1500, resizable");
    setTimeout(() => {
        nuevaVentana.resizeTo(600, 900);
    }, 2000);
});

//move
document.getElementById("mueve_ventana").addEventListener("click", (evento)=>{
    nuevaVentana=window.open("", "unNombre", "height=800, width=1000, resizable");
    setTimeout(() => {
        nuevaVentana.moveTo(500, 500);
    }, 2000);
});



//close
document.getElementById("cierra_ventana").addEventListener("click", (evento)=>{
    nuevaVentana=window.open("", "unNombre", "height=1000, width=1500, resizable");
    setTimeout(() => {
        nuevaVentana.close();
    }, 2000);
});

//alert
document.getElementById("muestra_mensaje").addEventListener("click", (evento)=>{
    window.alert("esto es un mensaje");
});


//confirm
//shows a confirmation window with two buttons, ok or cancel Returns true or false
document.getElementById("muestra_confirmacion").addEventListener("click", (evento)=>{
    let opcion=window.confirm("¿Está seguro de que desea borrarlo?");
    opcion ? alert ("vamos a borrarlo") : alert ("no lo borramos");
});

//prompt
//shows an input field. A default text can be provided
document.getElementById("pide_datos").addEventListener("click", (evento)=>{
    let nombre=window.prompt("Dígame su nombre", "nombre");
    let edad=Number(window.prompt("Dígame su edad","edad"));
});


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