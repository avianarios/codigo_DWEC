//////////////////////////
////getCurrentPosition////
//////////////////////////
//returns geoLocationPosition object wich has two properties: coords and timestamp
//geoLocationPosition.coords returns a geoLocationCoordinates object. Its two most used properties ar latitude and longitude
//arguments: 1: mantadory, success callback, 2: optional, error callback, 3: optional, options
//example 1, just success function
if (navigator.geolocation) {    //should be checked 
    navigator.geolocation.getCurrentPosition((posicion) => {
        console.log(posicion.coords.latitude, posicion.coords.longitude);
      });
  } else { 
    console.log ("Su navegador no soporta geolocalización");
}

//example 2, all arguments, error checking
function muestraPosicion(position) {
    console.log (`latitud: ${position.coords.latitude}, longitud: ${position.coords.longitude}`);
}

function muestraError(error) {
    switch(error.code) {
      case error.PERMISSION_DENIED:
        console.log ("El usuario denegó la petición de localización");
        break;
      case error.POSITION_UNAVAILABLE:
        console.log ("La información sobre localización no está disponible");
        break;
      case error.TIMEOUT:
        console.log ("Se agotó el tiempo de la petición");
        break;
      default: //error.UNKNOWN_ERROR
        console.log ("Ocurrió un error desconocido");
    }
  }
  
const opciones = {
    enableHighAccuracy: true,
    maximumAge: 30000,
    timeout: 27000,
};

if (navigator.geolocation) {    //should be checked 
    navigator.geolocation.getCurrentPosition(muestraPosicion, muestraError, opciones);
    //navigator.geolocation.getCurrentPosition(muestraPosicion);
  } else { 
    console.log ("Su navegador no soporta geolocalización");
}




/////////////////////
////watchPosition////
/////////////////////
//provides updated (if the device is moving) or more accurate position information (getCurrentPosition provides quick unaccurate info)
const watchID = navigator.geolocation.watchPosition((position) => {
    console.log(position.coords.latitude, position.coords.longitude);
});
  
///////////////////////////
////geoLocationPosition////
///////////////////////////
//object returned by getCurrentPosition
//has two properties: coords and timestamp
//geoLocationPosition.coords returns an geoLocationCoordinates object
if (navigator.geolocation) {    //should be checked 
    navigator.geolocation.getCurrentPosition((posicion) => {
        console.log (posicion.coords.latitude,
                        posicion.coords.longitude,
                        posicion.coords.altitude,
                        posicion.coords.accuracy,
                        posicion.coords.altitudeAccuracy,
                        posicion.coords.heading,
                        posicion.coords.speed,
                        posicion.timestamp);    //Unix time: miliseconds since 1/1/1970
      });
  } else { 
    console.log ("Su navegador no soporta geolocalización");
}