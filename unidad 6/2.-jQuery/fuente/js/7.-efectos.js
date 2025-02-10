import $ from 'jquery';  // Usando ES6 imports

$(()=>{
    $("#effects").click((evento)=>{
         switch (evento.target.id){
            case "hide-btn":
                $("#show-hide-toggle p.very-slow").hide(2000, ()=>{
                    $("#resultadoAparecer").text("Los párrafos se han ocultado");
                    $("#resultadoAparecer").addClass("mostrar-msj");
                });
                $("#show-hide-toggle p.slow").hide("slow");
                $("#show-hide-toggle p.normal").hide();
                $("#show-hide-toggle p.fast").hide("fast");
                $("#show-hide-toggle p.very-fast").hide(50);
                break;
            case "show-btn":
                $("#show-hide-toggle p.very-slow").show(2000)
                $("#show-hide-toggle p.slow").show("slow");
                $("#show-hide-toggle p.normal").show();
                $("#show-hide-toggle p.fast").show("fast");
                $("#show-hide-toggle p.very-fast").show(50, ()=>{
                    $("#resultadoAparecer").text("Los párrafos se han mostrado");
                    $("#resultadoAparecer").addClass("mostrar-msj");
                });
                break;
            case "toggle-btn":
                $("#show-hide-toggle p.very-slow").toggle(2000, ()=>{
                    $("#resultadoAparecer").text("Los párrafos se han ocultado");
                    $("#resultadoAparecer").addClass("mostrar-msj");
                });
                $("#show-hide-toggle p.slow").toggle("slow");
                $("#show-hide-toggle p.normal").toggle();
                $("#show-hide-toggle p.fast").toggle("fast");
                $("#show-hide-toggle p.very-fast").toggle(50);
                break;
            case "fadeIn-btn":
                $("#fadeIn-fadeOut-fadeToggle p.very-slow").fadeIn(2000, ()=>{
                    $("#resultadoDesvanecer").text("Los párrafos se han ocultado");
                    $("#resultadoDesvanecer").addClass("mostrar-msj");
                });
                $("#fadeIn-fadeOut-fadeToggle p.slow").fadeIn("slow");
                $("#fadeIn-fadeOut-fadeToggle p.normal").fadeIn();
                $("#fadeIn-fadeOut-fadeToggle p.fast").fadeIn("fast");
                $("#fadeIn-fadeOut-fadeToggle p.very-fast").fadeIn(50);
                break;
            case "fadeOut-btn":
                $("#fadeIn-fadeOut-fadeToggle p.very-slow").fadeOut(2000, ()=>{
                    $("#resultadoDesvanecer").text("Los párrafos se han ocultado");
                    $("#resultadoDesvanecer").addClass("mostrar-msj");
                });
                $("#fadeIn-fadeOut-fadeToggle p.slow").fadeOut("slow");
                $("#fadeIn-fadeOut-fadeToggle p.normal").fadeOut();
                $("#fadeIn-fadeOut-fadeToggle p.fast").fadeOut("fast");
                $("#fadeIn-fadeOut-fadeToggle p.very-fast").fadeOut(50);
                break;
            case "fadeToggle-btn":
                $("#fadeIn-fadeOut-fadeToggle p.very-slow").fadeToggle(2000, ()=>{
                    $("#resultadoDesvanecer").text("Los párrafos se han ocultado");
                    $("#resultadoDesvanecer").addClass("mostrar-msj");
                });
                $("#fadeIn-fadeOut-fadeToggle p.slow").fadeToggle("slow");
                $("#fadeIn-fadeOut-fadeToggle p.normal").fadeToggle();
                $("#fadeIn-fadeOut-fadeToggle p.fast").fadeToggle("fast");
                $("#fadeIn-fadeOut-fadeToggle p.very-fast").fadeToggle(50);
                break;
            case "fadeTo-btn":
                let opacidad=parseFloat($('[name="opacidad"]').val());

                $("#fadeTo p.very-slow").fadeTo(2000, opacidad, ()=>{
                    $("#resultadofadeTo").text("Los párrafos se han ocultado");
                    $("#resultadofadeTo").addClass("mostrar-msj");
                });
                $("#fadeTo p.slow").fadeTo("slow", opacidad);
                $("#fadeTo p.normal").fadeTo(125, opacidad);
                $("#fadeTo p.fast").fadeTo("fast",opacidad);
                $("#fadeTo p.very-fast").fadeTo(50,opacidad);
                break;
            case "slideUp-btn":
                $("#deslizar p.very-slow").slideUp(2000, ()=>{
                    $("#resultadoDeslizar").text("Los párrafos se han ocultado");
                    $("#resultadoDeslizar").addClass("mostrar-msj");
                });
                $("#deslizar p.slow").slideUp("slow");
                $("#deslizar p.normal").slideUp();
                $("#deslizar p.fast").slideUp("fast");
                $("#deslizar p.very-fast").slideUp(50);
                break;
            case "slideDown-btn":
                $("#deslizar p.very-slow").slideDown(2000, ()=>{
                    $("#resultadoDeslizar").text("Los párrafos se han mostrado");
                    $("#resultadoDeslizar").addClass("mostrar-msj");
                });
                $("#deslizar p.slow").slideDown("slow");
                $("#deslizar p.normal").slideDown();
                $("#deslizar p.fast").slideDown("fast");
                $("#deslizar p.very-fast").slideDown(50);
                break;
            case "slideToggle-btn":
                $("#deslizar p.very-slow").slideToggle(2000, ()=>{
                    $("#resultadoDeslizar").text("Los párrafos se han ocultado");
                    $("#resultadoDeslizar").addClass("mostrar-msj");
                });
                $("#deslizar p.slow").slideToggle("slow");
                $("#deslizar p.normal").slideToggle();
                $("#deslizar p.fast").slideToggle("fast");
                $("#deslizar p.very-fast").slideToggle(50);
                break;
                
        }
    });

    // Animación de Movimiento (animate)
    $('#start-animate').click(() => {
        $('#caja')
            .animate({
                left: '500px', // Mover el cuadro a la derecha
                width: '300px',
                height: '150px',
                backgroundColor: '#FFD700' // Cambiar color de fondo
            }, 2000); // Duración de 2 segundos
    });

    // Animación Fade (fadeIn y fadeOut)
    $('#start-fade').click(() => {
        $('#caja2')
            .fadeOut(1000, () => { // Desvanecer con un retraso
                $('#caja2').fadeIn(1000); // Aparecer de nuevo
            });
    });

    // Animación de Zoom (scale)
    $('#start-zoom').click(() => {
        $('#caja3')
            .animate({
                width: '400px',
                height: '200px',
                opacity: 0.5 // Reducir opacidad al hacer zoom
            }, 1500) // Animación de 1.5 segundos
            .animate({
                width: '200px',
                height: '100px',
                opacity: 1 // Regresar al tamaño original
            }, 1500); // Regresar a su tamaño original
    });

    // Animación de Rotación (rotate)
    $('#start-rotate').click(() => {
        $('#caja4')
            .animate(
                { borderSpacing: 90 }, 
                {
                    step: function (now, fx) {
                        $(this).css('transform', 'rotate(' + now + 'deg)');
                    },
                    duration: 2000
                });
    });

    // Animación Encadenada
    $('#start-chained').click(() => {
        $('#caja')
            .animate({
                left: '500px', // Mover el cuadro a la derecha
            }, 1000)  // Animación de 1 segundo
            .animate({
                top: '200px', // Mover hacia abajo
                opacity: 0.5 // Reducir opacidad
            }, 1500)  // Animación de 1.5 segundos
            .fadeIn(500); // Vuelve a aparecer después de la animación
    });



});