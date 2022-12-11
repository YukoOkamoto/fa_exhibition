$(function() {
    $('.hamburger').on('click', function(){
        hamburger();
    });
    $('.navi').on('click',function(){
        hamburger();
    });

    $('a[href="#"]').click(function(){
        let href= $(this).attr("href");
        let target = $(href == "#" || href == "" ? 'html' : href);
        let position = target.offset().top;
        $("html, body").animate({scrollTop:position}, 600, "swing");
        return false;
    });

    $('.inview').on("inview", function (event, isInView){
        if (isInView) {
            $(this).stop().addClass("is-active")
        }
    });

    $(window).scroll(function(){
        let scroll = $(window).scrollTop();
        mv_scale(scroll);
        if (scroll > 520){
            $('.header-logo').fadeIn(500);
            $('.hamburger').fadeIn(500);
        } else {
            $('.header-logo').fadeOut(500);
            $('.hamburger').fadeOut(500);
        }
        
        let gallery_position = $('#gallery').offset().top - $(window).height();
        let access_position = $('#access').offset().top - $(window).height();
        if (window.innerWidth > 900) {
            if (scroll > gallery_position){
            if (scroll < access_position){
                $('#side-btn').css({
                    'transform':'rotate(-90deg) translateY(0)'
                });
              } else {
                $('#side-btn').css({
                    'transform':'rotate(-90deg) translateY(60px)'
                });
              }
            } else {
                $('#side-btn').css({
                    'transform':'rotate(-90deg) translateY(60px)'
                });
            }
        }

        let contact_position = $('#contact').offset().top - $(window).height();
        if(scroll > access_position){
            if(scroll < contact_position){
                $('.access-background').fadeIn(500);
            } else {
                $('.access-background').fadeOut(500);
            }
        } else {
            $('.access-background').fadeOut(500);
        }
    });

    $(window).on('load resize', function() {
        let scroll = $(window).scrollTop();
        mv_scale(scroll);
    });
});

function hamburger() {
    $('.hamburger').toggleClass('is-active');
    if ($('.hamburger').hasClass('is-active')) {
        $('.navi').addClass('is-active');
    } else {
        $('.navi').removeClass('is-active');
    }
}

function mv_scale(scroll) {
    if (window.innerWidth > 900) {
        $('#mainvisual img').css({
            'width': 100/3 + scroll/10  + '%'
        });
    } else {
        $('#mainvisual img').css({
            'width': 100 - scroll/10  + '%'
        });
    }
}