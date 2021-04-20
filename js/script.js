$(".img-col-text").hover(function () {
        $(this).siblings().first().css("color", "rgb(220, 3, 3)").css("font-size", "55px").css("border", "none");
    },
    function () {
        $(this).siblings().first().css("color", "black").css("font-size", "35px").css("border", "2px solid");
    });

$(".img-col").hover(function () {
        $(this).css("width", "110%").css("height", "505px");
    },
    function () {
        $(this).css("width", "100%").css("height", "500px");
    });