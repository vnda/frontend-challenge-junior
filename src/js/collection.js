const swiperCollection = new Swiper('.swiper-container-collection', {
    grabCursor: true,
    direction: 'horizontal',
    loop: true,
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });