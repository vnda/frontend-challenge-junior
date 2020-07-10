<template>
  <div id="insta-post">
    <picture>
      <source media="(max-width: 1024px)" :srcset="`https://picsum.photos/seed/${source}/600/600`">
      <img :src="`https://picsum.photos/seed/${source}/800/800`" :alt="`${source}`">
    </picture>
  </div>
</template>

<script>
export default {
  name: 'InstaPost',
  props: ['source'],
};
</script>

<style scoped lang="scss">
  img {
    width: 100%;
    border: 1px solid darken($color: $cultured, $amount: 7);
    box-shadow: 5px 4px 14px -9px rgba(0,0,0,0.8);
    transition: 200ms;
  }

  img:hover {
    box-shadow: 10px 10px 14px -9px rgba(0,0,0,0.9);
    transform: scale(1.02);
  }

    @media (max-width: $md) {
  img {
    width: 100%;
    border: 1px solid darken($color: $cultured, $amount: 7);
    box-shadow: none;
    transition: 200ms;
  }
  img:hover {
    box-shadow: none;
    transform: none;
  }
  }
</style>
