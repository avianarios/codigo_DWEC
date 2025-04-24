import $ from 'jquery';  // Usando ES6 imports

$(()=>{
    // .append()
    $('#append').on('click', function() {
        $('#miElemento').append('<output class="informacion mostrar-msj">Nuevo párrafo al final con append</output>');
    });

    // .prepend()
    $('#prepend').on('click', function() {
        $('#miElemento').prepend('<output class="informacion mostrar-msj">Nuevo párrafo al principio con prepend</output>');
    });

    // .before()
    $('#before').on('click', function() {
        $('#miElemento').before('<output class="informacion mostrar-msj">Este párrafo está antes de miElemento</output>');
    });

    // .after()
    $('#after').on('click', function() {
        $('#miElemento').after('<output class="informacion mostrar-msj">Este párrafo está después de miElemento</output>');
    });

    // .wrap()
    $('#wrap').on('click', function() {
        $('#miElemento').wrap('<article class="wrapper');
    });

    // .wrapAll()
    $('#wrapAll').on('click', function() {
        $("p").wrapAll("<article class='wrapper");
    });

    // .unwrap()
    $('#unwrap').on('click', function() {
        $('#miElemento').unwrap();
    });

    // .remove()
    $('#remove').on('click', function() {
        $('#miElemento').remove();
    });

    // .empty()
    $('#empty').on('click', function() {
        $('#miElemento').empty();
    });

    // .detach()
    $('#detach').on('click', function() {
        var elemento = $('#miElemento').detach();
        $('body').append(elemento); // Vuelve a agregar el elemento en otro lugar
    });

    // .clone()
    $('#clone').on('click', function() {
        var clon = $('#miElemento').clone();
        $('#miElemento').after(clon); // Inserta el clon después de #miElemento
    });

    // .replaceWith()
    $('#replaceWith').on('click', function() {
        $('#miElemento').replaceWith('<output class="informacion mostrar-msj">Nuevo contenido</output>');
    });

    // .replaceAll()
    $('#replaceAll').on('click', function() {
        $('#nuevoElemento').replaceAll('.elemento');
    });
});