///////////////
////cookies////
///////////////

//create cookie
//document.cookie

//let radiobuttons=document.getElementById("SameSite");
let formulario_galletita=document.getElementById("formulario-galletita");
formulario_galletita.addEventListener("submit", (evento)=>{
    evento.preventDefault();
});
//document.forms[0].addEventListener("change", (evento)=>{
let estado=formulario_galletita.elements["secure"].checked;

document.getElementById("secure").addEventListener("change", (evento)=>{
    estado=evento.target.checked;
});

document.getElementById("SameSite").addEventListener("change", (evento)=>{
    if (evento.target.value=="None"){
        formulario_galletita.elements["secure"].checked=true;
        document.getElementById("secure").disabled=true;
    }else{
        formulario_galletita.elements["secure"].checked=estado;
        document.getElementById("secure").disabled=false;
    }
});


document.getElementById("create_cookie_button").addEventListener("click", (evento)=>{
/*    let nombre=window.prompt("Dígame el nombre de la galletita", "nombre");
    let valor=window.prompt("Dígame el valor de la galletita","valor");*/

    //first field is special: it is mandatory and the user can choose the name
    let campo_nombre=document.querySelectorAll("input[name*='nombre']");
    let galletita=`${campo_nombre[0].value}=${campo_nombre[1].value};`;

    //rest of the fields are optional
    for (let campo of document.querySelectorAll("input:not([name*='nombre'])")){
        switch (campo.type){
            case "radio":
                if (campo.checked){
                    galletita+=`${campo.name}=${campo.value};`;
                }
                break;
            case "checkbox":
                if (campo.checked)
                    galletita+=`${campo.name};`;
                break;
            default:
                if (campo.value!=""){
                    if (campo.name=="expires"){
                        campo.value=new Date (campo.value);
                    }
                    galletita+=`${campo.name}=${campo.value};`;
                }
                if ((campo.name=="secure") && (campo.checked)){
                    galletita+="secure;";
                }
        }
    }
    document.cookie=galletita;
});


//Reading cookies
let texto_propiedades=document.getElementById("texto_propiedades");
document.getElementById("show_cookies_button").addEventListener("click", (evento)=>{
  texto_propiedades.innerHTML=`${document.cookie}`;
  texto_propiedades.classList.remove("dp_none");
});


//removing cookies



///////////////////////////////////////
////localStorage and sessionStorage////
///////////////////////////////////////

//creating localstorage

let formulario_almacenamiento=document.getElementById("formulario_storage");
formulario_almacenamiento.addEventListener("submit", (evento)=>{
    evento.preventDefault();
});

formulario_almacenamiento.addEventListener("click", (evento)=>{
    let nombre=formulario_almacenamiento.elements[1].value;
    let valor=formulario_almacenamiento.elements[2].value
    if (evento.target.id=="create_localstorage_button"){
        localStorage.setItem(nombre,valor);  //starting at 1 due to fieldset counting as a form element
        //it also works localStorage.nombre=valor
    }else{
        sessionStorage.setItem(nombre,valor);  //starting at 1 due to fieldset counting as a form element
    }
});

//Storing information: cookies (document object) and localStorage and sessionStorage (window object)
//localStorage
/*Has no expiration date
Client only
Has no SSL support
Data are not transferred on each HTTP request
5 mb limit (check with the browser)*/
/*
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
sessionStorage.clear();*/