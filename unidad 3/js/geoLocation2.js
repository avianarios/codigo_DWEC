//Ejemplo de geolocalización para ser usado en geolocalizacion2.hmtl
const etiqueta = document.getElementById("parrafo");  

const opciones = {
    enableHighAccuracy: true,
    maximumAge: 30000,
    timeout: 27000,
};

function damePosicion(){
    if (navigator.geolocation) {    //should be checked 
        navigator.geolocation.getCurrentPosition(muestraPosicion, muestraError, opciones);
    } else { 
        etiqueta.innerHTML="Su navegador no soporta geolocalización";
    }
}

function muestraPosicion(position) {
  var map = L.map('map').setView([position.coords.latitude, position.coords.longitude], 13);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);
  let coordenadas=[position.coords.latitude, position.coords.longitude].toString();
  var marker=L.marker([position.coords.latitude, position.coords.longitude]).addTo(map);
  marker.bindPopup(coordenadas).openPopup();
  etiqueta.innerHTML= "latitud:"+position.coords.latitude+"<br>longitud:"+position.coords.longitude;
}

function muestraError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
           etiqueta.innerHTML="El usuario denegó la petición de localización";
            break;
        case error.POSITION_UNAVAILABLE:
            etiqueta.innerHTML="La información sobre localización no está disponible";
            break;
        case error.TIMEOUT:
            etiqueta.innerHTML="Se agotó el tiempo de la petición";
            break;
        default:
            etiqueta.innerHTML="Ocurrió un error desconocido";
    }
}


