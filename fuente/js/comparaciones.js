let num1=3,
    num2=num3=5;

let cad1="hola",
    cad2="Hola",
    cad3="holas";

//unicode is used to determine the order of the letters
console.log( num1>num2 );
console.log( num2==num3 );
console.log( num1!=num2 );

console.log( cad1>cad2 );
console.log( cad1==cad2 );
console.log( cad1=cad2 );

console.log( "4">num1 );

/*Equality cannot differentiate 0 or empty string from false 
due to the fact that empty string, and false, are converted to zero*/
console.log( 0==false );
console.log( ""==false );

/*therefore, if differentiate is needed, strict equality must be used
strict equality do not convert any data type so, if they are not the same
type, it returns false*/
console.log( 0===false );
console.log( ""===false );

//be carefull comparing with a variable that could take null or undefined value
console.log( a>4 );
let a=3;
console.log( a>4 );