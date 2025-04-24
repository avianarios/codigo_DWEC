import $ from 'jquery';  // Usando ES6 imports

$(()=>{
    // Filtrar por clase (hasClass)
    $("#btn-hasClass").on("click", function() {
        const hasClassElement = $("#example-container p").hasClass("highlight");
        if (hasClassElement.length > 0) {
            $("#resultadoNav").text("Párrafo con la clase 'highlight' encontrado.");
        } else {
            $("#resultadoNav").text("No se encontró ningún párrafo con la clase 'highlight'.");
        }
        $("#resultadoNav").addClass("mostrar-msj");
    });

    // Filtrar párrafos con texto "Elemento 1" (filter)
    $("#btn-filter").on("click", function() {
        const filterElement = $("#example-container p").filter(function() {
            return $(this).text() === "Elemento 1 - Primer párrafo";
        });
        let text = "Los párrafos con el texto 'Elemento 1': ";
        filterElement.each(function() {
            text += $(this).prop('tagName') + " - " + $(this).text() + " ";
        });
        $("#resultadoNav").text(text);
        $("#resultadoNav").addClass("mostrar-msj");
    });
        
    // Excluir el primer párrafo (not)
    $("#btn-not").on("click", function() {
        const notElement = $("#example-container p").not(":first");
        let text = "Los párrafos que no son el primero: ";
        notElement.each(function() {
            text += $(this).prop('tagName') + " - " + $(this).text() + " ";
        });
        $("#resultadoNav").text(text);
        $("#resultadoNav").addClass("mostrar-msj");
    });    

    // find()
    $("#btn-find").on("click", function() {
        const found = $("#example-container").find("p");
        let text = "Los párrafos encontrados son: ";
        found.each(function() {
            text += $(this).prop('tagName') + "#" + $(this).attr('id')+", ";
        });
        $("#resultadoFind").text(text);
        $("#resultadoFind").addClass("mostrar-msj");
    });

});