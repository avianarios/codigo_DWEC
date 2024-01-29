////////////////////////////
///////location object//////
////////////////////////////


///location is an object representing the URL the object is linked to
//location is linked to window.location and document.location

//location is reachable through window and document
//it has many properties: hostname, href, protocol, etc.
let texto1=document.getElementById("texto1");
document.getElementById("show_location").addEventListener("click", (evento)=>{
  evento.target.innerText.includes("show") ? 
      evento.target.innerText=evento.target.innerText.replace("show", "hide") : 
      evento.target.innerText=evento.target.innerText.replace("hide", "show");
  texto1.classList.toggle("dp_none");
  texto1.innerHTML=`<ul class="lista_viñetas"><li>location: ${location}</li>
                      <li>location.href: ${location.href}</li>
                      <li>window.location.hostname: ${window.location.hostname}</li>
                      <li>document.location.protocol: ${document.location.protocol}</li></ul>`;
})

/////////////////
/////methods/////
/////////////////

//assign method
//moves to another url
let url="www.google.es";
location.assign(url);
//the next sentences makes JavaScript to call assign method
window.location=url;
location.href=url;
/*
//replace method
//similar to assign, but it doesn't create an entrance in browser's history. back button can't be pressed
location.replace(url);

//reload method
//reloads page content
location.reload(); //reloads current page using cache when content hasn't changed
location.reload(true); //forces to download all content from server

//iterating through location.search
console.log (location.search);
parametros=new URLSearchParams (location.search);   //URLSearchParams has to be used as it returns an iterable object
for (const [key, value] of parametros){
  console.log (`${key}: ${value}`);
}

//check if a parameter exists
console.log (parametros.has("precio"));

////////////////////
/////properties/////
////////////////////

location.href //returns a string containing the entire URL
location.protocol //A string containing the protocol scheme of the URL, including the final ':'.
location.host //A string containing the host, that is the hostname, a ':', and the port of the URL.
location.hostname //A string containing the domain of the URL.
location.port   //A string containing the port number of the URL.
Location.search //A string containing a '?' followed by the parameters or "querystring" of the URL. Modern browsers provide URLSearchParams and URL.searchParams to make it easy to parse out the parameters from the querystring.
*/