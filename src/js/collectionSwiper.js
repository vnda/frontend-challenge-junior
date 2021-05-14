const swiperCollection = new Swiper('.collectionSwiper', {
  grabCursor: true,
  direction: 'horizontal',
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});