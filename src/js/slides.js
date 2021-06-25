var swiper = new Swiper('.swiper-container-1', {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination-1',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next-1',
    prevEl: '.swiper-button-prev-1',
  },
});

var swiper2 = new Swiper('.swiper-container-2', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination-2',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next-2',
    prevEl: '.swiper-button-prev-2',
  },
});