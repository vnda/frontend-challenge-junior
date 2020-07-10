<template>
  <div id="app">
    <Navbar />
    <main>
      <BannerHero />
      <FirstSection />
      <SecondSection />
      <InstaSection />
      <MainFooter />
    </main>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import BannerHero from './components/BannerHero.vue';
import FirstSection from './components/FirstSection.vue';
import SecondSection from './components/SecondSection.vue';
import InstaSection from './components/InstaSection.vue';
import MainFooter from './components/MainFooter.vue';
import showOnScroll from './assets/showOnScroll';

export default {
  name: 'App',
  components: {
    Navbar,
    BannerHero,
    FirstSection,
    SecondSection,
    InstaSection,
    MainFooter,
  },
  mounted() {
    showOnScroll('.show-on-scroll', 'scroll-effect');
  },
};
</script>

<style lang="scss">
@import './assets/scss/global.scss';
</style>
