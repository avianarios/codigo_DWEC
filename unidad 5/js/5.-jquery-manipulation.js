$(()=>{
//    $("#text button:first").click(()=>{

///////////////////////////
////getters and setters////
///////////////////////////

//text method
    $("#btn-getText").click(()=>{
        console.log ($("#text > p:first").text());
    });

    $("#btn-getAllText").click(()=>{
        console.log ($("#text > p").text());
    });

    $("#btn-setText").click(()=>{
        $("#text > p:first").text("<strong>Las etiquetas HTML no son interpretadas</strong>");
    });

    $("#btn-setAllText").click(()=>{
        $("#text > p").text("<strong>Este método</strong> no interpreta las etiquetas HTML");
    });

//html method
    $("#btn-getHTML").click(()=>{
        console.log ($("#HTML > p:first").html());
    });

    $("#btn-getAllHTML").click(()=>{
        console.log ($("#HTML > p").html());
    });

    $("#btn-setHTML").click(()=>{
        $("#HTML > p:first").html("<strong>Las etiquetas HTML SÍ son interpretadas</strong>");
    });

    $("#btn-setAllHTML").click(()=>{
        $("#HTML > p").html("<strong>Este método</strong> SÍ interpreta las etiquetas HTML");
    });

//attr method
    $("#btn-getImgattr").click(()=>{
        console.log ($("#attr img").attr("alt"));
    });

    $("#btn-getLinkattr").click(()=>{
        console.log ($("#attr a").attr("href"));
    });

    $("#btn-setImgattr").click(()=>{
        $("#attr img").attr("alt", "una imagen aleatoria de un gato");
    });

    $("#btn-setLinkattr").click(()=>{
        $("#attr a").text("The cat API");
        $("#attr a").attr("href", "https://thecatapi.com/");
    });


//val method
    $("input").keyup(function(){
        $('#texto-form').text("input:"+$(this).val());

    });

    $("select").change(function(){
        let ciudad=$(this).find(":selected").val();
        $('#texto-form').text("You have selected "+ciudad)
    });

    $("form").submit(function(event){
        event.preventDefault();
    });

    $("#btn-submit").click(()=>{
        var regex = /^[a-zA-Z]+$/;
        var currentValue = $('form input[name="nombre"]').val();

        if(regex.test(currentValue) == false){
            $("#texto-form").html('<p class="destacado1">Name field not valid!</p>');
        }else{
            $("#texto-form").html('');
        }

/*in order for show to work display:none must be set at the original element
        if(regex.test(currentValue) == false){
            $("#texto-form").html('<p class="destacado1">Name field not valid!</p>').show().fadeOut(2000);
        }*/
    });

    $("#btn-fill").click(()=>{
        $('form input[name="nombre"]').val("Procopio");
        $('form input[name="apellidos"]').val("Máximo Meridio");
    });

/////////////////////////
////inserting content////    
/////////////////////////

//append method
    $("#btn-append").click(()=>{
        $("#append-prepend > p").append("<strong> Paragraph appended with JQuery </strong>");
    });

    $("#btn-append-multiple").click(()=>{
        $("#append-prepend > p").append("<strong> Paragraph <span class='destacado1'>number 1 appended</span> with JQuery </strong>", "<strong> Paragraph <span class='destacado1'>number 2 appended</span> with JQuery </strong>");
    });

//prepend method    
    $("#btn-prepend").click(()=>{
        $("#append-prepend > p").prepend("<strong> Paragraph prepended with JQuery </strong>");
    });

    $("#btn-prepend-multiple").click(()=>{
        $("#append-prepend > p").prepend("<strong> Paragraph <span class='destacado1'>number 1 prepended</span> with JQuery </strong>", "<strong> Paragraph <span class='destacado1'>number 2 prepended</span> with JQuery </strong>");
    });


/*    $("#insert-content").click((evento)=>{
        switch(evento.target.id){
            case "":
                break;
            case "":
                break;
            case "":
                break;
            case "":
                break;
        }
    });*/


    $("#insert-content").click((evento)=>{
        switch(evento.target.id){
            case "btn-before":
                $("#before-after > p").before("<strong> Paragraph inserted before with JQuery </strong>");
                break;
            case "btn-before-multiple":
                $("#before-after > p").before("<strong> Paragraph <span class='destacado1'>number 1 inserted before</span> with JQuery </strong>", "<strong> Paragraph <span class='destacado1'>number 2 inserted before</span> with JQuery </strong>");
                break;
            case "btn-after":
                $("#before-after > p").after("<strong> Paragraph inserted after with JQuery </strong>");
                break;
            case "btn-after-multiple":
                $("#before-after > p").after("<strong> Paragraph <span class='destacado1'>number 1 inserted after</span> with JQuery </strong>", "<strong> Paragraph <span class='destacado1'>number 2 inserted after</span> with JQuery </strong>");
                break;
            case "btn-wrap":
                $("#wrap>p").wrap("<div class='destacado1'></div>");
                break;
        }
    });


    $("#remove-content").click((evento)=>{
        switch(evento.target.id){
            case "btn-empty":
                $("#empty-remove").empty();
                break;
            case "btn-remove":
                $("#empty-remove").remove();
                break;
            case "btn-unwrap":
                $("#unwrap p").unwrap();
                break;
            case "btn-removeAttr":
                $("#removeAttr > a").removeAttr("href");
                break;
        }
    });

    $("#appearance").click((evento)=>{
        switch(evento.target.id){
            case "btn-addClass":
                $("#adclass-removeclass-toggleclass > p").addClass("destacado1 texto-grande");
                break;
            case "btn-removeClass":
                $("#adclass-removeclass-toggleclass > p").removeClass("destacado1 texto-grande");
                break;
            case "btn-toggleClass":
                $("#adclass-removeclass-toggleclass > p").toggleClass("destacado1 texto-grande");
                break;
            case "btn-css1":
                $("#css > p").css("color", "lightcoral");
                break;
            case "btn-css2":
                $("#css > p").css("font-size", "1.25rem");
                break;
            case "btn-css3":
                $("#css > p").css({"color":"lightcoral", "font-size":"1.25rem"});
                break;
        }
    });



/*
//before method
    $("#btn-before").click(()=>{
        $("#before-after > p").before("<strong> Paragraph inserted before with JQuery </strong>");
    });

    $("#btn-before-multiple").click(()=>{
        $("#before-after > p").before("<strong> Paragraph <span class='destacado1'>number 1 inserted before</span> with JQuery </strong>", "<strong> Paragraph <span class='destacado1'>number 2 inserted before</span> with JQuery </strong>");
    });

//after method    
    $("#btn-after").click(()=>{
        $("#before-after > p").after("<strong> Paragraph inserted after with JQuery </strong>");
    });

    $("#btn-after-multiple").click(()=>{
        $("#before-after > p").after("<strong> Paragraph <span class='destacado1'>number 1 inserted after</span> with JQuery </strong>", "<strong> Paragraph <span class='destacado1'>number 2 inserted after</span> with JQuery </strong>");
    });

//wrap method    
    $("#btn-wrap").click(()=>{
        $("#wrap>p").wrap("<div class='destacado1'></div>");
    });


//empty method
$("#btn-empty").click(()=>{
    $("#empty-remove").empty();
});

//remove method    
$("#btn-remove").click(()=>{
    $("#empty-remove").remove();
});

//unwrap method
$("#btn-unwrap").click(()=>{
    $("#unwrap p").unwrap();
});

//removeAttr method
$("#btn-removeAttr").click(()=>{
    $("#removeAttr > a").removeAttr("href");
});

//addClass method
    $("#btn-addClass").click(()=>{
        $("#adclass-removeclass-toggleclass > p").addClass("destacado1 texto-grande");
    });

//removeClass method
    $("#btn-removeClass").click(()=>{
        $("#adclass-removeclass-toggleclass > p").removeClass("destacado1 texto-grande");
    });

//toggleClass method
    $("#btn-toggleClass").click(()=>{
        $("#adclass-removeclass-toggleclass > p").toggleClass("destacado1 texto-grande");
    });

//css method
    $("#btn-css1").click(()=>{
        $("#css > p").css("color", "lightcoral");
    });

    $("#btn-css2").click(()=>{
        $("#css > p").css("font-size", "1.25rem");
    });

    $("#btn-css3").click(()=>{
        $("#css > p").css({"color":"lightcoral", "font-size":"1.25rem"});
    });*/



/*    $("#").click(()=>{

    });*/

});



//this is plain JavaScript. Later on, we'll learn how to do it with JQuery
const url = "https://api.thecatapi.com/v1/images/search";
const section = document.querySelector(".container");
window.addEventListener("load", getRandomCats);

randomCatPhoto = (json) => {
  let photo = json[0].url;
  section.classList.add("cats");

  let image = document.createElement("img");
  image.src = photo;
  image.classList.add("random_cats");
  image.alt = photo;
  section.appendChild(image);
};

async function getRandomCats() {
  section.innerHTML = "";
  try {
    const response = await fetch(url);
    const json = await response.json();
    return randomCatPhoto(json);
  } catch (e) {
    console.log("This is an error:"+e);
  }
}