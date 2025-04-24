import $ from 'jquery';  // Usando ES6 imports

$(() => {
    // Modificar Atributo
    $('#modificarAtributo').on('click', function() {
        $('img').attr('alt', 'un lindo gatito');
    });

    // Eliminar Atributo y cambiar propiedad
    $('#eliminarAtributo').on('click', function() {
        $('input[disabled]').removeAttr('disabled').attr('placeholder', 'Ahora puede escribir');
    });

    // Modificar Propiedad
    $('#modificarPropiedad').on('click', function() {
        $('input[type="checkbox"]').prop('checked', true);
    });

    // Modificar Valor de un campo
    $('#modificarValor').on('click', function() {
        $('#miInput').val('Nuevo valor ingresado');
    });

    //Leer atributo y según su valor, cambiar el valor de un campo
    $("select").on('change', function(){
        let ciudad = $(this).find(":selected").val();
        $('#ciudadElegida').val(ciudad);
    });

    // Modificar Atributo data-*
    $('#modificarData').on('click', function() {
        $('#elemento').attr('data-info', 'Nuevo valor con attr');
    });

    $('#modificarData2').on('click', function() {
        $('#elemento').data('info', 'Nuevo valor con data');
        console.log($('#elemento').data('info'));
    });

    // Modificar Texto
    $('#modificarTexto').on('click', function() {
        $('#miElementoTexto').text('Texto modificado con text, que ni reconoce ni interpreta las etiquetas HTML');
    });

    // Modificar HTML
    $('#modificarHTML').on('click', function() {
        $('#miElementoHTML').html('Texto modificado con html que <strong>sí reconoce e interpreta las etiquetas HTML</strong>');
    });

    // Modificar Ancho
    $('#modificarAncho').on('click', function() {
        $('#miElementoAncho').width(300);
    });

    // Modificar Altura
    $('#modificarAltura').on('click', function() {
        $('#miElementoAlto').height(200);
    });

    // Modificar Clases
    $('#addClass').on('click', function() {
        $('#miElementoClase').addClass('texto-rojo');
    });

    $('#removeClass').on('click', function() {
        $('#miElementoClase').removeClass('texto-rojo');
    });

    $('#toggleClass').on('click', function() {
        $('#miElementoClase').toggleClass('texto-rojo');
    });

    // Añadir propiedad
    //La selección de elementos devuelve un objeto jQuery. Cuando se accede a propiedades personalizadas, hay que indicar el índice del objeto con el que se va a trabajar. El resto de métodos lo hacen ellos solos
    $('#addProp').on('click', function(){
        $('#campoDeshabilitado')[0].miPropiedad="hola";
        console.log ($('#campoDeshabilitado')[0].miPropiedad);
    });

    // Eliminar Propiedad disabled (no funciona)
    $('#removeProp1').on('click', function() {
        // Esto elimina la propiedad 'disabled', haciendo que el campo sea habilitado
        $('#campoDeshabilitado').removeProp('disabled');
    });

    // Eliminar propiedad personalizada
    $('#removeProp2').on('click', function() {
        // Esto elimina la propiedad 'disabled', haciendo que el campo sea habilitado
        $('#campoDeshabilitado').removeProp('miPropiedad');
        console.log ($('#campoDeshabilitado')[0].miPropiedad);
    });

    // Modificar propiedad CSS
    $('#modificarCSS').on('click', function() {
        $('#miElemento').css('background-color', 'red'); // Cambia el color de fondo a rojo
    });
});
