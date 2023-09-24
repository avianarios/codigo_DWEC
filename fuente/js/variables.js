//puesto que vamos a usar codigo moderno, hay que especificar use strict
"use strict";

//ejemplo del uso de variables, constantes y tipos
//las variables se deben definir con let. var está anticuado
//Ejemplos de mala sintaxis. Funciona, pero no está recomendado
let numero1=5, numero2=10, cadena="hola don pepito";    //no recomendable
cadena="5";
const NUMERO=7, CADENA="6";

//Buena sintaxis
const ROJO="#FF0000";
let numero3=1,
    numero4=2,
    numero5=3;
let numero6=4;
let numero7=5;
let asignaturas=["Desarrollo web en entorno cliente", "Diseño de interfaces web"];  //matriz
let persona= {nombre:"procopio", apellido: "Maximus"};  //objeto

//salida por pantalla
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


/*Las variables en javascript son débilmente tipado, es decir, no declaro su tipo y éste puede cambiar a lo largo de la vida de la variable
Es recomendable que los nombres de las variables sean lo más descriptivos posible. El siguiente caso es una mala práctica*/

cadena=5 //Estoy cambiándole el tipo a entero una variable llamada cadena.¡¡MAL!!
console.log ("El resultado de hacer la operación numero+cadena es", numero+cadena, `que es de tipo ${typeof(numero+cadena)}` );