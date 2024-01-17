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


    -Event handler properties. Not recommended
        let boton=document.querySelector("#formulario_contacto button");
        boton.onclick=function (){ console.log ("¡Saludos, criatura!"); };
        

        let boton=document.querySelector("button");
        let saludar = () => console.log ("¡Saludos, criatura!");
        boton.setAttribute("onclick", "saludar");

    -Using event listeners. RECOMMENDED
        let boton=document.querySelector("#formulario_contacto button");
        boton.addEventListener("click", function (){        //it's click, not onclick
            console.log('¡Saludos, criatura!');
        });
*/



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

boton.addEventListener("click", cambiaTexto);
boton.addEventListener("click", saluda);

//example 2
let button = document.querySelector("#cambiaClase");
const toggle = () => button.classList.toggle("rojo");
button.addEventListener("click", toggle);         // Add/remove red CSS


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
