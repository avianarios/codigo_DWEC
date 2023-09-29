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
function compruebaEdad(edad) {
    if (edad >= 18) {
      return true;
    } else {
      return false;
    }
  }

function consultaEdad(nombre)) {
    if ( !compruebaEdad(usuario.edad) ) {
      return;       //exits the function returning "undefined". possible but not recommended. Better if, else
    }
    console.log("Access granted to "+nombre);

    /*better code:
    if ( compruebaEdad(nombre) ) {
        console.log("Access granted");
    }else{
        console.log("Access denied");
    }
    */
}

consultaEdad(usuario.nombre);
