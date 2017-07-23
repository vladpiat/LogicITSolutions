$(function () {

    // $('body').fadeOut();
    $('ul.nav-mnu li.dropdown').hover(function () {
        if (window.innerWidth > 1199){
            $(this).find('.dropdown-menu').stop(true, true).delay(50).fadeIn(250);
        }
        
    }, function () {
        if (window.innerWidth > 1199){
            $(this).find('.dropdown-menu').stop(true, true).delay(50).fadeOut(300);
        };
    });

    $('.main-title-wrap').css({paddingTop: wrapperHeight()});
    
});

function wrapperHeight(){
        var windowHeigth = window.innerHeight;
        var maintitleHeigth = $('.main-title-wrap').height();
        var calcHeight = ((windowHeigth - maintitleHeigth) / 2 );
        return calcHeight<120 ? 120 : calcHeight
    }

$(window).resize(function(){
    $('.main-title-wrap').css({paddingTop: wrapperHeight()});
})