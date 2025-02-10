import $ from 'jquery';  // Usando ES6 imports
import dotenv from 'dotenv';
dotenv.config();

$(()=>{
    const urlRemota1 = "https://fakestoreapi.com/products/";
    
    $("#ajax").on("click",(evento)=>{
        switch (evento.target.id){
            case "btn-get":
                console.log("aa");
                $.ajax({
                    url: urlRemota1,
                    method: "GET",
                    success: function (data) {
                        console.log("Server response:", data);
                        data.forEach(product => {
                            console.log(product.id, product.title, product.price);
                        });
                        // Recorrer los productos y mostrarlos en la página
                        data.forEach(product => {
                            let productHTML = `
                                <article class="product">
                                    <img src="${product.image}" alt="${product.title}">
                                    <h3>${product.title}</h3>
                                    <p>${product.description.substring(0, 100)}...</p>
                                    <p class="destacado">Precio: $${product.price}</p>
                                </article>
                            `;
                            $('#productos').append(productHTML);
                            $('#productos').removeClass("oculto");
                            $('#gatos').addClass("oculto");

                        });
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        console.log("Error en la solicitud AJAX:", textStatus, errorThrown);
                    }
                });
                break;
        }
    });


    const urlRemota2 = "https://api.thecatapi.com/v1/images/search?limit=5";
    const apiKeyUrlRemota2 = process.env.API_KEY;

    $("#ajax").on("click", (evento)=>{
        switch (evento.target.id){
            case "btn-get2":
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
                    data.forEach(cat => {
                        const catImage = cat.url;
                        console.log("Imagen del gato:", catImage);
                        $('#gatos').append(`<img src="${catImage}" alt="Imagen de un gato" class="cat-image">`);
                        $('#gatos').removeClass("oculto");
                        $('#productos').addClass("oculto");
                    });
                }).fail((jqXHR, textStatus, errorThrown) => {
                    console.log("Error en la solicitud AJAX:", textStatus, errorThrown);
                }).always(() => {
                    console.log("La solicitud AJAX se ha completado.");
                });
                break;
        }
    });
    

});



