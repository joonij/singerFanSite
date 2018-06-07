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
    var music;
    function audio_list() {
        if ($("#cd_list > div").eq(0).hasClass("play")){
            music = document.getElementById("cd_1_music"); 
        } else if ($("#cd_list > div").eq(1).hasClass("play")) {
            music = document.getElementById("cd_2_music"); 
        } else if ($("#cd_list > div").eq(2).hasClass("play")) {
            music = document.getElementById("cd_3_music"); 
        } else if ($("#cd_list > div").eq(3).hasClass("play")) {
            music = document.getElementById("cd_4_music"); 
        } else if ($("#cd_list > div").eq(4).hasClass("play")) {
            music = document.getElementById("cd_5_music"); 
        }
    }
    
    
    $("#stop_btn").css("display","none");
    $("#play_btn").click(Event, function(){
        audio_list()
        $(this).css("display","none");
        $("#stop_btn").css("display","block");
        $(".play .cd_img").addClass("turn");
        music.play();
        $("#stop_btn").click(Event, function(){
            $(this).css("display","none");
            $("#play_btn").css("display","block");
            $(".play .cd_img").removeClass("turn");
            music.pause();
        });
    });
    
    
//    albom img change
    $("#cd_list > div").eq(0).addClass("play");
    $("#cd_list > div").eq(1).addClass("next");
    $("#cd_list > div").eq(4).addClass("prev");  
    $("#next_btn").click(Event, function(){
        $("#stop_btn").css("display","none");
        $("#play_btn").css("display","block");
        $(".play .cd_img").removeClass("turn");
        audio_list()
        
        var tempSelector;
        $("#cd_list > div").each(function(){
            $(this).hasClass("play") ? tempSelector = $(this): "";
        });
        
        tempSelector.prev().length > 0 ? tempSelector.prev().removeClass("prev") : $("#cd_list > div").eq(4).removeClass("prev");
        tempSelector.attr("class", "prev");
        tempSelector.next().attr("class","play");
        
        if(tempSelector.next().next().length > 0){
            tempSelector.next().next().attr("class","next");
        } else if(tempSelector.next().length > 0){
            $("#cd_list > div").eq(0).attr("class","next");
        } else {
            $("#cd_list > div").eq(0).attr("class","play");
            $("#cd_list > div").eq(1).attr("class","next");
        }
        music.pause();
        return false;
    });
    $("#prev_btn").click(Event, function(){
        $("#stop_btn").css("display","none");
        $("#play_btn").css("display","block");
        $(".play .cd_img").removeClass("turn");
        audio_list()
        
        var tempSelector;
        $("#cd_list > div").each(function(){
            $(this).hasClass("play") ? tempSelector = $(this): "";
        });
        
        tempSelector.next().length > 0 ? tempSelector.next().removeClass("next") : $("#cd_list > div").eq(0).removeClass("next");
        tempSelector.attr("class", "next");
        tempSelector.prev().attr("class", "play");
        
        if(tempSelector.prev().prev().length > 0){
            tempSelector.prev().prev().attr("class", "prev")
        } else if (tempSelector.prev().length > 0 ){
            $("#cd_list > div").eq(4).attr("class", "prev")
        } else {
            $("#cd_list > div").eq(4).attr("class", "play")
            $("#cd_list > div").eq(3).attr("class", "prev")
        }
        music.pause();
        return false;
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