//shows up a modal window with the message and waits for the user to press ok
alert ("esto es un mensaje");

//shows up a modal window asking the user for a value
let numero=prompt("dame un número", "numero");

//shows a message at the console
console.log("esto es un texto");

//shows up a modal window asking the user for confirmation
let respuesta=confirm("¿acepta?"); 

//the following variables are known due to an early import of variables.js at index.html
console.log ( numero1 + cadena );
console.log ( `La suma de ${numero1} y ${numero2} da ${numero1+numero2}` );
console.log ( numero1+numero2 );
console.log( asignaturas[1] );
console.log( persona.nombre )
console.log ( typeof(numero1), typeof(cadena), typeof(asignaturas), typeof(persona), typeof( constante) );
console.log ( 4/"2" );

//Mal uso de la constante
const NOMBRE = prompt("Dígame su nombre");
console.log (`Encantado de saludarle, ${NOMBRE}, tengo entendido que tiene ${prompt ("dígame su edad")} años`);
alert (`Buenos días ${NOMBRE}`);

console.log ("El resultado de hacer la operación numero+cadena es", numero+cadena, `que es de tipo ${typeof(numero+cadena)}` );
console.log (`El resultado de hacer la operación numero+NUMERO es ${numero+NUMERO}, que es de tipo ${typeof(numero+NUMERO)}`);
console.log ("El resultado de hacer la operación numero+cadena es", numero+cadena, `que es de tipo ${typeof(numero+cadena)}` );