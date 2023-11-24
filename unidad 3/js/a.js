if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    //document.getElementById("demo").innerHTML =
    console.log (    "Geolocation is not supported by this browser.");
  }
  
  function showPosition(position) {
  /*  document.getElementById("demo").innerHTML =
    "Latitude: " + position.coords.latitude + "<br>" +
    "Longitude: " + position.coords.longitude;*/
    console.log (`latitud: ${position.coords.latitude}, longitud: ${position.coords.longitude}`);
  }