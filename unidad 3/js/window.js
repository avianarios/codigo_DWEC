////////////////////////////////
/////////location object////////
////////////////////////////////
//location is equivalent to window.location or document.location.href

let url = 'https://www.mozilla.org';
let url2 = 'https://elpais.com';
//moving to another url
let cambiaURL=(url) => (window.location=url);
//cambiaURL(url);

//reload actual url
let recarga=()=>(location.reload());
//recarga();

//open an url in a new window
/*arguments: 
    1- the URL to load
    2- the window target (name or _self, _blank, _parent, and _top)
    3- a string of window features (properties of the new window as width, height, menubar or resizable)*/

let caracteristicas='height=600,width=800, resizable';
let abreVentana=(url, destino, caracteristicas) => (window.open(url, destino, caracteristicas));

/*abreVentana(url, '_blank', caracteristicas);
abreVentana(url2, 'ventana', caracteristicas);*/

//resize window
window.resizeBy(500,400);

