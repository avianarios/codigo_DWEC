/*
An event is anything that occurs out of the blue, due to an user interaction or not, and we can associate an action to:
    The page finishes loading
    The user clicks a button
    The user hovers over a dropdown
    The user submits a form
    The user presses a key on their keyboard

Event hander-> a JavaScript function that runs when an event fires.
Event listener-> attaches an interface to an element allowing it to “listen” for the given event in order to fire the event handler 


3 ways:
    -Inline event handler. Embed code into HTML. DO NOT USE
        <button onClick="console.log('¡Saludos, criatura!')">Saludar</button>

        <button id="enviar" onclick="saludar()">Enviar</button>
        <script>
            let saludar = () => console.log ("¡Saludos, criatura!");
        </script>

        <button id="enviar" onclick="saludar()">Enviar</button>
        <script src="codigo.js"></script>


    -Event handler properties. Not recommended. Some events can't be assigned by using properties
        let boton=document.querySelector("#formulario_contacto button");
        boton.onclick=function (){ console.log ("¡Saludos, criatura!"); };
        

        let boton=document.querySelector("button");
        let saludar = () => console.log ("¡Saludos, criatura!");
        boton.setAttribute("onclick", "saludar");

    -Using event listeners. RECOMMENDED. It allows to attach more than one eventListener to the same element, it has control over when the event is triggered and it works even with no HTML elements
        let boton=document.querySelector("#formulario_contacto button");
        boton.addEventListener("click", function (){        //it's click, not onclick
            console.log('¡Saludos, criatura!');
        });
*/



////Attaching one or several event handlers////
let cambiaColor = document.getElementById("cambiaClase");
const toggle = () => cambiaColor.classList.toggle("rojo");
cambiaColor.addEventListener("click", toggle);         // Add/remove red CSS. 


////Attaching one or several event handlers////
let cambiaTxt=document.getElementById("cambiaTexto");
let contador=0;
let cuenta_veces=()=>{
    contador++;
}
let cambia_texto=()=>{
    cambiaTxt.innerText="Veces pulsado:"+contador;
}

cambiaTxt.addEventListener("click", cuenta_veces);       //Beware of using cambiaTexto(). It is a function call!
cambiaTxt.addEventListener("click", cambia_texto);


////Attaching one or several event handlers////
document.addEventListener("click", evento => {
    if (evento.target.matches("button")) {   //CSS selector
      console.log("Clicked Button")
    }
});
//a new button is added before adding an event listener. Thanks the way it is coded, this newly created button has an event listener attached
const li=document.createElement("li");
const newButton = document.createElement("button")
newButton.textContent="Attached button after creating event handlers";
li.appendChild(newButton);
let lugar_insercion=document.getElementById("lista_botones1");
lugar_insercion.insertAdjacentElement("beforeend", newButton);

/*let lugar_insercion=document.getElementById("cambiaTexto").parentElement;
lugar_insercion.insertAdjacentElement("afterend", newButton);*/




////Reading event information ////
//when an event occurs, the browser creates an event object, puts details into it and passes to the event handler
//type, currentTarget, target, istrusted, timeStamp, clientX, clientY
let infoEvento = document.getElementById("informacionEvento");
infoEvento.addEventListener("click", (event) => {
    //When using an ID, browser creates a property with the same name and attach to document. Thus, texto_coordenadas.innerHTML can be used besides document.getElementByID("texto_coordenadas"). The latter is much more recommended
    //more info: https://stackoverflow.com/questions/3434278/do-dom-tree-elements-with-ids-become-global-properties
    let texto1=document.getElementById("texto_coordenadas");
    if (texto1.classList.contains ("dp_none")){ texto1.classList.remove("dp_none"); }
    texto1.innerHTML="An event of type: "+event.type + " has occurred at:" + event.currentTarget+" at time "+event.timeStamp +" at coordinates X:"+event.clientX+" Y:"+event.clientY;
    ( event.isTrusted ) ? texto1.innerHTML+="<br>Is a trusted event (launched by web browser)" : texto1.innerHTML+="Is not a trusted event (launched by programmer)";
});
/*const { type, timeStamp, isTrusted } = event;
console.log({ type, timeStamp, isTrusted });*/



