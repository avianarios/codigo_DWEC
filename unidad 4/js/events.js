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



////addEventListener////
//creating an event listener

//example 1
function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

let boton=document.querySelector("#cambiaTexto");
let cambiaTexto=()=>{ boton.innerText=makeid(5)}
let saluda=()=> { console.log('¡Saludos, criatura!'); };

boton.addEventListener("click", cambiaTexto);       //Warning!! if cambiaTexto() is assigned, it is a function call
boton.addEventListener("click", saluda);

//example 2
let boton2 = document.querySelector("#cambiaClase");
const toggle = () => boton2.classList.toggle("rojo");
boton2.addEventListener("click", toggle);         // Add/remove red CSS. 

//example 3
//when an event occurs, the browser creates an event object, puts details into it and passes to the event handler
let boton3 = document.querySelector("#coordenadas");
const coordenadas = (event) => {
    document.getElementById("texto_articulo1").innerHTML="An event of type: "+event.type + " has occurred at:" + event.currentTarget+" at coordinates "+event.clientX+":"+event.clientY;
}
boton3.addEventListener("click", coordenadas);

//example 4
//Besides a function, an object as an event handler can be assigned by using addEventListener. When an event occurs, its handleEvent method is called.
class Manejador {
    handleEvent(event) {
      // mousedown -> onMousedown
      let method = 'on' + event.type[0].toUpperCase() + event.type.slice(1);
      this[method](event);
    }

    onMousedown() {
      boton4.innerHTML = "Mouse button pressed";
    }

    onMouseup() {
      boton4.innerHTML += "...and released.";
    }
  }

  let menu = new Manejador();
  boton4.addEventListener('mousedown', menu);
  boton4.addEventListener('mouseup', menu);


//example 5
//usage of the third, optional, parameter. It controls when to trigger the event: bubbling phase (false, default) of capturing phase (true)
//let's add event listeners all the way up on ancestors of a paragraph
let seccion=document.querySelector("section#bubbling");
let articulo=seccion.querySelector("article:first-of-type");
let parrafo=articulo.querySelector("p:first-of-type");
seccion.addEventListener('click', function(evento){
    console.log("Estoy en "+this.tagName+", pero el evento lo lanzó "+evento.target.tagName);
});
articulo.addEventListener('click', function(evento){
    //evento.currentTarget is equal to this
    console.log("Estoy en "+evento.currentTarget.tagName+", pero el evento lo lanzó "+evento.target.tagName);
});
parrafo.addEventListener('click', function(){
    console.log("Estoy en "+this.tagName);
});


//example 6
//A handler on a parent element can always get the details about where it actually happened.
seccion=document.querySelector("section#bubbling2");
seccion.addEventListener('click', function(evento){
    console.log("Estoy en "+this.tagName+", pero el evento lo lanzó "+evento.target.tagName);
});

//example 7
//stop bubbling
seccion=document.querySelector("section#stop_bubbling");
parrafo=document.querySelector("section#stop_bubbling > article > p");
parrafo.addEventListener('click', function (evento){
    evento.stopPropagation();
    console.log("Estoy en "+this.tagName+", y el evento lo lanzó "+evento.target.tagName);
});

seccion.addEventListener('click', function (evento){
    console.log("Estoy en "+this.tagName+", y el evento lo lanzó "+evento.target.tagName);
});




//removeEventListener
const y = document.getElementById("hoverPara");
y.addEventListener("mouseover", RespondMouseOver);

const z=document.getElementById("clickIt");
z.addEventListener("click", RespondClick);
 
function RespondMouseOver() {
    document.getElementById("effect").innerHTML +=
        "mouseover Event !!" + "<br>";
}
 
function RespondClick() {
    y.removeEventListener("mouseover", RespondMouseOver);
    document.getElementById("effect").innerHTML +=
        'You clicked the "click here" button. Now mouseover event doesn\'t work !!';
}
