//Provides information about web browser (user agent)
//it's a read-only property of window object and an object itself

//////////////////
////properties////
//////////////////

////userAgent
//provides information that identifies the web browser
//read-only
window.navigator.userAgent;

//useful when offering functionality depending on the web broser
//there's no guarantee that the browser agent is indeed the one advertised by this property.
//Some browsers allow users to modify useragent to pretend they are using another browser
//therefore, you can't rely on detecting user browser this way
if (window.navigator.userAgent.includes("Chrome")){
    //do something
}

//it is better to try to detect the funcionality needed (capability detection)
if( typeof window.addEventListener === 'function' ) {
    // let's use addEventListener
} else {
    // addEventListener is not supported, use another way
}

////cookieEnabled
//returns true if cookies are enabled
//read-only
if (navigator.cookieEnabled){
    console.log ("las galletitas están habilitadas");
  }


////geolocation
//returns a geolocation object to interact with Geolocation API
let localizacion=navigator.geolocation;
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