////Defining an event handler as an object////
//Besides a function, an event handler can be assigned by using an object. When an event occurs, its handleEvent method is called.
//example 1
class EventManager {
    constructor(element) {
      element.addEventListener('click', ()=>this.sendMessage());      //by using an arrow function, this references to the eventManager class allowing to call other methods within any method
    }
  
    sendMessage() {
      alert("Has hecho click en el botón");
    }
}
  
const button_object1 = document.getElementById("eventhandler_object1");
const eventManager = new EventManager(button_object1);


//example 2
class Manejador {
    handleEvent(event) {
        //let method = 'on' + event.type[0].toUpperCase() + event.type.slice(1);    // allows to switch mousedown to onMousedown
        this[event.type](event);
    }

    mousedown(){
        button_object2.innerHTML = "Mouse button pressed";
    }

    mouseup(){
        button_object2.innerHTML += "...and released.";
    }

/*    onMousedown() {
        button_object2.innerHTML = "Mouse button pressed";
    }

    onMouseup() {
        button_object2.innerHTML += "...and released.";
    }*/
}
let menu = new Manejador();
let button_object2=document.getElementById("eventhandler_object2");
button_object2.addEventListener('mousedown', menu);
button_object2.addEventListener('mouseup', menu);




////Using data attributes alongside objects to assign event handler just once////
//data attribute must be called data-accion (notice event.target.dataset.accion) and its value must be guardar, cargar and
class Menu {
    constructor(elem) {
      this._elem = elem;
      elem.onclick = this.onClick.bind(this); 
    }

// Si no se usa bind, el this de dentro del método hace referencia al elemento que procoa el evento y no a la clase del componente.
// gracias a bind, se pueden usar los métodos y propiedades de la clase mediante this. 
// bind realiza una copia de la función que queremos ejecutar, y le pasa por parámetro el elemento al que va a apuntar this.

    save() {
        //texto_botones_accion.textContent="aaa"
        this.contenedor_texto.textContent="save button pressed";
    }

    load() {
        this.contenedor_texto.textContent="load button pressed";
    }

    search() {
        this.contenedor_texto.textContent="search button pressed";
    }

    onClick(event) {
        this.contenedor_texto=document.getElementById("texto_botones_accion");
        let action = event.target.dataset.accion;
        if (action) {
            this[action](); //calls the method that matches the name of the action in data-accion
        }
    };
  }

  new Menu(botones_accion);


  ////using data attributes////
document.addEventListener('click', (event) => {
    if (event.target.dataset.contador != undefined) { // if the attribute exists...
      event.target.value++;
    }
});

document.addEventListener('click', (event)=> {
    let id = event.target.dataset.oculta;
    if (!id) return;

    let elem = document.getElementById(id);

    elem.hidden = !elem.hidden;
});


////Removing event listener (hover this text)////
//only possible when using a function with a name, not a anonymous one
const texto_hover = document.getElementById("hoverPara");
texto_hover.addEventListener("mouseover", RespondMouseOver);

const boton_para_hover=document.getElementById("clickIt");
boton_para_hover.addEventListener("click", RespondClick);
 
function RespondMouseOver() {
    document.getElementById("effect").innerHTML += "mouseover Event !!" + "<br>";
}
 
function RespondClick() {
    texto_hover.removeEventListener("mouseover", RespondMouseOver);
    boton_para_hover.textContent="Start listening for events again";

    document.getElementById("effect").innerHTML += 'eventListener removed. Now mouseover event doesn\'t work !!';
}


