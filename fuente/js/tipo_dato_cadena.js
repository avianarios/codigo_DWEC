let single = 'single-quoted';
let double = "double-quoted";
let backticks = `backticks`;

let suma=1+2;
console.log (`suma vale ${suma}`);

let lista= `Lista de compra:
    *Pepinillos
    *Tomates
    *Calabacines`;  //allowed

let lista2= "Lista de compra:
    *Pepinillos
    *Tomates
    *Calabacines";  //not allowed

let cad1="Adiós";
let cad2="Ho\nla"; // /n is new line while /t is tab
//quotes need to be protected in order to print them inside the message
//if they are the same to quote the message
let cad3="SOME CHARACTERS need to be protected in order to be printed: \" \\";  
    
console.log (cad1.length);
console.log (cad1[3], cad1.at(3));  //two ways of accessing 3rd character
console.log (cad1.at(-1), cad1[cad1.length-1]);  //two ways of accessing the last character

//iterate
for (let letra of cad1){
    console.log("letra");
}

//strings can't be modified
cad1[0]="a";

//changing case
console.log(cad1.toUpperCase(), cad1.toLowerCase()
);

//looking for substrings
console.log(cad3.indexOf(buscar)); //look for occurrences starting at position 1 until the end
console.log(cad3.indexOf(buscar, 20)); //look for occurrences starting at position 20 until the end
console.log(cad3.lastIndexOf(buscar));  //look for occurrences starting at the last position

//indexof returns -1 if not found
if (cad3.indexOf(buscar) != -1){
  console.log(`cadena ${buscar} encontrada`);
}

//return true if found
console.log (cad3.includes("ed"), cad3.includes("esto no está"));
//no need for comments...
console.log(cad3.startsWith("SOME"), cad3.endsWith("hola"));

//getting a substring
console.log (cad3.slice(2,10));     //returns substring from position 2 to 9
console.log (cad3.slice(15, cad3.length-10));    //returns substring from position 15 until 11 to the end
console.log (cad3.slice(25));  //returns substring from position 25 to the end
console.log (cad3.slice(-10,-5));  //returns substring from position 10 from the right to 5th to the right

//returns an array of substrings separated by the argument. It doesn't change original
console.log (cad3.splice(" "));

//comparing strings
//lowercase first
//JavaScript encodes in UTF-16. each character has a numeric code that can be got with str.codePointAt(pos)
console.log ("texto".localeCompare("texto2"));