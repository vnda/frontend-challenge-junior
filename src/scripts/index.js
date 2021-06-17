const carouselFullbanner = new Swiper('.carousel-fullbanner', {
    loop: false,
    direction: 'horizontal',
    transitionTime: 200,

    slidesPerView: 1,
    spaceBetween: 0,
    speed: 2000,

    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});

const carouselInstagram = new Swiper('.carousel-instagram', {
    loop: false,
    direction: 'horizontal',
    transitionTime: 200,

    slidesPerView: 1,
    spaceBetween: 10,
    speed: 2000,

    breakpoints: {
        485: {
            slidesPerView: 2,
            spaceBetween: 10
        },
    },

    autoplay: {
        delay: 2000,
        disableOnInteraction: false
    }
});

const carouselMini = new Swiper('.carousel-mini', {
    loop: false,
    direction: 'horizontal',
    transitionTime: 200,

    slidesPerView: 1,
    spaceBetween: 5,
    speed: 2000,

    breakpoints: {
        485: {
            slidesPerView: 2,
            spaceBetween: 5
        },
        576: {
            slidesPerView: 3,
            spaceBetween: 5
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 10
        },
    },

    autoplay: {
        delay: 2000,
        disableOnInteraction: false
    },

    navigation: {
        nextEl: '.elnext',
        prevEl: '.elprev',
    }
});
