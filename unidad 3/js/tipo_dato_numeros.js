"use sctrict";

//Very large numbers can be defined
let billon=1e12;
let millon=1e6;
let microsegundo=1e-6;

//Define octal, hexadecimal or binary numbers 
let decimal=15;
let binario=0b1111;
let octal=0o17;
let hexadecimal=0xf;
console.log(billon);
console.log (decimal==binario, binario==octal, octal==hexadecimal);


//Numbers can be converted to string
//"toString" is equal to "String" except when "null" is converted

let a=(decimal.toString());  //first way: using toString method
let b=String(decimal);   //second way: calling String function
console.log (typeof(a), typeof(b), a==b);

let nulo=null;
console.log (String(nulo));
console.log (nulo.toString());  //will fail


//MATH is an object for number type, that has methods and properties related with mathematics
let real=3.193;
let real2=3.6;
//floor roudns down, ceil rounds up, round rounds to the next integer and trunc removes anything beyond decimal point
console.log (Math.floor(real), Math.ceil(real), Math.round(real), Math.trunc(real));
console.log (Math.floor(real2), Math.ceil(real2), Math.round(real2), Math.trunc(real2));


//IMPRECISE CALCULATIONS
//Javascript uses IEEE754 DP to storage real numbers: 1 bit for sign, 52 for number and 11 for exponent
//some numbers don't have enough bits while others have infinite decimals

console.log (1e500); //not enough room for storing such a big number. Returns Infinity

let sum = 0.1 + 0.2;  //0.1 and 0.2 can't be stored precisely
console.log ( sum == 0.3 ); // false

//toFixed rounds the result using n digits after the point and returns it as a string
console.log( sum.toFixed(2)==0.3 ); // true 

console.log(9999999999999999);  //returns 10000000000000000

//special numbers: Infinity, -Infinity and NaN

//isNaN converts argument to a number and returns true if the argument is not a number
console.log (isNaN(decimal), 
            isNaN(Infinity), 
            isNaN(NaN), 
            isNaN(null), 
            isNaN("Pepito piscinas"));

//Math.isNaN is a more strict version of isNaN(argument). 
//It checks if its argument belongs to number, but it doesn't convert it to number
console.log (Number.isNaN(decimal),
            Number.isNaN(Infinity),
            Number.isNaN(NaN),
            Number.isNaN("null"),
            Number.isNaN("pepito piscinas"));


//isFinite converts to number and returns true if it's a regular number
console.log(isFinite(decimal),
            isFinite(Infinity), 
            isFinite(NaN), 
            isFinite(null), 
            isFinite("Pepito piscinas"));

//Math.isFinite is a more strict version of isFinite(argument). 
//It checks if its argument belongs to number, but it doesn't convert to number
console.log(Number.isFinite(decimal),
            Number.isFinite(Infinity), 
            Number.isFinite(NaN), 
            Number.isFinite(null), 
            Number.isFinite("Pepito piscinas"));

            
//Force input to be a number
let num;
do{
    num = +prompt("Enter a number", '');    //+converts what prompt reads, a string, to a number
}while (isNaN(num));


//parseInt and parseFloat gets a string and extract a number
console.log(parseInt('100px'), // 100
            parseFloat('12.5em'), // 12.5
            parseInt('a12'), // NaN
            parseInt('12.5'), //12
            parseInt('0xff',16) //base 16
            );

//

//returns a number between 0 and 1 (not included)
console.log(Math.random());

//Returns maximum and minimum number and a number raised to another
console.log (Math.max(3, 7,-10, 1.2));
console.log (Math.min(1,3,12, 0.2));
console.log (Math.pow(2,5));
