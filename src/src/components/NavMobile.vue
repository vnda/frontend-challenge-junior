<template>
  <div id="nav-mobile" :class="{'open-anime': !closing, 'close-anime': closing}">
    <div class="close-button" @click="emitClose()">
      <img src="../assets/images/close.svg" alt="" width="40" :class="{'rotate-button': closing}">
    </div>
    <div class="menu">
     <span>Home </span>
     <span @click="scrollTo('#icon-com')">Serviços</span>
     <span @click="scrollTo('#second-section')">Compre</span>
     <span @click="scrollTo('#insta-section')">História</span>
     <span @click="scrollTo('#main-footer')">Contato</span>
     <span class="section2" style="margin-top: 0.8rem">Pesquisar</span>
     <span class="section2">Carrinho</span>
     <span class="section2">Usuário</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavMobile',
  data: () => ({
    closing: false,
  }),
  methods: {
    emitClose() {
      this.closing = true;
      setTimeout(() => {
        this.$emit('close-menu');
        this.closing = false;
      }, 800);
    },
    scrollTo(Tag) {
      document.querySelector(Tag).scrollIntoView({ behavior: 'smooth' });
      this.emitClose();
    },
  },
};
</script>

<style scoped lang="scss">
  #nav-mobile {
    height: 100vh;
    width: 100%;
    background-color: $cultured;
    position: fixed;
    z-index: 100;
    display: none;
  }

  .menu {
    display: flex;
    flex-direction: column;
    align-content: space-between;
    justify-content: center;
    height: 100%;
  }

  span {
    text-align: right;
    display: block;
    font-size: 2.5rem;
    margin: 0.1rem;
    margin-right: 5rem;
    font-weight: bold;
    color: $erlie-black;
  }

  .section2 {
    color: darken($color: $cultured, $amount: 30);
  }

  .close-button {
    position: absolute;
    right: 3vh;
    top: 2vh;
  }

  .open-anime {
    animation: showMenu 600ms ease-in;
  }

  .close-anime {
    animation: closeMenu 900ms;
  }

  .rotate-button {
    animation: rotateButton 800ms ease-out;
  }

// Animation
  @keyframes showMenu {
    from {opacity: 0; height: 0vh;}
    to {opacity: 1; height: 100vh;}
  }
  @keyframes closeMenu {
    from {opacity: 1; height: 100vh;}
    to {opacity: 0; height: 0vh;}
  }

  @keyframes rotateButton {
    from {transform: rotate(180deg);}
    to {transform: rotate(360deg);}
  }

</style>
