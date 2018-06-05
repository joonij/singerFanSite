$(document).ready(function(){
    
//    nav button
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
    
    
//    fixed display
    $(window).on("scroll", function(){
        if ($(window).scrollTop() < 2006) {
            $("#albom").addClass("off");
            $("#home_text").removeClass("off");
        } else if ($(window).scrollTop() > 2006) {
            $("#home_text").addClass("off");
            $("#albom").removeClass("off");
        }
    });
    
    
    //    music play
    var audio;
    function audio_list() {
        if ($("#cd_list > div").eq(0).hasClass("play")){
            audio = new Audio("audio/Troye Sivan - Happy Little Pill.mp3");
        } else if ($("#cd_list > div").eq(1).hasClass("play")) {
            audio = new Audio("audio/Troye Sivan - for him..mp3");
        } else if ($("#cd_list > div").eq(2).hasClass("play")) {
            audio = new Audio("audio/Troye Sivan - YOUTH.mp3");
        } else if ($("#cd_list > div").eq(3).hasClass("play")) {
            audio = new Audio("audio/Troye Sivan - Fools.mp3");
        } else if ($("#cd_list > div").eq(4).hasClass("play")) {
            audio = new Audio("audio/Troye Sivan - WILD.mp3");
        }
    }
    $("#stop_btn").css("display","none");
    $("#play_btn").click(Event, function(){
        audio_list();
        $(this).css("display","none");
        $("#stop_btn").css("display","block");
        $(".play .cd_img").addClass("turn");
        audio.play();
        $("#stop_btn").click(Event, function(){
            $(this).css("display","none");
            $("#play_btn").css("display","block");
            $(".play .cd_img").removeClass("turn");
            audio.pause();
        });
    });
    
    
//    albom img change
    $("#cd_list > div").eq(0).addClass("play");
    $("#cd_list > div").eq(1).addClass("next");
    $("#cd_list > div").eq(4).addClass("prev");
/*    for(var i=0; i<5 ;i++){
       if( $("#cd_list > div").eq(i).hasClass("play")){
           var j=4 0 1 2 3
           $("#cd_list > div").eq(i+4).removeClass("prev");
           $("#cd_list > div").eq(i).attr("class", "prev");
           $("#cd_list > div").eq(i+1).attr("class", "play");
           $("#cd_list > div").eq(i+2).attr("class", "next");
       }
    }*/
    $("#next_btn").click(Event, function(){
        audio_list();
        $("#stop_btn").css("display","none");
        $("#play_btn").css("display","block");
        $(".play .cd_img").removeClass("turn");
        audio.pause();
        if ($("#cd_list > div").eq(0).hasClass("play")){
            $("#cd_list > div").eq(4).removeClass("prev");
            $("#cd_list > div").eq(0).attr("class", "prev");
            $("#cd_list > div").eq(1).attr("class", "play");
            $("#cd_list > div").eq(2).attr("class", "next");
        } else if ($("#cd_list > div").eq(1).hasClass("play")) {
            $("#cd_list > div").eq(0).removeClass("prev");
            $("#cd_list > div").eq(1).attr("class", "prev");
            $("#cd_list > div").eq(2).attr("class", "play");
            $("#cd_list > div").eq(3).attr("class", "next");
        } else if ($("#cd_list > div").eq(2).hasClass("play")) {
            $("#cd_list > div").eq(1).removeClass("prev");
            $("#cd_list > div").eq(2).attr("class", "prev");
            $("#cd_list > div").eq(3).attr("class", "play");
            $("#cd_list > div").eq(4).attr("class", "next");
        } else if ($("#cd_list > div").eq(3).hasClass("play")) {
            $("#cd_list > div").eq(2).removeClass("prev");
            $("#cd_list > div").eq(3).attr("class", "prev");
            $("#cd_list > div").eq(4).attr("class", "play");
            $("#cd_list > div").eq(0).attr("class", "next");
        } else if ($("#cd_list > div").eq(4).hasClass("play")) {
            $("#cd_list > div").eq(3).removeClass("prev");
            $("#cd_list > div").eq(4).attr("class", "prev");
            $("#cd_list > div").eq(0).attr("class", "play");
            $("#cd_list > div").eq(1).attr("class", "next");
        }
    });
    $("#prev_btn").click(Event, function(){
        if ($("#cd_list > div").eq(0).hasClass("play")){
            $("#cd_list > div").eq(1).removeClass("next");
            $("#cd_list > div").eq(0).attr("class", "next");
            $("#cd_list > div").eq(4).attr("class", "play");
            $("#cd_list > div").eq(3).attr("class", "prev");
        } else if ($("#cd_list > div").eq(4).hasClass("play")) {
            $("#cd_list > div").eq(0).removeClass("next");
            $("#cd_list > div").eq(4).attr("class", "next");
            $("#cd_list > div").eq(3).attr("class", "play");
            $("#cd_list > div").eq(2).attr("class", "prev");
        } else if ($("#cd_list > div").eq(3).hasClass("play")) {
            $("#cd_list > div").eq(4).removeClass("next");
            $("#cd_list > div").eq(3).attr("class", "next");
            $("#cd_list > div").eq(2).attr("class", "play");
            $("#cd_list > div").eq(1).attr("class", "prev");
        } else if ($("#cd_list > div").eq(2).hasClass("play")) {
            $("#cd_list > div").eq(3).removeClass("next");
            $("#cd_list > div").eq(2).attr("class", "next");
            $("#cd_list > div").eq(1).attr("class", "play");
            $("#cd_list > div").eq(0).attr("class", "prev");
        } else if ($("#cd_list > div").eq(1).hasClass("play")) {
            $("#cd_list > div").eq(2).removeClass("next");
            $("#cd_list > div").eq(1).attr("class", "next");
            $("#cd_list > div").eq(0).attr("class", "play");
            $("#cd_list > div").eq(4).attr("class", "prev");
        }
    });
    
    
//    letter btn
    $("#letter input").click(function(){
        var result = confirm("전송하시겠습니까?");
        if(result) { //yes 
            location.reload();
        } else { //no
        }
    });
    
    
//    sns img
    $(".sns img").eq(0).mouseover(function(){
        $(this).attr("src", "img/youtube_on.png");
    });
    $(".sns img").eq(0).mouseout(function(){
        $(this).attr("src", "img/youtube_off.png");
    });
    $(".sns img").eq(1).mouseover(function(){
        $(this).attr("src", "img/Facebook_on.png");
    });
    $(".sns img").eq(1).mouseout(function(){
        $(this).attr("src", "img/Facebook_off.png");
    });
    $(".sns img").eq(2).mouseover(function(){
        $(this).attr("src", "img/instagram_on.png");
    });
    $(".sns img").eq(2).mouseout(function(){
        $(this).attr("src", "img/instagram_off.png");
    });
    $(".sns img").eq(3).mouseover(function(){
        $(this).attr("src", "img/twitter_on.png");
    });
    $(".sns img").eq(3).mouseout(function(){
        $(this).attr("src", "img/twitter_off.png");
    });
});
