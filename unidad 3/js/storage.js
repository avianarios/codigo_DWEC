///////////////////////////
///////storage object//////
///////////////////////////


//Storing information: cookies (document object) and localStorage and sessionStorage (window object)
//localStorage
/*Has no expiration date
Client only
Has no SSL support
Data are not transferred on each HTTP request
5 mb limit (check with the browser)*/

window.localStorage.setItem("miGata","Pelusa");
console.log (window.localStorage.getItem("miGata"));
localStorage.removeItem("miGata");
localStorage.setItem("miPerra","Cibeles");
localStorage.setItem("miGata","Mancha");
localStorage.clear();

//sessionStorage
//same as localStorage, but data is gone when closing the web browser
window.sessionStorage.setItem("miGata","Pelusa");
console.log (window.sessionStorage.getItem("miGata"));
sessionStorage.removeItem("miGata");
sessionStorage.setItem("miPerra","Cibeles");
sessionStorage.setItem("miGata","Mancha");
sessionStorage.clear();