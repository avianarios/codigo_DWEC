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
    ["chirimoya", "mango", "aguacate"],
    ["tomate", "pepino", "pimiento"],
    ["leche", "yougur", "requesón"]
];

let matrizComida2=[
    ["chirimoya", "mango", "aguacate"],
    ["tomate", "pepino", "pimiento"],
    ["leche", "yougur", "requesón"]
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
console.log (matrizComida==matrizComida2);      //each one has his own memory area


//remove elements
matrizFrutas.splice(1,2);   //starting from position 1, remove 2 elements
console.log (matrizFrutas);
matrizComida[1].splice(1,1);
console.log (matrizComida);