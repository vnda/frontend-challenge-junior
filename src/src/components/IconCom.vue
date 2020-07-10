<template>
  <div id="icon-com" @mouseenter="showText">
    <div class="icon-container">
      <span> {{name}} </span>
      <div class="icon-circle">
        <img class="icon-image" :src="require(`@/assets/images/${filename}`)" :alt="filename">
      </div>
        <span class="bottom-text" :class="{'show-bottom': showBottom}">saiba mais</span>
      </div>
  </div>
</template>

<script>
export default {
  name: 'iconCom',
  props: ['name', 'filename'],
  data: () => ({
    showBottom: false,
  }),
  methods: {
    showText() {
      this.showBottom = true;
    },
  },
};
</script>

<style scoped lang="scss">

  #icon-com {
    justify-content: center;
    display:flex;
  }
  .icon-image {
    width: 120px;
    border-radius: 50%;
    background-color: $erlie-black;
    padding: 1.5rem;
    cursor: pointer;
    transition: 500ms;
  }

  .icon-image:hover {
   background-color: lighten($color: $erlie-black, $amount: 8);
  }

  span {
    text-align: center;
    display: block;
    margin-bottom: 0.5rem;
    font-family: $pt-sans;
    letter-spacing: 1px;
    color: $erlie-black;
    text-transform: uppercase;
  }

  .bottom-text {
    margin-top: 0.2rem;
    font-size: 0.7rem;
    opacity: 0;
  }

  .show-bottom {
    opacity: 1;
    animation: anime 500ms;
  }

//animation
  @keyframes anime {
    from {opacity: 0; transform: translateY(50%);}
    to {opacity: 1; transform: translateY(0%);}
  }

//media queries
  @media (max-width: $md) {
    .icon-image {
      padding: 1rem;
      width: 80px;
    }
  }
</style>
