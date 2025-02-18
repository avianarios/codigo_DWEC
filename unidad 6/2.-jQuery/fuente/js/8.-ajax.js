import $ from 'jquery';  // Usando ES6 imports
import dotenv from 'dotenv';
dotenv.config();


$(()=>{
    $("#ajax").on("click",(evento)=>{
        switch (evento.target.id){
            case "btn-perro":
                // El servidor envía una cadena de texto con la URL de la imagen
                $.ajax({
                    url: "https://dog.ceo/api/breeds/image/random",
                    method: "GET",
                    success: function (data) {
                        $('#contenedor').empty();
                        const dogImage = data.message;
                        $('#contenedor').append(`<img src="${dogImage}" alt="Imagen de un perro" class="cat-image">`);
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        console.log("Error en la solicitud AJAX:", textStatus, errorThrown);
                    }
                });
                break;
            case "btn-gatos":
                //El servidor envía una cadena de texto con muchas URL de imágenes
                const urlRemota2 = "https://api.thecatapi.com/v1/images/search?limit=10";

                // const apiKey = process.env.API_KEY_NINJAS;
                //Cuando hay caracteres no permitidos o se usan variables intermedias se usan corchetes
                // const apiKey = process.env["API-KEY-NINJAS"];
                
                const apiKeyUrlRemota2 = process.env["API-KEY-CAT"];

                // Usamos una promesa con $.ajax() para obtener una imagen de un gato
                $.ajax({
                    url: urlRemota2,
                    method: "GET",
                    headers: {
                        "x-api-key": apiKeyUrlRemota2
                    }
                }).done((data) => {
                    console.log("Server response:", data);
                    // Mostrar la imagen del gato
                    $('#contenedor').empty();
                    data.forEach(cat => {
                        const catImage = cat.url;
                        $('#contenedor').append(`<img src="${catImage}" alt="Imagen de un gato" class="cat-image">`);
                    });
                }).fail((jqXHR, textStatus, errorThrown) => {
                    console.log("Error en la solicitud AJAX:");
                    console.log("Estado:", jqXHR.status); // Código HTTP (ej. 404, 500)
                    console.log("Texto del estado:", textStatus); // Texto del error
                    console.log("Descripción del error:", errorThrown); // Detalle del error
                    console.log("Respuesta del servidor:", jqXHR.responseText); // Respuesta (si la hay)
                }).always(() => {
                    console.log("La solicitud AJAX se ha completado.");
                });
                break;
        
            case "btn-gato":
                //El servidor envía una imagen. No su URL, sino una imagen
                const direccionURL = "https://cataas.com/cat?width=300";

                // Crear una solicitud AJAX manualmente con XMLHttpRequest
                const xhr = new XMLHttpRequest();
                xhr.open("GET", direccionURL, true);
                xhr.responseType = "blob";  // Especificar que la respuesta es binaria

                xhr.onload = function () {
                    if (xhr.status === 200) {
                        // Convertir la respuesta en un blob
                        const blob = xhr.response;
                        const imageUrl = URL.createObjectURL(blob); // Crear URL a partir del blob

                        // Crear la imagen y agregarla al DOM
                        const imagen = $("<img>", {
                            src: imageUrl,
                            alt: "Gato adorable",
                        });
                        $("#contenedor").empty().append(imagen);                        
                    } else {
                        console.error("Error en la solicitud: ", xhr.status);
                    }
                };

                xhr.onerror = function () {
                    console.error("Error en la solicitud AJAX");
                };

                xhr.send();
                break;                
        
        }
    });
});



