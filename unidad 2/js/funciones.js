"use strict";
///////////LOCAL AND GLOBAL VARIABLES/////////////
//use as few global variables as possible
/*Example of how to use global and local variables*/
let mensaje1="hola don pepito",
    mensaje2="hola don josé";
function muestraMensaje() {
    let mensaje1 = "Saludos desde dentro de la función!"; // If a local variable with the same name is defined, global variable can't be used
    console.log (mensaje1, mensaje2);
    mensaje2="cambio el mensaje dentro de la función";  //a global variable can be accessed and modified inside a function
  }
  
  console.log ("muestro variables globales antes de llamar a la función:", mensaje1, mensaje2); //showing global message variable 
  muestraMensaje();
  console.log ("muestro variables globales después de llamar a la función:", mensaje1, mensaje2); //showing global message variable 
  

///////////ARGUMENTS/////////////
/*Example of how to pass argument to a function
how global variables with the same name that arguments are not modified*/
function muestraCliente(nombre, apellido) {
    nombre="el inconfundible "+nombre;  //an argument is a copy of a global variable. Modifying it don't change global variable
    console.log(nombre+" "+apellido);
}

let nombre="Perico";
muestraCliente(nombre,"Pérez");
console.log(nombre);  //nombre variable won't be modified


/*how to create a default value when an argument is not provided. Is a feature of modern JavaScript*/
function muestraCliente2(nombre, apellido="sin apellido") { //default value for arguments
    nombre="el inconfundible "+nombre;
    console.log(nombre+" "+apellido);
}

let nombres=["procopio","patrocinio"];

for (let i=0; i<nombres.length; i++)
  muestraCliente2(nombres[i]);    //when missing an argument, its default value is used (defined in the function)


/*It is also possible to provide a function as a default value for a parameter*/
function muestraCliente3(nombre, apellido=buscaApellido(nombre)) { //default value for arguments
    nombre="el inconfundible "+nombre;
    console.log(nombre+" "+apellido);
}

function buscaApellido(nombreBuscado){
    let nombres=[{nombre:"procopio",apellido:"máximo"},
                {nombre:"patrocinio",apellido:"Sánchez"}];
    for (let i=0; i<nombres.length; i++){
        if (nombreBuscado==nombres[i].nombre){
            return nombres[i].apellido;
        }
    }
}

muestraCliente3("procopio");

///////////RETURNING VALUES/////////////
let usuario={nombre:"pepe",edad:"17"};
function compruebaMayoriaEdad(edad) {
    if (edad >= 18) {
      return true;
    } else {
      return false;
    }

    //alternative #1 (BEST)
    //return (usuario.edad>=18);

    //alternative #2
    //(usuario.edad>=18) ? return true : return false;
}

function garantizaAcceso(usuario){
  if (compruebaMayoriaEdad(usuario)){
   return(`acceso garantizado a ${usuario.nombre}`);
 }else{
   return(`acceso denegado a ${usuario.nombre}`);
 }

 //alternative
 /*let accion;
 compruebaMayoriaEdad(usuario) ? accion="garantizado" : accion="denegado";
 return (`Acceso a ${usuario.nombre} ${accion}`);*/
}

console.log(garantizaAcceso(usuario));


////////////FUNCTIONS AS EXPRESSIONS////////////////
//a function can be seen as an expression. 
let showMessage = function(){
  console.log("hola");
};
showMessage();


//as a function can be assigned to a variable, it can be copied
let diHola=function () {   //no need to specify function name
  console.log( "Hola" );
};  //semicolon at the end. It's an expression assigned to a variable
let func=diHola;  //no parenthesis when assigning, they are variables
func(); 
diHola(); 

//Another example
// program to find the square of a number
// function is declared inside the variable
let x = function (num) { return num * num };
console.log(x(4));

// function can be used as variable value for other variables
let y = x(3);
console.log(y);


//difference num 1 between function declaration and function expressions
//Function declaration (declaración de función) can be used anywhere even in code declared before it was created
//Function expressions (expresión de función) can't be used in code until the point they are created
saluda("Procopio");
function saluda(nombre){
  console.log("hola "+nombre);
}

diHola("Higinio");
let diHola=function(nombre){
  console.log ("hola "+nombre);
};


//difference num 2 between function declaration and function expressions
//when using strict mode...
//function expressions (expresión de función) can be used even outside the scope they were declared at
//function declaration (declaración de función) can only be used within the scope they were declared at
"use strict"
if (1){
  function saluda(nombre){
    console.log("hola "+nombre);
  }
}else{
  function despidete(nombre){
    console.log("adiós "+nombre);
  }
}
saluda("pepe");



"use strict";
//this is the key. I define the variable outside the scope and, assign to the function inside
let saluda, despidete2;
if (1){
  saluda=function(nombre){
    console.log("hola "+nombre);
  }
}else{
  despidete2=function(nombre){
    console.log("adiós "+nombre);
  }
}

saluda("pepe");

////////////ARROW FUNCTIONS//////////
//similar to function expressions, but specifying the returning value
let suma=(a,b) => a+b;
let saluda=(nombre)=> console.log("yo te saludo "+nombre);
let despidete=()=>console.log("adiós");

let edad=prompt("¿cuál es tu edad?");
let vasPreso=(edad<=18) ?
  () => console.log("vas preso") :  //no arguments, so empty parenthesis must be present
  () => console.log("al correccional");

vasPreso(edad);

//for multiline functions, curly brace and return statement must be used
let resta=(a,b)=>{
  let resultado=a-b;
  return (resultado); //could've been done in a single line, but for demonstration purposes
}

//curly brace are not needed
let suma=(a,b)=>{
  return (a+b); //could've been done in a single line, but for demonstration purposes
}

//same as before but more concise
let suma=(a,b)=>(a+b);

console.log (resta(4,2));
console.log(suma(4,2));


//Recursive functions
//Two ways: traditional
function pow(x, n) {
  let result = 1;
  // multiply result by x n times in the loop
  for (let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
}

alert( pow(2, 3) ); // 8

//or recursive 
//Two conditions:
//1.- there must be a base case that finishes recursion
//2.- there must be a way of dividing problems in subproblems
//Recursive functions call themselves. Not all problems can be expressed as recursive functions
function pow(x, n) {
  if (n == 1) { //base case
    return x;
  } else {
    return x * pow(x, n - 1); //breaking down in subproblems
  }
}

console.log( pow(2, 3) ); // 8


//Rest parameters
//allows to pass an undetermined number or parameters as an array. Must be placed at the end
function sumaTodo(num1, num2, ...numeros){
  let acumulado=num1+num2;
  for (let num of numeros){
    acumulado+=num;
  }
  return acumulado;
}
console.log (sumaTodo(1,2,3,4,5,6,7,8));

//palabras is an array containing all elements passed as arguments
function concatena (...palabras) {
  let resultado="";
  for (let palabra of palabras){
    resultado+=palabra;
  }
  return resultado;
}

/*arrow function 
let concatena2 = (...palabras) => {
  let resultado="";
  for (let palabra of palabras){
    resultado+=palabra;
  }
  return resultado;
}*/

console.log (concatena("a", "b", "c", "d"));


