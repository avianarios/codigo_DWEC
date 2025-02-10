import $ from 'jquery';  // Usando ES6 imports

$(() => {
    ////padres////
    // parent()
    $("#btn-parent").on("click", function() {
        const parent = $("#example-container").parent();
        $("#resultadoPadres").text("El elemento padre es: " + parent.prop('tagName') +" con id "+ parent.prop('id'));
        $("#resultadoPadres").addClass("mostrar-msj");
    });

    // parents()
    $("#btn-parents").on("click", function() {
        const parents = $("#example-container").parents();
        let text = "Los ancestros son: ";
        parents.each(function() {
            text += $(this).prop('tagName') + " ";
        });
        $("#resultadoPadres").text(text);
        $("#resultadoPadres").addClass("mostrar-msj");
    });

    // parentsUntil()
    $("#btn-parentsUntil").on("click", function() {
        const parentsUntil = $("#nested-container").parentsUntil("#demo-section");
        let text = "Los ancestros hasta #demo-section son: ";
        parentsUntil.each(function() {
            text += $(this).prop('tagName') + " ";
        });
        $("#resultadoPadres").text(text);
        $("#resultadoPadres").addClass("mostrar-msj");
    });

    ////navegación general////
    // .first()
    $("#btn-first").on("click", function() {
        const firstElement = $("#example-container p").first(); // Primer párrafo
        $("#resultadoNav").text("El primer párrafo es: " + firstElement.prop('tagName') + " - " + firstElement.text());
        $("#resultadoNav").addClass("mostrar-msj");
    });

    // .last()
    $("#btn-last").on("click", function() {
        const lastElement = $("#example-container p").last(); // Último párrafo
        $("#resultadoNav").text("El último párrafo es: " + lastElement.prop('tagName') + " - " + lastElement.text());
        $("#resultadoNav").addClass("mostrar-msj");
    });

    // .eq()
    $("#btn-eq").on("click", function() {
        const eqElement = $("#example-container p").eq(2); // Elemento en el índice 2
        $("#resultadoNav").text("El elemento en el índice 2 es: " + eqElement.prop('tagName') + " - " + eqElement.text());
        $("#resultadoNav").addClass("mostrar-msj");
    });

    // .closest()
    $("#btn-closest").on("click", function() {
        const closestElement = $("#nested-container p").closest("section"); // Ancestro más cercano
        $("#resultadoNav").text("El ancestro más cercano de este párrafo es: " + closestElement.prop('tagName') + " - " + closestElement.attr('id'));
        $("#resultadoNav").addClass("mostrar-msj");
    });

        
    ////hijos////
    // children()
    $("#btn-children").on("click", function() {
        const children = $("#example-container").children();
        let text = "Los hijos son: ";
        children.each(function() {
            text += $(this).prop('tagName') + " ";
        });
        $("#resultadoChildren").text(text);
        $("#resultadoChildren").addClass("mostrar-msj");
    });


    ////hermanos////
    // siblings()
    $("#btn-siblings").on("click", function() {
        const siblings = $("#demo-section p").first().siblings();
        let text = "Los hermanos del primer párrafo son: ";
        siblings.each(function() {
            text += $(this).prop('tagName') + "#" + $(this).attr('id')+", ";
        });
        $("#resultadoSiblings").text(text);
        $("#resultadoSiblings").addClass("mostrar-msj");
    });

    // next()
    $("#btn-next").on("click", function() {
        const next = $("#demo-section p").first().next();
        if (next.length) {
            $("#resultadoNext").text("El siguiente hermano de este párrafo es: " + next.prop('tagName')+ "#" + next.attr('id')+", ");
        } else {
            $("#resultadoNext").text("No hay siguiente hermano.");
        }
        $("#resultadoNext").addClass("mostrar-msj");
    });

    // nextAll()
    $("#btn-nextAll").on("click", function() {
        const nextAll = $("#demo-section p").first().nextAll();
        let text = "Todos los hermanos posteriores a este párrafo son: ";
        nextAll.each(function() {
            text += $(this).prop('tagName') + "#" + $(this).attr('id')+", ";
        });
        $("#resultadoNext").text(text);
        $("#resultadoNext").addClass("mostrar-msj");
    });

    // nextUntil()
    $("#btn-nextUntil").on("click", function() {
        const nextUntil = $("#demo-section p").first().nextUntil("#nested-container");
        let text = "Los elementos siguientes hasta #nested-container son: ";
        nextUntil.each(function() {
            text += $(this).prop('tagName') + "#" + $(this).attr('id')+", ";
        });
        $("#resultadoNext").text(text);
        $("#resultadoNext").addClass("mostrar-msj");
    });

    // prev()
    $("#btn-prev").on("click", function() {
        const prev = $("#demo-section p").last().prev();
        $("#resultadoPrev").text("El elemento anterior es: " + prev.prop('tagName')+"#" + prev.attr('id')+", ");
        $("#resultadoPrev").addClass("mostrar-msj");
    });

    // prevAll()
    $("#btn-prevAll").on("click", function() {
        const prevAll = $("#demo-section p").last().prevAll();
        let text = "Todos los elementos anteriores son: ";
        prevAll.each(function() {
            text += $(this).prop('tagName') + "#" + $(this).attr('id')+", ";
        });
        $("#resultadoPrev").text(text);
        $("#resultadoPrev").addClass("mostrar-msj");
    });

    // prevUntil()
    $("#btn-prevUntil").on("click", function() {
        const prevUntil = $("#demo-section p").last().prevUntil("p:first");
        let text = "Los elementos anteriores hasta el primero son: ";
        prevUntil.each(function() {
            text += $(this).prop('tagName') + "#" + $(this).attr('id')+", ";
        });
        $("#resultadoPrev").text(text);
        $("#resultadoPrev").addClass("mostrar-msj");
    });
    



});
