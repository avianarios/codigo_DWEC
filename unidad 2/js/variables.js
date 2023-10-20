"use strict";

/*JavaScript es débilmente tipado, es decir
    -no es necesario declarar el tipo de las variables
    -la variable puede cambiar de tipo a lo largo de su vida (no recomendado)*/


//ejemplo del uso de variables, constantes y tipos
//las variables se deben definir con let. var está anticuado
//Es recomendable que los nombres de las variables sean lo más descriptivos posible

let numero=5,
    numero2=6;
let userName="pepe";  //stick to your decisions. be consistent
let userAdress="calle pez";
let clientSurname; //NOOOOOOOOOOOOOOOOOO
const ROJO="#FF0000"; //constante cuyo valor no cambiará nunca
const azul; //constantes cuyo valor no cambie nunca, pero aún no lo sé, lo calcularé


let numero3=numero4=7; //no recomendada
console.log("el numero 3 vale", numero3);

//Ejemplos de mala sintaxis y malas prácticas. Funciona, pero no está recomendado
let numero1=5, numero2=10, cadena="hola don pepito";
cadena="5";
const NUMERO=7, CADENA="6";
const NUMERO2=23;
let _numero=13;
let nUMERO=14;
cadena=5 //Estoy cambiándole el tipo a entero una variable llamada cadena


//Buena sintaxis
const ROJO="#FF0000";
let numero3=2,
    numero4=2,
    numero5=3;
let numero6=4;
let numero7=5;
let asignaturas=["Desarrollo web en entorno cliente", "Diseño de interfaces web"];  //matriz
let persona= {nombre:"procopio", apellido: "Maximus"};  //objeto


"use strict";

let numero=5,
    numero2=6,
    numero3=6.2;
let userName="pepe";  //stick to your decisions. be consistent
let userAdress='calle pez';
let clientSurname; //NOOOOOOOOOOOOOOOOOO
const ROJO="#FF0000"; //constante cuyo valor no cambiará nunca
const azul=""; //constantes cuyo valor no cambie nunca, pero aún no lo sé, lo calcularé
let persona= {nombre:"procopio", apellido: "Maximus"};  //objeto
let matriz=["rojo","verde","azul"];
let z;

console.log(z);
let numero5=numero4=7; //no recomendada
console.log ("el numero 3 vale", numero3);
console.log ('esto es un texto');
console.log (`La variable userName vale....\t ${userName}\n`);
console.log (persona.nombre, matriz[2]);

//variables' value are copied.
let aux="hola";
let aux2=aux;   //aux value is copied into aux2 value. Both point to a different memory location

aux2="adios";   //if I modify aux2, aux still holds its original value
console.log(aux, aux2);