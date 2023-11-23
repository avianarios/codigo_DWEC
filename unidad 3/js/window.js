////////////////////////////////
/////////window object////////
////////////////////////////////


///open method///
//open an url in a new window
/*arguments: 
    1- the URL to load
    2- the window target (name or _self, _blank, _parent, and _top)
    3- a string of window features (properties of the new window as width, height, menubar or resizable)*/

let caracteristicas='height=600,width=800, resizable';
let abreVentana=(url, destino, caracteristicas) => (window.open(url, destino, caracteristicas));

//abreVentana(url, '_blank', caracteristicas);
//abreVentana(url2, 'ventana', caracteristicas);

///resize method///
//resizeBy adds or substract a certain amount of px to current window (if it is resizable)
nuevaVentana=window.open("www.duckduckgo.es", "unNombre", "height=1000, width=900, resizable");
setTimeout(() => {
  nuevaVentana.resizeBy(-300,-200);
}, 2000);  

//resizeTo sets current window to a specific size (if it is resizable)
setTimeout(() => {
    nuevaVentana.resizeTo(600, 900);
}, 2000);*/

///moveTo method///
//moves a window to a specific location
setTimeout(() => {
    nuevaVentana.moveTo(500, 500);
}, 2000);


///close method///
//closes a window
setTimeout(() => {
    nuevaVentana.close();
}, 2000);


///////////////////////
///////properties//////
///////////////////////
///location property///
//location is equivalent to window.location or document.location.href

let url = 'https://www.mozilla.org';
let url2 = 'https://elpais.com';
//moving to another url
let cambiaURL=(url) => (window.location=url);
//cambiaURL(url);

//localStorage property
