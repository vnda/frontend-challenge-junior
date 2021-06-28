$(function(){

    var jElement = $('.menu-site');

    $(window).scroll(function(){
        if ( $(this).scrollTop() > 30 ){
            jElement.css({
                'position':'fixed'
                
            });
        }else{
            jElement.css({
                'position':'relative',
                'top':'auto',
                'box-shadow':'none'
            });
        }
    });

});
