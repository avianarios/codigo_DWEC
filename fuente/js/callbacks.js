///////////CALLBACK FUNCTIONS (funciones de retorno)//////////////
function ask(question, yes, no) {
    if (confirm(question)) yes()  //confirm shows up a window asking accept or cancel
    else no();
  }
  
  //showOk and showCancel are called callback functions
  function showOk() {
    console.log( "You agreed." );
  }
  
  function showCancel() {
    console.log( "You canceled the execution." );
  }
  
  // usage: functions showOk, showCancel are passed as arguments to ask
  ask("Do you agree?", showOk, showCancel);
  
  
  
  //Another way to express the last code (not recommended tough)
  function pregunta(question, yes, no) {
    if (confirm(question)) yes()  //confirm shows up a window asking accept or cancel
    else no();
  }
  
  pregunta(
    "Agree?",
    function() {console.log("estás de acuerdo");},
    function () { console.log ("no estás de acuerdo");}
  );
  
  
  //yet another callback example
  function solicitudServidor(consulta, callback){
    setTimeout(function(){
      var respuesta = consulta + "lleno!";
      callback(respuesta);
    },5000);
  }
  
  function obtenerResultados(resultados){
    console.log("Respuesta del servidor: " + resultados);
  }
  
  solicitudServidor("El vaso está medio  ", obtenerResultados);
  
  //Resultado en la consola luego de 5 segundos:
  // El vaso está medio lleno!