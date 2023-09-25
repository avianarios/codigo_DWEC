"use strict";

/*operands are the numbers over which the operation is performed
operators are the symbols that determines which operation is performed
Unary: operation performed over just one operand
binary: operation performed over two operands
*/

//string contatenation
let cadena="hola",
    cadena2="amados",
    cadena3="alumnos",
    cadena4='7',
    cadena5='10';
console.log(cadena+" "+cadena2+" "+cadena3);
console.log(5+5+'4');

//Math operators: +, -, *, /, % (remainer, resto), ** (exponentiation, exponente)
let numero=5,
    numero2=12;
console.log (numero2%numero);
console.log (numero**2);
console.log(+cadena4 + -cadena5);   //cadenas are converted into numbers thanks to the +/- operator
numero_negativo=-numero;
console.log (numero_negativo);

//Be careful with operators precedence. It may change the result of the operation
let x=2*2+1;
console.log(x);
console.log(3+10*2, 3+(10*2), (3+10)*2));

//Assignment
//= is also an operator, returning a value. Expressions are evaluated from right to left, taking into account operator precedence
let a=4;
let b=5;
let c=4-(a=b+1);    //confusing syntax. Not recommended
let d=a=b=4+3;
console.log (c, d);

//Modify-in-place
let n=5;
n=n+5;
console.log(n);
n+=5;
console.log(n);
n*=2;
console.log(n);
n++;
console.log(n);
n--;
console.log(n);
//if the value of n is not used, it is the same doing n-- that --n

//if the value of n is used...
c=n--;  //first n value is returned and then n value is decremented
console.log(c);
c=--n;  //first n value is decremented and then n value is returned
console.log(c);
