$(function(){ 
    $("#header").load("/src/views/common/header.html"); 
 }); 
$(function(){ 
    $("#footer").load("/src/views/common/footer.html"); 
});  
$(document).ready(function() {
    const swiper = new Swiper('.swiper-container', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    })
});

$(document).ready(function() {
    const swiper = new Swiper('.products-mobile ', {
        slidesPerView: 2,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        }
    );
});
