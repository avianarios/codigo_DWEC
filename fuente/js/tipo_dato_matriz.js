let matriz1=new Array();
let matrizFrutas=["chirimoya", "mango", "aguacate"];  //most used. Can be created empty
//an array can store different data types
let matrizMezcla=["hola", 1, 4.2, function(){console.log ("saludos");}]

//show the whole array
console.log(matrizFrutas);

//run array function
console.log (matrizMezcla[2]);

//Access to an element and replace it
matrizFrutas[2]="sandía";

//access to the last element
console.log (matrizFrutas[matrizFrutas.length-1]);
console.log (matrizFrutas[matrizFrutas.at(-1)]);    //may not work on old browsers


////////////ITERATE/////////////
//option #1. Needs to define a function
let funcion = (elemento, indice) => console.log (elemento);
matrizFrutas.forEach(funcion);

//option #2
for (let fruta of matrizFrutas){
    console.log (fruta);
}

//option #3, traditional way. Needs to get array length
for (let i=0; i<matrizFrutas.length; i++){
    console.log (matrizFrutas[i]);
}


///////////STACKS AND QUEUES//////////
//arrays can act as stacks, queues and, of course, arrays
//array as stack: pop and push
console.log(matrizFrutas.pop()); // remove "aguacate" and show matrizFrutas
console.log (matrizFrutas);
matrizFrutas.push ("piña");
console.log (matrizFrutas);

//array as a queue: shift and unshift
matrizFrutas.shift();
console.log(matrizFrutas);
matrizFrutas.unshift("guayaba");
console.log(matrizFrutas);

////////CONVERSION TO STRING//////////
console.log(matrizFrutas.toString());


/////////MULTIDIMENSIONAL ARRAYS///////
let matrizComida=[
    ["chirimoya", "mango", "aguacate", "guayaba"],
    ["tomate", "pepino", "pimiento", "berenjena"],
    ["leche", "yougur", "requesón", "queso"]
];

let matrizComida2=[
    ["chirimoya", "mango", "aguacate", "guayaba"],
    ["tomate", "pepino", "pimiento", "berenjena"],
    ["leche", "yougur", "requesón", "queso"]
];


//matrizAlimentos is a pointer to the memory space of matrizComida
let matrizAlimentos=matrizComida;

console.log (matrizComida);

for (let categoria of matrizComida){
    for (let fruta of categoria){
        console.log (fruta);
    }
}

matrizAlimentos[2][2]="puerro";
console.log (matrizComida);


//Arrays can't be compared using == nor ===
//both arrays are different objects, so == is always false.
//you have to compare them item by item
console.log (matrizComida==matrizAlimentos);    //both of them point to the same memory area
console.log (matrizComida==matrizComida2);      //both have the same elements, but are different objects, meaning each one has his own memory area

//SLICE returns subarray, but without changing original array
matrizFrutas.slice(1,2);   //starting from position 1, remove 2 elements
console.log (matrizFrutas);
let a=matrizComida[1].slice(1);  //remove from the 1st until the last element of first subarray
console.log (a);
console.log (matrizComida);


//SPLICE returns subarray, but removing it from original array
matrizFrutas.splice(1,2);   //starting from position 1, remove 2 elements
console.log (matrizFrutas);
let a=matrizComida[1].splice(1);  //remove from the 1st until the last element of first subarray
console.log (a);
console.log (matrizComida);
matrizComida[2].splice(1,3,"queso", "requesón", "yogur");   //replaces elements 1 to 3 with the following values
matrizComida[2].splice(1,0,"kéfir", "flan");   //inserts 2 elements at position 1
console.log (matrizComida);

//CONCAT creates a new array that includes values from other arrays and additional items.
console.log(matrizFrutas.concat(matrizComida[1],"otra fruta"));

//FOREACH method allows to run a function for every element of the array.
matrizFrutas.forEach((elemento,indice,matriz) =>{
    console.log (`El elemento ${elemento} está en la posición ${indice} de la matriz \'${matriz}\'`);
});

matrizComida[1].forEach(comida=>console.log(comida));

/*Less elegant and slower alternative
for (let i=0; i<matrizComida[1].lenght; i++){
    console.log (matrizComida[1][i]);
}
*/

//Get position of an element in an array
console.log (matrizFrutas.indexOf("mango"), matrizFrutas.indexOf("esta no existe"));

//returns if an element exists in an array
console.log (matrizFrutas.includes("mango"), matrizFrutas.includes("esta no existe"));

//get the position of the last element (in case they are repeated)
console.log (matrizFrutas.lastIndexOf("mango"));


let inventario=[
    { nombre: "manzanas", cantidad: 2 },
    { nombre: "plátanos", cantidad: 0 },
    { nombre: "cerezas", cantidad: 5 },
  ];

//returns the index of the firts element that matches, -1 otherwise
console.log (matrizFrutas.findIndex(elemento=>elemento=="aguacate"));

//returns the index of the last element that matches, -1 otherwise
console.log (matrizFrutas.findLastIndex(elemento=>elemento=="aguacate"));

//returns the first element that matches, undefined otherwise
console.log (matrizFrutas.find(elemento=>elemento=="aguacate"));

//find object and get one of its properties
let elemento=inventario.find(elemento=>elemento.nombre=="manzanas");
(elemento!==undefined) ? 
    console.log (`he encontrado ${elemento.cantidad} unidades`):
    console.log ("no hay");

//Alternative to previous line: define function outside
let esFruta=(fruta)=> fruta.nombre=="cerezas"; //arrow function
console.log (inventario.find(esFruta));

//Filter returns an array of all matching elements
let elementos = inventario.filter(item => item.cantidad < 3);
