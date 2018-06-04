$(document).ready(function(){
    
    $("#nav_home").click(Event, function(){
        $("html, body").animate({scrollTop : 0}, 3000);
    });
    $("#nav_about").click(Event, function(){
        $("html, body").animate({scrollTop : 2006}, 3000);
    });
    $("#nav_albom").click(Event, function(){
        $("html, body").animate({scrollTop : 4012}, 3000);
    });
    $("#nav_letter").click(Event, function(){
        $("html, body").animate({scrollTop : 5012}, 3000);
    });
    
    $(window).on("scroll", function(){
        if ($(window).scrollTop() < 2006) {
            $("#albom").addClass("off");
            $("#home_text").removeClass("off");
        } else if ($(window).scrollTop() > 2006) {
            $("#home_text").addClass("off");
            $("#albom").removeClass("off");
        }
    });
    
    $("#stop_button").fadeOut();
    $("#play_button").click(Event, function(){
        $(this).fadeOut();
        $("#stop_button").fadeIn();
        $(".play .play_img").addClass("turn");
    });
    $("#stop_button").click(Event, function(){
        $(this).fadeOut();
        $("#play_button").fadeIn();
        $(".play  .play_img").removeClass("turn");
    });
    
    $(".next").click(Event, function(){
        $(".play").animate({
            width: "200px",
            height: "200px",
            top: "80%",
            right: "-15%",
        }, 3000);
        $(".play").animate({
            width: "200px",
            height: "200px",
            top: "80%",
            right: "-15%",
        }, 3000);
        $(".play").animate({
            width: "200px",
            height: "200px",
            top: "80%",
            right: "-15%",
        }, 3000);
    });
    
    $(".prev").click(Event, function(){
    });

    
    var musicArry = [];
    for(var i = 0; i<=5; i++){
        musicArry[i] = "url(../img/cd_"+i+".png)";
    }
    

});