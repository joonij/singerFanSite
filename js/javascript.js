$(document).ready(function(){
    
    //    nav
    
    $(window).scroll(function(){
        var scroll = $(document).scrollTop();
        if(scroll < 1000){
            $(".albom_li").css("opacity", "0");
            $(".letter_li").css("opacity", "0");
            $(".home_li").css("opacity", "1");
        } else if(scroll < 1790) {
            $(".home_li").css("opacity", "0");
            $(".letter_li").css("opacity", "0");
            $(".albom_li").css("opacity", "1");
        } else if(scroll >= 1790) {
            $(".home_li").css("opacity", "0");
            $(".albom_li").css("opacity", "0");
            $(".letter_li").css("opacity", "1");
        }
    });
    
    //    music play
    var music;
    function audio_list() {
        for(i = 0; i < 5; i++){
            if ($(".cd_list > div").eq(i).hasClass("play")){
                var a = i+1;
                music = document.getElementById("cd_"+a+"_music");
            }
        }
    }
    
    function music_start() {
        audio_list()
        $(".start_btn").css("display","none");
        $(".stop_btn").css("display","block");
        $(".waves").addClass("music_play");
        $(".waves").stop().animate({left : "-20%"}, 1000);
        music.play();
        $(".stop_btn").click(Event, function(){
            $(this).css("display","none");
            $(".start_btn").css("display","block");
            $(".waves").removeClass("music_play");
            $(".waves").stop().animate({left : "0"}, 500);
            music.pause();
        });
    };

    $(".stop_btn").css("display","none");
    $(".start_btn").click(Event, function(){
        music_start();
    });
    
//    albom img change
    $(".cd_list > div").eq(0).addClass("play");
    $(".cd_list > div").eq(1).addClass("next");
    $(".cd_list > div").eq(4).addClass("prev");

    $(".cd_area").click(Event, function(){
        if($(this).parent().hasClass("play")){
            if($(".waves").hasClass("music_play") == false){
                music_start();
            } else {
                $(".stop_btn").css("display","none");
                $(".start_btn").css("display","block");
                $(".waves").removeClass("music_play");
                $(".waves").animate({left : "0"}, 500);
                music.pause();
            }
        }
        else if($(this).parent().hasClass("next")){
            $(".stop_btn").css("display","none");
            $(".start_btn").css("display","block");
            $(".waves").removeClass("music_play");
            $(".waves").stop().animate({left : "0"}, 500);
            audio_list();
            
            var tempSelector;
            $(".cd_list > div").each(function(){
                $(this).hasClass("play") ? tempSelector = $(this): "";
            });

            tempSelector.prev().length > 0 ? tempSelector.prev().removeClass("prev") : $(".cd_list > div").eq(4).removeClass("prev");
            tempSelector.attr("class", "prev");
            tempSelector.next().attr("class","play");
            
            if(tempSelector.next().next().length > 0){
                tempSelector.next().next().attr("class","next");
            } else if(tempSelector.next().length > 0){
                $(".cd_list > div").eq(0).attr("class", "next")
            } else {
                $(".cd_list > div").eq(0).attr("class","play");
                $(".cd_list > div").eq(1).attr("class","next");
            }
            
            music.pause();
            return false;
        } else if ($(this).parent().hasClass("prev")) {
            $(".stop_btn").css("display","none");
            $(".start_btn").css("display","block");
            $(".waves").removeClass("music_play");
            $(".waves").stop().animate({left : "0"}, 500);
            audio_list();
            
            var tempSelector;
            $(".cd_list > div").each(function(){
                $(this).hasClass("play") ? tempSelector = $(this): "";
            });
            
            tempSelector.next().length > 0 ? tempSelector.next().removeClass("next") : $(".cd_list > div").eq(0).removeClass("next");
            tempSelector.attr("class", "next");
            tempSelector.prev().attr("class", "play");
            
            if(tempSelector.prev().prev().length > 0){
                tempSelector.prev().prev().attr("class", "prev")
            } else if (tempSelector.prev().length > 0 ){
                $(".cd_list > div").eq(4).attr("class", "prev")
            } else {
                $(".cd_list > div").eq(4).attr("class", "play")
                $(".cd_list > div").eq(3).attr("class", "prev")
            }
            music.pause();
            return false;
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
