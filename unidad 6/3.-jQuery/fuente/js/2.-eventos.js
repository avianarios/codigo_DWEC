import $ from 'jquery';  // Usando ES6 imports

$(() => {
    // Evento click
    $('#eventoClick').on('click', () => {
        $('#resultadoClick').text('¡Has hecho clic en el botón!');
    });

    // Evento change
    $('#eventoChange').on('change', () => {
        $('#resultadoChange').text('Has cambiado el valor del campo de texto');
    });

    // Evento focusin
    $('#eventoFocus').on('focusin', () => {
        $('#resultadoFocus').text('El campo tiene el foco');
    });

    // Evento focusout
    $('#eventoBlur').on('focusout', () => {
        $('#resultadoBlur').text('El campo ha perdido el foco');
    });

    // Evento hover
    $('#eventoHover').on('mouseenter', () => {
        $('#resultadoHover').text('El ratón está sobre el elemento');
    }).on('mouseleave', () => {
        $('#resultadoHover').text('El ratón ya no está sobre el elemento');
    });

    // Evento keydown
    $('#eventoTeclado').on('keydown', () => {
        $('#resultadoTeclado').text('Tecla presionada');
    });

    // Evento keyup
    $('#eventoTeclado').on('keyup', () => {
        $('#resultadoTeclado').text('Tecla liberada');
    });

    // Evento submit
    $('#formulario').on('submit', (event) => {
        event.preventDefault();  // Prevenir el envío del formulario
        $('#resultadoSubmit').text('Formulario enviado (sin recargar página)');
    });

    // Evento resize
    $(window).on('resize', () => {
        $('#resultadoResize').text('La ventana ha sido redimensionada');
    });

    $('#variosEventos').on('click mouseenter mouseleave dblclick', (e) => {
        let mensaje = '';

        switch (e.type) {
            case 'click':
                mensaje = '¡Has hecho clic en el elemento!';
                break;
            case 'mouseenter':
                mensaje = 'El ratón está sobre el elemento.';
                break;
            case 'mouseleave':
                mensaje = 'El ratón ha salido del elemento.';
                break;
            case 'dblclick':
                mensaje = '¡Has hecho doble clic en el elemento!';
                break;
        }

        $('#resultadoVariosEventos').text(`${mensaje}`);
    });
});