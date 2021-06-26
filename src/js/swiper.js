const hero = new Swiper('.hero-slider', {
  slidesPerView: 1,
  loop: true,
  grabCursor: true,
  autoplay: true,
  grabCursor: true,
  pagination: {
    el: '.hero-slider .swiper-pagination'
  },
  navigation: {
    nextEl: '.hero-slider .swiper-button-next',
    prevEl: '.hero-slider .swiper-button-prev',
  }
})

const pitBar = new Swiper('.pitbar-slider', {
  slidesPerView: 6,
  spaceBetween: 15,
  loop: true,
  grabCursor: true,
  pagination: {
    el: '.pitbar-slider .swiper-pagination'
  },
  breakpoints: {
    100: {
      slidesPerView: 1,
    },
    300: {
      slidesPerView: 1.8,
    },
    480: {
      slidesPerView: 3,
    },
    640: {
      slidesPerView: 4,
    },
    1100: {
      slidesPerView: 6,
      enabled: false
    }
  }
})

var swiper = new Swiper('.sectionwithslider-slider', {
  slidesPerView: 1,
  loop: true,
  grabCursor: true,
  autoplay: true,
  centeredSlides:true,
  navigation: {
    nextEl: '.sectionwithslider-slider .swiper-button-next',
    prevEl: '.sectionwithslider-slider .swiper-button-prev',
  }
})