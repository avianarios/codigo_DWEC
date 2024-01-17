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
let boton=document.querySelector("#formulario_contacto button");
boton.addEventListener("click", saluda);

let saluda=()=> { console.log('¡Saludos, criatura!'); };
