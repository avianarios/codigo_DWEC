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
//see geoLocation.js
let posicion=navigator.geolocation;

//language
//returns user's browser language
console.log(navigator.language);

//clipboard
//returns an object to read and write to system clipboard interacting with clipboard API
//we'll talk about it in a later unit
navigator.clipboard
.readText()
.then(    //this is a "promise". we'll talk about it in a later unit
  (clipText) => (document.querySelector(".cliptext").innerText = clipText),
);

//permissions
//returns an object that can be used to query and update permission status of APIs covered by the Permissions API. 
//we'll talk about it in a later unit
navigator.permissions.query({ name: "geolocation" }).then((result) => {
  if (result.state === "granted") {
    showMap();
  } else if (result.state === "prompt") {
    showButtonToEnableMap();
  }
  // Don't do anything if the permission was denied.
});

