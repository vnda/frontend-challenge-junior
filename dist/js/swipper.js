const swiper = new Swiper('.swiper-container', {
    effect: 'flip',
    grabCursor: true,
    flipEffect: {
        slideShadows: false,
    },
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
    },
})