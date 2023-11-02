
  
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