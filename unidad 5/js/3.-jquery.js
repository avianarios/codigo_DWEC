//a JQuery statement tipically starts with a $ and ends with semicolon

$(document).ready(function(){   //as soon as document is ready to manipulate
    $("button").click(function(){
        //regular JavaScript can be used mixed with JQuery
        setTimeout(()=>{
            $("p").text("hola mundo");
        },3000);
    });
});

/*Shorthand notation
$(function(){
    $("p").text("hola mundo");
});
*/

//////////////////////////
////selecting elements////
//////////////////////////

$(()=>{
    //by id
    $("#segundo").css("background", "yellow");

    //by class
    $(".grande").css("height", "150px");

    //by name
    $("p").css("font-size", "0.9rem");
    $("body").css("background-color", "lightblue");
    $("body").css("width", "60vw");
    $("body").css("margin", "0 auto");
    $('article').css("border", "1px solid black");
    $('article').css("width", "80%");
    $('p').css("text-align", "center");

    //by attribute
    $('input[type="text"]').css("font-size", "1rem");

    //by using CSS selectors
    $('article:nth-of-type(even)').css("background-color", "lightcoral");
    $('article:nth-of-type(odd)').css("background-color", "lightgreen");
    $('article:not(.grande)').css("min-height", "50px");

    //by using JQuery custom selector
    // destacado all input elements with type text inside a form. Also :password and :submit are allowed
    $("form :text").css("border", "1px solid black");

    $("#cambia_texto").click(()=>{
        $("p:last").text("este es el último párrafo");
        $("p:first").text("este es el primer párrafo");
    });

    $("#cambia_color").click(()=>{
        $("article:even").css("background-color", "lightpink");
        $("article:odd").css("background-color", "lightyellow");
    });
});
 
//////////////
////events////
//////////////

//mouse events

$(()=>{
    //REMEMBER. "this" does not work with arrow functions
    $("#click").click(function(){
        $(this).slideUp();
    });

    $("#double_click").dblclick(function(){
        $(this).slideUp();
    });

    $("#up-btn").click(function(){
        $("article").slideUp();
    });
    
    // Slide down hidden paragraphs
    $("#down-btn").click(function(){
        $("article").slideDown();
    });

    $("p").hover(function(){
        $(this).addClass("destacado");
    }, function(){
        $(this).removeClass("destacado");
    });

    //mouseenter and mouseleave are a combination of hover

});

//keyboard events
$(()=>{
    var i = 0;
    $('input[name="keyboard"]').keypress(function(){
        $("#keyboard_events > p").text(i += 1);
        $("#keyboard_events > p").show().fadeOut();
    });

    //keypress is similar to keydown, but modifier and non-printing keys such as Shift, Esc, Backspace or Delete, Arrow keys etc. trigger keydown events but not keypress events.
    //also exist keydown and keyup
});

//form events
$(()=>{
    $('select').change(function(){
        let ciudad=$(this).find(":selected").val();
        alert("ha seleccionado "+ciudad)
    });

    $('input').focus(function(){
        $(this).addClass("borde_rojo");      //NO FUNCIONA PORQUE EN LA LÍNEA 48 SE ESTABLECE UN BORDE NEGRO

    });

    
    /*$('imput[name="nombre"]').change(function()=>{
        
    });*/
});
