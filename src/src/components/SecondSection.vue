<template>
  <div id="second-section">
    <hr class="divider">
    <div class="container">
      <div class="image-column show-on-scroll">
        <picture>
          <source media="(max-width: 1024px)" srcset="https://picsum.photos/seed/us/500/500">
          <img src="https://picsum.photos/seed/us/500/750" alt="image">
        </picture>
      </div>
      <div class="text-column show-on-scroll">
        <p class="first-text">Lorem ipsum dolor sit.</p>
        <h1 class="middle-text">Lorem ipsum dolor sit amet consectetur.</h1>
        <p class="last-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus consequuntur inventore magnam ullam ex, velit reiciendis. Repellendus sequi enim velit, vero, iste accusantium esse unde quia nulla, magni sit sunt necessitatibus totam culpa?</p>
        <button class="call-to-action">Peça agora</button>
      </div>
      <div class="swiper-column show-on-scroll">
        <SwiperCom />
      </div>
    </div>
  </div>
</template>

<script>
import SwiperCom from './SwiperCom.vue';

export default {
  name: 'SecondSection',
  components: {
    SwiperCom,
  },
};
</script>

<style scoped lang="scss">

  #second-section {
    margin-top: 3rem;
    background: linear-gradient(90deg, $almond 80%, $almond-light 20%);
  }

  .divider {
    display: none;
  }

  .container {
    display: grid;
    grid-template-columns: 2fr 3fr 5fr;
    padding: 6rem;
  }

  .image-column {
    opacity: 0;
    transform: translateX(-20%);
    transition: 800ms;
  }
  .image-column img {
    width: 100%;
    border: 1px solid darken($color: $cultured, $amount: 7)
  }

  .text-column {
    padding: 0rem 2rem;
    opacity: 0;
    transform: translateY(-20%);
    transition: 800ms;

    h1 {
      @extend %title;
      margin-bottom: 1.5rem;
      font-size: 2.9rem;
    }

    p {
      font-family: $pt-sans;
    }
  }

  .call-to-action {
    background-color: $erlie-black;
    border: none;
    padding: 1rem 3rem;
    color: white;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 0.7rem;
    margin-top: 1rem;
    transition: background-color 300ms;
    cursor: pointer;
  }

  .call-to-action:hover {
    background-color: lighten($color: $erlie-black, $amount: 5);
  }

  .first-text {
    margin: 0rem 0 1.8rem 0.2rem;
    color: $erlie-black;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 0.7rem;
    font-weight: bold;
  }

  .last-text {
    line-height: 1.56rem;
    color: $erlie-black;
    width: 90%;
  }

  .swiper-column {
    display: flex;
    align-items: center;
    width: 100%;
    margin: 0 auto;
    overflow: hidden;
  }

  // Show on scroll
  .image-column.scroll-effect {
    opacity: 1;
    transform: translateX(0%);
  }
  .text-column.scroll-effect {
    opacity: 1;
    transform: translateY(0%);
  }

 // Media queries
 @media (max-width: $md) {

   #second-section {
     background: $almond;
     margin-top: 0;
   }

   .divider {
      display: block;
      width: 50%;
      margin: 0 auto;
      height: 1px;
      border: 0;
      border-top: 1px solid $erlie-black;
   }

    .text-column {
      padding: 0;
    }

   .call-to-action {
     display: block;
     margin: 1.2rem auto 0 auto;
   }

  .container {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 2rem;
    padding: 1.5rem;
  }

   .swiper-column {
    display: flex;
    align-items: center;
    width: 100%;
    margin: 0 auto;
    overflow: hidden;
  }
 }

@media (min-width: $md + 1) and (max-width: $lg) {
   #second-section {
     background: $almond;
   }
  .container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3.5, 0.5fr);
    grid-column-gap: 1rem;
    grid-row-gap: 1.5rem;
    padding: 2.5rem;
  }
  .image-column {
    grid-area: 1 / 1 / 3 / 3;
  }
   .text-column {
    padding: 0;
    grid-area: 1 / 3 / 3 / 5;
  }
  .swiper-column {
    display: block;
    width: 100%;
    margin: 0 auto;
    overflow: hidden;
    grid-area: 3 / 1 / 6 / 5;
  }
}

</style>
