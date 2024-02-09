///////////////
////effects////
///////////////

//show and hide
//hide set the inline sytle display:none and show removes it
//A ms counter can be set and a callback function as well

$(()=>{
    $("#show-and-hide > p:not(#texto-show-hide)").css("background-color", "lightyellow");
    $("#show-and-hide > p:not(#texto-show-hide)").css("width", "100%");
    $("#show-and-hide > p:not(#texto-show-hide)").css("height", "50px");

//fast=200ms and slow=50ms
    $("#hide-btn").click(function(){
        $("#show-and-hide > p.very-slow").hide(2000, ()=>{
            $("p#texto-show-hide").show();
            $("p#texto-show-hide").text("paragraphs hided")
        });
        $("#show-and-hide > p.slow").hide("slow");
        $("#show-and-hide > p.normal").hide();
        $("#show-and-hide > p.fast").hide("fast");
        $("#show-and-hide > p.very-fast").hide(50);
    });
    
    // Show hidden paragraphs
    $("#show-btn").click(function(){
        $("#show-and-hide > p.very-slow").show(2000)
        $("#show-and-hide > p.slow").show("slow");
        $("#show-and-hide > p.normal").show();
        $("#show-and-hide > p.fast").show("fast");
        $("#show-and-hide > p.very-fast").show(50, ()=>{
            $("p#texto-show-hide").hide();
        });
    });
  
});

//toggle



$(()=>{
    //REMEMBER. "this" does not work with arrow functions
    $("#click").click(function(){
        $(this).slideUp();
    });

    $("#double-click").dblclick(function(){
        $(this).slideUp();
    });

    $("#up-btn").click(function(){
        $("article").slideUp();
    });
    
    // Slide down hidden paragraphs
    $("#down-btn").click(function(){
        $("article").slideDown();
    });

    $("article#hover > p").hover(function(){
        $(this).addClass("destacado1");
    }, function(){
        $(this).removeClass("destacado1");
    });

    //hover can be seen as a combination of mouseenter and mouseleave

});

//show and fadeout
$(()=>{
    var i = 0;
    $('input[name="keyboard"]').keypress(function(){
        $("#keypressed").text(i += 1);
        $("#keypressed").show().fadeOut(2000);
    });
});

//form events
$(()=>{
    $('select').change(function(){
        let ciudad=$(this).find(":selected").val();
        alert("ha seleccionado "+ciudad)
    });

    $('input').focus(function(){
        $(this).addClass("destacado1");
    });

    $('input').blur(function(){
        $(this).removeClass("destacado1");
    });

    //a form can be submitted by using a submit button or by pressing enter when certain form elements have focus
    $("form").submit(function(event){
        event.preventDefault();
        var regex = /^[a-zA-Z]+$/;
        var currentValue = $('form input[name="nombre"]').val();

        if(regex.test(currentValue) == false){
            $("#texto_form").html('<p class="destacado1">Not valid!</p>').show().fadeOut(2000);
        }
    });
});

//Document/window events
//ready. We have already seen since the very first sentence

$(document).ready(function(){
//    $("p").text("The DOM is now loaded and can be manipulated.");
    console.log("The DOM is now loaded and can be manipulated.");
});

//it can be summarized by using $(()=>{ bla bla });

$(()=>{
    $(window).scroll(function() {
        $("p#pixeles_desplazamiento").removeClass("oculto");
        $("p#pixeles_desplazamiento").text(window.scrollY + 'px');
    });
});


