$(()=>{
    $("#filtering").click((evento)=>{
        switch (evento.target.id){
            case "btn-first":
                $("#filtering ul li").first().addClass("borde-rojo");
                break;
            case "btn-last":
                $("#filtering ul li").last().addClass("borde-rojo");
                break;
            case "btn-eq1":
                $("#filtering ul li").eq(1).addClass("borde-rojo");
                break;
            case "btn-filter-even":
                $("ul li").filter(":even").addClass("borde-rojo");
                break;
            case "btn-filter-function":
                $("ul li").filter(function(indice){
                    return (indice%2!==0);
                }).addClass("borde-rojo");
                break;
            case "btn-has":
                $("li").has("ul").addClass("borde-rojo");
                break;
            case "btn-not":
                $("ul li").not(":even").addClass("borde-rojo");
                break;        
            case "btn-not-function":
                $("ul li").not(function(indice){
                    return (indice%2!==0);
                }).addClass("borde-rojo");
                break;   
            case "btn-slice02":
                $("ul li").slice(0,2).addClass("borde-rojo");
                break;
            case "btn-slice-3-2":
                $("ul li").slice(-3,-2).addClass("borde-rojo");
                break;
    

        }
    });


});