"use strict";

/*JavaScript es débilmente tipado, es decir
    -no es necesario declarar el tipo de las variables
    -la variable puede cambiar de tipo a lo largo de su vida (no recomendado)*/

//ejemplo del uso de variables, constantes y tipos
//las variables se deben definir con let. var está anticuado
//Es recomendable que los nombres de las variables sean lo más descriptivos posible

//Ejemplos de mala sintaxis y malas prácticas. Funciona, pero no está recomendado
let numero1=5, numero2=10, cadena="hola don pepito";
cadena="5";
const NUMERO2=23;   //only recommended when NUMERO2 is not changing ever
let _numero=13;
let nUMERO=14;
cadena=5 //Estoy cambiándole el tipo a entero una variable llamada cadena

let userName="pepe";  //stick to your decisions. be consistent
let userAdress="calle pez";
let clientSurname; //Should follown the former naming schema: userSurname

//Buena sintaxis
const ROJO="#FF0000"; //constante cuyo valor no cambiará nunca
const azul=""; //constantes cuyo valor no cambie nunca, pero aún no lo sé, lo calcularé
let numero3=2,
    numero4=2,
    numero5=3;
let numero6=4;
let numero7=5;

//variables' value are copied.
let aux="hola";
let aux2=aux;   //aux value is copied into aux2 value. Both point to a different memory location

aux2="adios";   //if I modify aux2, aux still holds its original value
console.log(aux, aux2);

//printing variables
console.log ('esto es un texto');
console.log (`La variable userName vale....\t ${userName}\n`);
console.log("el numero vale", numero);