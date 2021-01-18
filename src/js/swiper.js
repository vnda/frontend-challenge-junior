var heroSwiper = new Swiper('.hero-unit .swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    autoplay: {
        delay: 4000
    },
    disableOnInteraction: true,
    loop: true,
    effect: 'fade',

  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  })

var featuredProductSwiper = new Swiper('.product-gallery .swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    effect: 'cube',
    autoplay: {
        delay: 3000
    }
  
  })