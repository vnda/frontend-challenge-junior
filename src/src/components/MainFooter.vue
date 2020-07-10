<template>
  <div id="main-footer">
    <div class="logo-container">
      <hr class="line-1">
      <h1 class="logo">Logo</h1>
      <hr class="line-2">
    </div>

    <div class="menu-container">
      <div class="menu-1">
        <h2>Menu</h2>
        <div class="menus-grid">
          <span>submenu</span>
          <span>submenu</span>
          <span>submenu</span>
          <span>submenu</span>
        </div>
      </div>
      <div class="menu-2">
        <h2>Menu</h2>
        <div class="input-container">
          <input type="email" name="email" id="email-input" placeholder="Email" autocomplete="off">
          <button>Enviar</button>
        </div>
      </div>
      <div class="menu-3">
        <div class="facebook-container"><img src="../assets/images/facebook.png" alt="facebook" width="20"><span>facebook</span></div>
        <div class="instagram-container"><img src="../assets/images/instagram.png" alt="facebook" width="23"><span>instagram</span></div>
      </div>
    </div>
    <div class="vnda-txt">
      <p>@Vnda - Tecnologia para Ecommerce - CNPJ 00.0000.000/0001-00</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainFooter',
};
</script>

<style scoped lang="scss">

  #main-footer {
    margin-top: 3rem;
    color: $erlie-black;
    font-family: $playfare;
  }

  .logo-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  hr {
    width: 80%;
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid $erlie-black;
  }

  .logo {
    font-size: 2.4rem;
  }

  .line-1 {
    margin-right: 1rem;
  }

  .line-2 {
    margin-left: 1rem;
  }

  .menu-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 70%;
    margin: 0 auto;
    padding: 4rem 0 4rem 0;
  }

  .menus-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 50%;
    margin-top: 0.3rem;
  }

  .menu-1, .menu-3 {
    display: flex;
    flex-direction: column;
  }

  .menu-3 {
    align-items: center;
    justify-content: center;
  }

  .facebook-container, .instagram-container {
    display: flex;
    align-items: center;
    margin-top: 0.3rem;
  }

  .facebook-container {
    cursor: pointer;
    img {
      margin-left: -10px;
    }
    span {
      margin-left: 5px;
    }
  }

  .instagram-container {
    cursor: pointer;
    span {
      margin-left: 5px;
    }
  }

  .input-container {
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    border-bottom: 1px solid $erlie-black;
  }

  #email-input {
    border: none;
    font-size: 1.0rem;
    margin-top: 0.5rem;
    padding: 0.5rem 0;
    margin-left: 0.2rem;
    width: 80%;
    background-color: $almond-light;
  }

  #email-input:focus {
    border: none;
  }

  button {
    position: absolute;
    top: 0;
    right: 0.5rem;
    height: 2.4rem;
    z-index: 2;
    border: none;
    top: 2px;
    cursor: pointer;
    color: $erlie-black;
    background-color: $almond-light;
  }

  .vnda-txt {
    padding: 1.5rem 0 2rem 0;
    p {
      text-align: center;
      font-style: italic;
    }
  }

  @media (max-width: $md) {
  .menu-container {
    display: grid;
    grid-template-columns: 1fr;
    width: 80%;
    margin: 0 auto;
    padding: 4rem 0 1rem 0;
    gap: 1.5rem;
  }

 .facebook-container {
    img {
      margin-left: -8px;
    }
  }
  .vnda-txt {
    padding-bottom: 1rem;
  }
}

  @media (min-width: $md + 1) and (max-width: $lg) {
    .facebook-container {
        img {
          margin-left: -7.5px;
        }
      }
  }
</style>
