function muestraPosicion(position) {
  console.log (`latitud: ${position.coords.latitude}, longitud: ${position.coords.longitude}`);
}

function muestraError(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      console.log ("User denied the request for Geolocation.");
      break;
    case error.POSITION_UNAVAILABLE:
      console.log ("Location information is unavailable.");
      break;
    case error.TIMEOUT:
      console.log ("The request to get user location timed out.");
      break;
    default:
      console.log ("An unknown error occurred.");
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