////Event propagation////
//let's add event listeners all the way up on ancestors of a paragraph untill its section for both phases: capturing and bubbling 
let seccion=document.getElementById("event_propagation");
seccion.addEventListener('click', function(evento){
    console.log("Bubbling phase: Estoy en "+evento.currentTarget.tagName+" y el evento lo lanzó "+evento.target.tagName);
});
seccion.addEventListener('click', function(evento){
    console.log("Capturing phase: Estoy en "+evento.currentTarget.tagName+" y el evento lo lanzó "+evento.target.tagName);
}, {capture:true}); //using true is equivalent to {capture:true}. it can be used with once:true to remove after using for the first time {capture:true, once:true}

let elementos=document.querySelectorAll("#event_propagation *");
for (let elemento of elementos){
    elemento.addEventListener('click', (evento) =>{
        console.log("Bubbling phase: Estoy en "+evento.currentTarget.tagName+" y el evento lo lanzó "+evento.target.tagName);
    });
    elemento.addEventListener('click', (evento) =>{
        console.log("Capturing phase: Estoy en "+evento.currentTarget.tagName+" y el evento lo lanzó "+evento.target.tagName);
    }, {capture:true});
}

//fast way of adding event listeners to ALL elements, starting with window all the way down to the very last element at DOM
/*option 1: using function with names so eventlisteners can be removed */
/*function bubbling (evento){
    console.log("Bubbling phase: Estoy en "+evento.currentTarget.tagName+", y el evento lo lanzó "+evento.target.tagName);
}

function capturing(evento){
    console.log("Capture phase: Estoy en "+evento.currentTarget.tagName+", y el evento lo lanzó "+evento.target.tagName);
}

for (let element of document.querySelectorAll("*")){
    element.addEventListener('click', bubbling); //it can be added {once:true}
    element.addEventListener('click', capturing, {capture:true});
}*/

/*option 2: using anonymous functions. Eventlisteners can't be removed later*/
/*for (let element of document.querySelectorAll("*")){
        element.addEventListener('click', evento=>{
        console.log("Bubbling phase: Estoy en "+evento.currentTarget.tagName+", y el evento lo lanzó "+evento.target.tagName);
    }); //it can be added {once:true}
    element.addEventListener('click', evento=>{
        console.log("Capture phase: Estoy en "+evento.currentTarget.tagName+", y el evento lo lanzó "+evento.target.tagName);
    }, {capture:true});     //"{capture:true}" can be changed by just "true". {capture:true,once:true}
}*/

////stop propagation////
parrafo=document.querySelector("#stop_bubbling > p");
parrafo.addEventListener('click', evento=>{
    console.log("Parando la propagación en "+evento.currentTarget.tagName);
    evento.stopPropagation();
});



////Capturing an event just on a parent element////
objetivo=document.querySelector("section:nth-of-type(3)");
objetivo.addEventListener('click', (evento)=>{
    console.log ("event captured at "+evento.currentTarget.tagName+" y lanzado en "+evento.target.tagName);
});


////Event handlers defined at parents////  
objetivo=document.getElementById("tabla1");
let selectedTd;

objetivo.addEventListener('click', (evento)=>{
    let td = evento.target.closest('td'); // Just in case any element inside td is clicked. Closest return the closest parent element that matches CSS selector
    if (!td) return; // if there's not a td parend (the closest element is null)
    //if (!objetivo.contains(td)) return; // check if is our table, just in case of nested tables

    if (selectedTd)
        selectedTd.classList.toggle("highlight");
    selectedTd=td;
    td.classList.toggle("highlight");
});


/*Function to add an event listener dynamically
function addGlobalEventListener(type, selector, callback, options) {
  document.addEventListener(
    type,
    e => {
      if (e.target.matches(selector)) callback(e)
    },
    options
  )
}

//call to the previous function with a button
addGlobalEventListener(
  "click",
  ".btn",
  () => {
    console.log("Clicked Button")
  },
  { once: true }
)*/


