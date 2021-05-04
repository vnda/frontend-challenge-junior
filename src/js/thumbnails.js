const swiperThumbs = new Swiper('.swiper-container-thumbnails', {
    loop: true,
    slidesPerView: 6,
    spaceBetween: 10,
    breakpoints: {
        768: { //$medium
            slidesPerView: 6,
        },
        585: { //$small
            slidesPerView: 5,
        },
        285: {
            slidesPerView: 4,
        }
    },
    slidesPerGroup: 1,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});