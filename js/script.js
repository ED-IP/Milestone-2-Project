$(".img-col-text").hover(function(){
    $(this).siblings().first().css("color", "orange").css("font-size", "55px").css("width: 100px;").css("height: 100px;").css("border", "none");
    },
    function(){
        $(this).siblings().first().css("color", "black").css("font-size", "35px").css("width", "70px").css("height", "70px").css("border", "2px solid");
 });
    
