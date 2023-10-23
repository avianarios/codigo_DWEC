let anyos=prompt("¿Cuántos años tienes?", "año");
let condicion= (anyos>=18);

//if
if (condicion){
    console.log("ya puedes ir a la cárcel, ten cuidado");
}else{
    console.log("aún eres menor de edad");
}


if ( anyos>18 ){
    console.log("ya puedes ir a la cárcel");
}else{
    if (anyos<10){
        console.log("Te falta mucho aún");
    }else{
        console.log("Ya te falta menos");
    }
}


/*? operator works as an if. It is shorter and appealing, but less readable.
 Be carefull, it's not very intuitive when nesting*/

//Equivalent to the first if
( anyos>18 ) ? console.log("eres mayor de edad") : console.log("eres menor de edad");

//Equivalent to the second if
( anyos>18 ) ? console.log("eres mayor de edad") :
    (anyos<10) ? console.log("te falta mucho aún") :
        console.log("Ya te falta menos");


//switch
//this is the only structure that needs break statement
let nota = Number(prompt("¿Qué nota sacaste?",0));
//be careful with variable types. They have to match or comparison won't work

switch (nota) {
  case 0:
  case 1:
  case 2:
  case 3:
  case 4:
    console.log( 'Tienes que estudiar más' );
    break;
  case 5:
    console.log( 'Por los pelos' );
    break;
  case 6:
  case 7:
  case 8:
    console.log( 'Bien' );
    break;
  default:
    console.log( "¡Excelente!" );
}

//variable scope
if (1){
  let cadena="hola";
  console.log(cadena);  //prints hola
}
console.log (cadena);   //error! cadena is not defined