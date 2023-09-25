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