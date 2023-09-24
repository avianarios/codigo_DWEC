/*operands are the numbers over which the operation is performed
operators are the symbols that determines which operation is performed
Unary: operation performed over just one operand
binary: operation performed over two operands
*/

let numero=5,
    numero2=12;
numero_negativo=-numero;
console.log (numero_negativo);

//Math operators: +, -, *, /, % (remainer, resto), ** (exponentiation, exponente)
console.log (numero2%numero);
console.log (numero**2);

//string contatenation
let cadena="hola",
    cadena2="amados",
    cadena3="alumnos",
    cadena4='7',
    cadena5='10';
console.log(cadena+" "+cadena2+" "+cadena3);
console.log(5+5+'4');
console.log(+cadena4 + -cadena5);   //cadenas are converted into numbers thanks to the +/- operator

////////Voy por assignment