
////////RECURSION//////////
//Two ways of creating a function: traditional
function pow(x, n) {
    let result = 1;
    // multiply result by x n times in the loop
    for (let i = 0; i < n; i++) {
      result *= x;
    }
    return result;
  }
  console.log( pow(2, 3) ); // 8
  
  //or recursive 
  //Not all problems can be expressed as recursive functions. Two conditions must be satisfied:
  //1.- there must be a base case that finishes recursion
  //2.- there must be a way of dividing problems in subproblems
  //Recursive functions call themselves
  function pow(x, n) {
    if (n == 1) { //base case
      return x;
    } else {
      return x * pow(x, n - 1); //breaking down in subproblems
    }
  }
  console.log( pow(2, 3) ); // 8
  
  
  ///////Rest parameters////////
  //allows to pass an undetermined number or parameters as an array. Must be placed at the end
  function sumaTodo(num1, num2, ...numeros){
    let acumulado=num1+num2;
    for (let num of numeros){
      acumulado+=num;
    }
    return acumulado;
  }
  console.log (sumaTodo(1,2,3,4,5,6,7,8));
  
  //palabras is an array containing all elements passed as arguments
  function concatena (...palabras) {
    let resultado="";
    for (let palabra of palabras){
      resultado+=palabra;
    }
    return resultado;
  }
  
  /*arrow function 
  let concatena2 = (...palabras) => {
    let resultado="";
    for (let palabra of palabras){
      resultado+=palabra;
    }
    return resultado;
  }*/
  
  console.log (concatena("a", "b", "c", "d"));
  
  /////////Autoexecutable functions///////
  //executed once, then can't be called again
  //option 1
  (function() { console.log("hola mundo") }) ();
  
  //option 2
  ( function(quien){
    console.log("hola " + quien);
  })("mundo");
  
  
  /////////Nested functions/////////////
  //a function created within another function
  //inner function is invisible outside and can use outer variables
  function saludador(quien){
    return function(){ //acá se crea la funcion anónima a retornar. No hace falta nombre
      console.log("hola " + quien);
    }
  }
  var saluda = saludador("mundo");
  saluda(); //hola mundo
  
  
  function creaUsuario(quien){
    let nombre; //inner variables can't be accessed outside function
    return function usu(){  //need a name to create properties
      nombre=quien;
      console.log("Usuario "+nombre+" creado");
    };
    usu.apellido="perez";
  }
  
  let usua=creaUsuario("pepe");
  usua.apellido="gonzález";
  console.log (usua.apellido);  //gonzález
  console.log (usua.nombre);  //undefined
  usua();
  
  
  
  ///////////callback functions////////////
  //a callback function is the one which is passed as argument to another function to be called
  function calculate(a, b, fn) {
    var c = a + b + fn(a, b);
    return c;
  }
  
  function sum(a, b) {
    return a + b;
  }
  
  function product(a, b) {
    return a * b;
  }
  
  console.log(calculate(10, 20, sum));  //60
  console.log(calculate(10, 20, product));  //230
  
  
  
  
  