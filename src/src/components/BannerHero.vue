<template>
  <div id="banner-hero">
    <div class="hero-image"></div>
    <div class="icons-section">
      <div>
        <IconCom name="Filtro" filename="filter.svg" />
      </div>
      <div>
        <IconCom name="Nuvem" filename="cloud.svg" />
      </div>
      <div>
        <IconCom name="Agenda" filename="date.svg" />
      </div>
      <div>
        <IconCom name="Alegria" filename="sentiment.svg" />
      </div>
    </div>
  </div>
</template>

<script>
import IconCom from './IconCom.vue';

export default {
  name: 'BannerHero',
  components: {
    IconCom,
  },
  data: () => ({
    saibaMais: true,
  }),

};
</script>

<style scoped lang="scss">

  .banner-hero {
    background-color: $cultured;
  }
  .hero-image {
    height: 75vh;
    background-position: center center;
    background-size: cover;
    width: 100%;
    background-image: url($banner2);
    filter:saturate(0.7);
  }

  .icons-section {
    padding: 4rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    width: 70%;
    margin: 0 auto;
  }

// medias queries
  @media (max-width: $md) {
    .hero-image {
      height: 50vh
    }
    .icons-section {
      grid-template-columns: 1fr 1fr;
      padding: 1rem;
      width: 90%;
    }
  }
</style>
