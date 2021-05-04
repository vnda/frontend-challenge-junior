const mainSwiper = new Swiper('.swiper-container-main', {
  direction: 'horizontal',
  loop: true,
  allowTouchMove: false,
  effect: 'fade',
  speed: 1300,
  autoplay: {
    delay: 1500,
    disableOnInteraction: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

const banner = document.querySelector(".fullbanner");
banner.addEventListener("mouseover", ()=> mainSwiper.autoplay.stop())
banner.addEventListener("mouseleave", ()=> mainSwiper.autoplay.start())