<template>
 <nav>
   <NavMobile :style="{display: menuMobile.display}" @close-menu="closingMenu" />
   <div class="navbar">
    <span class="logo">LOGO</span>
    <ul class="menu-list">
      <NavbarItem item="Home"/>
      <NavbarItem item="Serviços" target="#icon-com"/>
      <NavbarItem item="Portfólio" target="#second-section"/>
      <NavbarItem item="Sobre nós" target="#insta-section"/>
      <NavbarItem item="Contato" target="#main-footer"/>
    </ul>
    <div class="icons-container">
      <img src="../assets/images/search.svg" alt="" width="30">
      <img class="icon-2" src="../assets/images/shopping.svg" alt="" width="30">
      <img class="icon-3" src="../assets/images/account.svg" alt="" width="30">
    </div>
    <div class="menu-button" :style="{opacity: menuMobile.openButton}"  @click="openMenu">
      <img src="../assets/images/menu.svg" alt="" width="30">
    </div>
   </div>
 </nav>
</template>

<script>
import NavMobile from './NavMobile.vue';
import NavbarItem from './NavbarItem.vue';

export default {
  name: 'Navbar',
  components: {
    NavMobile,
    NavbarItem,
  },
  data: () => ({
    underlineAnime: false,
    menuMobile: {
      display: 'none',
      openButton: 1,
    },
  }),
  methods: {
    openMenu() {
      this.menuMobile.openButton = 0;
      this.menuMobile.display = 'block';
    },
    closingMenu() {
      this.menuMobile.openButton = 1;
      this.menuMobile.display = 'none';
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.2rem 8rem;
    background-color: $almond;
    width: 100%;
  }

  .logo {
    font-size: 2rem;
    font-weight: bold;
    color: $erlie-black;
    cursor: pointer;
    user-select: none;
  }

  .menu-list {
    list-style: none;
    display: flex;
    width: 50%;
    justify-content: space-evenly;
  }

  .menu-button {
    display: none;
    user-select: none;
  }

  .icon-2, .icon-3 {
    margin-left: 1.5rem;
  }

  img {
    cursor: pointer;
  }

  .underline {
    animation: underline 1s;
  }
  // animation

  @keyframes underline {
    from {width: 0%;}
    to {width: 100%;}
  }

  // media queries
  @media (min-width: 0px) and (max-width: $md) {
    .navbar {
      padding: 1.2rem 2rem;
    }
  }

  @media (max-width: $lg) {
    .menu-list {
      display: none;
    }

    .icons-container {
      display: none;
    }

    .menu-button {
      display: block;
    }
  }
</style>
