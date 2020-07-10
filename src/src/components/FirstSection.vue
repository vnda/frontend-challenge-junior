<template>
  <div id="first-section">
    <div class="grid-container">
      <div class="text-container show-on-scroll">
        <p class="first-text">Lorem ipsum dolor sit.</p>
        <h1 class="middle-text">Lorem ipsum dolor sit amet consectetur.</h1>
        <p class="last-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus consequuntur inventore magnam ullam ex, velit reiciendis. Repellendus sequi enim velit, vero, iste accusantium esse unde quia nulla, magni sit sunt necessitatibus totam culpa?</p>
        <img class="arrow-down" src="../assets/images/arrow.svg" alt="">
      </div>
      <div></div>
      <div class="banners-container show-on-scroll">
        <div>
          <FirstSecBanner class="banner-1" link="https://picsum.photos/seed/roi/540/650" />
        </div>
        <div>
          <FirstSecBanner class="banner-2" link="https://picsum.photos/seed/gabe/540/350" />
          <FirstSecBanner class="banner-3" link="https://picsum.photos/seed/tell/540/650" />
        </div>
      </div>
    </div>
    <div class="clear"></div>
  </div>
</template>

<script>
import FirstSecBanner from './FirstSectionBanner.vue';

export default {
  name: 'FirstSection',
  data: () => ({
  }),
  components: {
    FirstSecBanner,
  },
};
</script>

<style scoped lang="scss">
  #first-section {
    background: linear-gradient(180deg, $almond 80vh, $almond-light 10vh);
  }

  .grid-container {
    height: 100%;
    display: grid;
    padding: 2rem 4rem 0rem 4rem;
    grid-template-columns: 2fr 1fr 5fr;
  }

  .text-container {
    font-family: $playfare;
    opacity: 0;
    transform: translateX(20%);
    transition: 800ms;
    position: relative;

    h1 {
      @extend %title;
      margin-bottom: 1.5rem;
      font-size: 2.9rem;
    }

    p {
      font-family: $pt-sans;
    }
  }

  .arrow-down {
    margin-top: 25vh;
    height: 9rem;
  }
  .first-text {
    margin: 4.5rem 0 1.8rem 0.2rem;
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

  .banners-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1.2rem;
    transform: translateY(10%);
    transition: 800ms;
  }

  .banner-1 {
    margin-top: 4.5rem;
  }

  .banner-3 {
    margin-top: 1.2rem;
  }

  //Show on scroll
  .text-container.scroll-effect {
    opacity: 1;
    transform: translateX(0%);
  }

  .banners-container.scroll-effect {
    transform: translateY(0%);
  }

  //media queries
  @media (max-width: $md) {

  #first-section {
    height: 100%;
    background: $almond;
  }
  .grid-container {
    display: block;
    padding: 1.5rem;
  }

  .text-container {
    transform: none;
  }

  .banner-1, .banner-2, .banner-3 {
    margin-top: 1.5rem;
  }

  img {
    display: none;
  }

   .banners-container{
    display: block;
    transform: none;
  }
}

  @media (min-width: $md + 1) and (max-width:$lg) {

  .middle-text {
    font-size: 2.5rem;
  }
  .grid-container {
    display: grid;
    padding: 2rem 2rem 0rem 2rem;
    grid-template-columns: 2fr 0.5fr 5fr;
  }
  }

</style>
