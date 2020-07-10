<template>
  <div id="first-sec-banner">
    <img :src="link" alt="banner">
    <div class="container">
      <h3>Lorem, ipsum.</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, corrupti!</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FirstSecBanner',
  props: ['link'],
};
</script>

<style scoped lang="scss">

  #first-sec-banner {
    width: 100%;
    background-color: $cultured;
    border: 1px solid darken($color: $cultured, $amount: 7)
  }

  img {
    width: 100%;
  }

  .container {
    text-align: center;
    padding: 0.5rem;
  }

  h3 {
    font-family: $playfare;
    font-weight: normal;
  }

  p {
    margin: 0.2rem 1rem 1rem 1rem;
    font-family: $pt-sans;
    color: $erlie-black;
  }

</style>
