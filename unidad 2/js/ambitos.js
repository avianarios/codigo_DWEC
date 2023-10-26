//SCOPE
//"use strict" is needed. Otherwise, some of them would work, but they wouldn't have to
//example 1
let nombre= "Máximo";
function saluda() {
  console.log("Hola, " + nombre);
}
nombre="Procopio";
saluda(); //Procopio

//example 2
function creaUsuario() {
  let nombre= "Pepe";

  return function() {
    return nombre;
  };
}

let nombre = "Manolo";
let usuario = creaUsuario();  // crea una función
usuario(); // Pepe. Es el valor de la variable interna

//Example 3
function persona(aux){
  let nombre=aux;
  return function(){
    return nombre;
  }
}

let persona1=persona("pepe");
let persona2=persona("manolo");
//same variable, different value
console.log(persona1());
console.log(persona2());


//Example 4
let frase = "hola";

if (1) {
  let usuario = "Patrocinio";
  function saluda() {
    console.log(`${frase}, ${usuario}`);
  }
}

saluda();   //Saluda is unknown outside the "if" block
