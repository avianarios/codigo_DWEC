let anyos=prompt("¿Cuántos años tienes?", "año");
let condicion= (anyos>=18);
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

