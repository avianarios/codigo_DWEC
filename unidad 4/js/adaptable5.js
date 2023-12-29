let listado=document.getElementById("galeria");
li=document.createElement("li");
listado.appendChild(li);
imagen=document.createElement("img");
imagen.src=fetch ("https://picsum.photos/200");
imagen.alt="A random image";
li.appendChild(imagen);





/*
var img = document.createElement("img");
img.src = "http://www.google.com/intl/en_com/images/logo_plain.png";
var src = document.getElementById("header");
src.appendChild(img);*/