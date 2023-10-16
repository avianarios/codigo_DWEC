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
for (llave in usuario){
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

console.log (objeto1==objeto2); //true. They are both the same object
console.log (objeto1==objeto3); //false. They are different objects (although they have the same information)

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

//nested cloning and copying
objeto1={
    nombre:"pepe",
    profesion: "fontanero",
    medidas={
        alto:180,
        pecho: 100,
        cadera: 80,
        cintura: 100
    };
};

