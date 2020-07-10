<template>
  <div id="swiper-com">
    <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <picture>
              <source media="(max-width: 768px)" srcset="https://picsum.photos/seed/isa/500/550">
              <img src="https://picsum.photos/seed/isa/1000/550" alt="image">
            </picture>
          </div>
          <div class="swiper-slide">
            <picture>
              <source media="(max-width: 768px)" srcset="https://picsum.photos/seed/be/500/550">
              <img src="https://picsum.photos/seed/be/1000/550" alt="image">
            </picture>
          </div>
          <div class="swiper-slide">
            <picture>
              <source media="(max-width: 768px)" srcset="https://picsum.photos/seed/lla/500/550">
              <img src="https://picsum.photos/seed/lla/1000/550" alt="image">
            </picture>
          </div>
        </div>
        <div class="swiper-pagination"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
    </div>
  </div>
</template>

<script>
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';

Swiper.use([Navigation, Pagination]);

export default {
  name: 'SwiperCom',
  mounted() {
    // eslint-disable-next-line no-unused-vars
    const mySwiper = new Swiper('.swiper-container', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
    });
  },
};
</script>

<style scoped lang="scss">
  #swiper-com {
    width: 100%;
  }

  #swiper-container {
    width: 100%;
  }
  img {
    width: 100%;
    border-radius: 3px;
  }
</style>
