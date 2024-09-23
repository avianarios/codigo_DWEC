"use strict";

//string conversion
//Mal por llamar cadena a un booleano
let cadena = true;
console.log (typeof cadena); // boolean

cadena = String(cadena) // now value is a string "true"
console.log (typeof cadena); // string

//Integer conversion
console.log ( "4"/"2" );    //there's no "/" operator working with strings, so it is converted into integers
console.log (12+"2"); //string concat has preference over integer addition, so the result is a string
let cadena2="123";

console.log (typeof(cadena2));
let num=Number(cadena2);
console.log (typeof(num));

//Boolean conversion
//Values that are intuitively “empty”, like 0, an empty string, null, undefined, and NaN, become false.
console.log (Boolean(NaN));
console.log (Boolean(undefined));
console.log (Boolean(0));
console.log (Boolean(""));
//any number distinct than 0 becomes true
console.log (Boolean(11123123));
console.log (Boolean(1));
