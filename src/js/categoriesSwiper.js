var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    loop: true,
    spaceBetween: 0,
    slideNextClass: ".swiper-button-next-color",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      500: {
        slidesPerView: 2,
        spaceBetween: 20
      },

      665: {
        slidesPerView: 3,
        spaceBetween: 20
      },

      1300: {
        slidesPerView: 5,
        spaceBetween: 0,
      }
    }

  });