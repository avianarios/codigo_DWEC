let usuario={
    id:"1", nombre:"pepe", edad:30
};


//accessing object properties
console.log(usuario.nombre);    //returns value
console.log (usuario.noExiste);    //returns undefined, but no error
console.log ("hola" in usuario);     //returns false, but no error
console.log ("edad" in usuario);   //returns true

//assigning values
usuario.esAdmin=false;
console.log(usuario);

//removing properties
delete(usuario.edad);
console.log(usuario);

//brackets allows to calculate in real-time the key 
let llave=prompt("¿Qué quieres saber del usuario?");  //needs to be a valid key name
console.log(usuario[llave]);    //llave=edad or nombre...

//another example of brackets
let llave2=prompt("¿Qué elemento quieres?");
let cantidad={
    [llave2]: 5
}
console.log (cantidad);
console.log (cantidad[llave2]);

//create users using property value shorthand
function makeUser(name, age){
    return{
        name: name,
        age: age,
    };
}

let user=makeUser("paco", 40);
console.log (user);

//another way of doing the same
//same as before but function as arrow
//as properties have the same name as variables, they can be removed
//here they have been removed from arrow, but can be done in traditional funcion as well
let creaUsuario=(name,age)=>(
    {name, age}
);

user=creaUsuario("pepe", 30);
console.log (user);

//iterating through objects
for (let llave in usuario){
    console.log (usuario.llave);  //it doesn't work
    console.log (usuario[llave]);  //it works
}

//Comparison
//as it occurs with arrays, two objects can't be compared with ==
let objeto1=objeto2={
    nombre:"pepe",
    profesion: "fontanero"
};

let objeto3={
    nombre:"pepe",
    profesion: "fontanero"
};

//object references and copy
let aux="hola";
let aux2=aux;   //aux value is copied into aux2 value. Both point to a different memory location

aux2="adios";   //if I modify aux2, aux still holds its original value
console.log(aux, aux2);

//when copying objects (array are objects as well), they both point to the same memory location
let usuario={ nombre:"pepe" };
let usuario2=usuario;   //usuario2 and usuario point to the same memory location. they are the same object
let usuario3={ nombre:"pepe" };

usuario.nombre="fede";
console.log(usuario2.nombre);

//Objects comparison with == or === is tricky
console.log (objeto1==objeto2); //true. They are both the same object
console.log (objeto1==objeto3); //false. They are different objects (although they have the same information)


//Adding and removing properties
persona1={
    nombre:"pepe",
    profesion: "fontanero",
    medidas: {
        altura:180,
        pecho: 100,
    },
};

persona1.edad=37;
delete(persona1.medidas);
console.log (persona1);


//Cloning and copying
//Object.assign copy one ore more objects into another (to create two different objects with the same values)
let objeto1={
    nombre:"pepe",
    profesion: "fontanero"
};
objeto1.edad=33;

let objeto2={
    nacionalidad:"Española"
}

let objeto4=(Object.assign({}, objeto1, objeto2));  //copy objeto1 and objeto2 into objeto4. Overwrite if exist
console.log(objeto4);

//nested cloning and copying. structuredclone allows objects inside objects to be copied as well
//should not be used, object inside object would be copied by reference
persona1={
    nombre:"pepe",
    profesion: "fontanero",
    medidas: {
        altura:180,
        pecho: 100,
    }
};

let persona2=Object.assign({}, persona);
persona2.nombre="juan";
persona1.medidas.altura=170;
console.log(persona1, persona2);
persona2=structuredClone(persona1);   //persona2 is now copied by value, not by reference
persona1.medidas.altura=200;
console.log(persona1.medidas.altura, persona2.medidas.altura);



//THIS usage. Example 1
usuario={nombre:"pepe"}
usuario2={nombre:"juan"}

//create a function that makes usage of this (Arrow functions don't work here)
diHola=function (){
    console.log(this.nombre);
}

//assign function to object property
usuario.saluda=diHola;
usuario2.saluda=diHola;

usuario.saluda();
usuario2.saluda();


//THIS only works with methods and ref1 is not
"use strict";
let persona={
      nombre:"pepe",
      ref1: this,
      ref2(){
        return this;
      }
}

console.log(persona.ref1.nombre);    //doesn't work. This is only for methods
console.log(persona.ref2().nombre);  //works

/* 
function creaUsuario(){
  return {
      nombre:"pepe",
      ref:this
  };
}    
let usuario=creaUsuario();
 console.log (usuario.ref.nombre);*/


//Usage of "this"
persona1={
    nombre:"pepe",
    profesion: "fontanero",
    medidas: {
        altura:180,
        pecho: 100,
    },
    buenosDias(){
      console.log (`yo, ${this.nombre}, te doy los buenos días`);
    }
};

persona1.edad=37;
persona1.buenasTardes=function(){
      console.log (`yo, ${this.nombre}, te doy las buenas tardes`);
}

persona1.buenasNoches=()=>{     //it doesn't work. It's an arrow function
      console.log (`yo, ${this.nombre}, te doy las buenas noches`);
}

delete(persona1.medidas);
console.log (persona1);
persona1.buenosDias();
persona1.buenasTardes();
persona1.buenasNoches();

//Creating objects with New
function perro(nombre, raza) {
    this.nombre = nombre;
    this.raza = raza;
}

let perro1=new Perro ("pirata","beagle");
console.log (perro1);


//?. special syntax construct
//it's been recently added. Allows to return undefined instead of error ir a property doesn't exist.
//it applies only to declared variables
let user = {}; // a user without properties
//console.log(user.address.street); // Throws an error

//could be solved by checking before with ? or &&. Not very elegant
console.log(user.address ? user.address.street : undefined);
console.log( user.address && user.address.street && user.address.street.name ); // undefined (no error)

//The optional chaining ?. stops the evaluation if the value before ?. is undefined or null and returns undefined.
let user = {}; // user has no address
console.log( user?.address?.street ); // returns undefined (no error)

/* ?. should be used only to check properties that it’s fine for them not to exists.
Thus, if some object must exist, but a property is optional, then it should be written object.property?.subproperty, but not object?.property?.subproperty
because, if object happens to be undefined, we’ll see a programming error about it and fix it. Otherwise, if we overuse ?., coding errors can be silenced where not appropriate, and become more difficult to debug.*/


//?.() works with methods
let userAdmin = {
    isAdmin() {
      console.log("I am admin");
    }
  };
  
let userGuest = {};
userAdmin.isAdmin?.(); // I am admin
//userGuest.isAdmin(); // throws an error (method doesn't exist)
userGuest.isAdmin?.(); // nothing happens (although no such method)


//?.[] allows to safely read a property from an object that may not exist
let clave = "nombre";

let personal1 = {
  nombre: "Felipe"
};

let personal2 = null;

console.log( personal1?.[clave] ); // Felipe
//console.log( personal2[clave] ); // throws an error as it doesn't exist
console.log( personal2?.[clave] ); // undefined