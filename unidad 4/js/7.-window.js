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
        texto1.classList.remove("dp_none");
    }, demora, "setTimeout", "pantalla", demora/1000);
});

//setInterval
//two paramethers: function and miliseconds to call the function. Optional paramethers, to be specified after the former, can be passed to the function
let demora2=1000;
let timeoutID;
document.getElementById("setinterval_example").addEventListener("click", (evento)=>{
    timeoutID=setInterval(incrementSeconds, demora2, evento.currentTarget.textContent);
    texto1.classList.remove("dp_none");
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


//open
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

//resize
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
let texto_propiedades=document.getElementById("texto_propiedades");
document.getElementById("show_window_properties_button").addEventListener("click", (evento)=>{
    texto_propiedades.innerHTML=`<br>window.innerHeight: ${window.innerHeight}
                                <br>window.innerWidth: ${window.innerWidth}
                                <br>window.location: ${window.location}
                                <br>window.document: ${window.document}
                                <br>window.screen.availHeight: ${window.screen.availHeight}
                                <br>window.screen.availWidth: ${window.screen.availWidth}
                                <br>window.screen.height: ${window.screen.height}
                                <br>window.screen.width: ${window.screen.width}
                                <br>window.screen.colorDepth: ${window.screen.colorDepth}
                                <br>window.screen.orientation.type: ${window.screen.orientation.type}`;
    texto_propiedades.classList.remove("dp_none");
    document.documentElement.scrollTo(0, document.documentElement.scrollHeight);
});



//localStorage and sessionStorage are window properties, as well as objects

