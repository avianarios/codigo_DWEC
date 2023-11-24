////////////////////////////
///////location object//////
////////////////////////////


///location is an object representing the URL the object is linked to
//location is linked to window.location and document.location

//location is reachable through window and document
//it has many properties: hostname, href, protocol, etc.
console.log(location+
    "\n"+window.location.hostname+
    "\n"+location.href+
    "\n"+document.location.protocol);

//assign method
//moves to another url
location.assign(url);
//the next sentences makes JavaScript to call assign method
window.location=url;
location.href=url;

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

//localStorage property
