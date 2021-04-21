// Code to make the icons of the Activity section bigger and recover their initial size when the mouse hover over the text on the column

$(".img-col-text").hover(function () {
        $(this).siblings().first().css("color", "rgb(220, 3, 3)").css("font-size", "55px").css("border", "none");
    },
    function () {
        $(this).siblings().first().css("color", "black").css("font-size", "35px").css("border", "2px solid");
    });

// Code to make the images of the Activity section sighly bigger and recover their initial size when the mouse hover over them

$(".img-col").hover(function () {
        $(this).css("width", "110%").css("height", "505px");
    },
    function () {
        $(this).css("width", "100%").css("height", "500px");
    });



function openWin() {
    myWindow = window.open("privacy_policy.html", "_blank", "width=500, height=800");
}

function closeWin(){
    window.close();
}