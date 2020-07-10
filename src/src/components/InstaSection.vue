<template>
  <div id="insta-section">
    <h1 class="insta-title-phone">@Instadamarca</h1>
    <div class="container-grid">
      <div class="photo-col-1">
        <InstaPost source="lulu" />
      </div>
      <div class="text-col-2">
        <h1 class="insta-title">@Instadamarca</h1>
        <div class="text-container">
          <p class="p-1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto blanditiis quis quidem. Similique, voluptatem dolores veritatis inventore reiciendis nulla ipsum illo animi dolorum fugit corporis nisi nostrum repudiandae tempora voluptate!</p>
          <p class="p-2">Lorem, voluptatem dolores veritatis inventore reiciendis nulla ipsum illo animi dolorum fugit corporis nisi nostrum repudiandae tempora voluptate!</p>
          <p class="author">João Carlos</p>
        </div>
      </div>
      <div class="photo-col-3">
        <InstaPost source="gabriel" />
      </div>
    </div>
  </div>
</template>

<script>
import InstaPost from './InstaPost.vue';

export default {
  name: 'InstaSection',
  components: {
    InstaPost,
  },
};
</script>

<style scoped lang="scss">
  .container-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 3rem;
    padding: 6rem;
  }

  .photo-col-1, .photo-col-3 {
    margin-top: 5rem;
  }

  .insta-title {
    @extend %title;
    margin-bottom: 10rem;
    text-align: center;
    font-size: 2.5rem;
    font-style: italic ;
  }
  .insta-title-phone {
    @extend %title;
    margin-bottom: 1rem;
    text-align: center;
    font-size: 2.3rem;
    font-style: italic;
    display: none;
  }

  .text-container {
    background: $almond;
    font-family: $playfare;
    padding: 3rem;
    height: 70%;
  }
  .p-2 {
    margin-top: 1rem;
  }

  p {
   line-height: 1.36rem;
   font-size: 0.9rem;
   letter-spacing: 1px;
   font-family: $pt-sans;
  }

  .author {
    margin: 1rem 0 1.8rem 0.2rem;
    color: $erlie-black;
    font-size: 0.9rem;
    font-weight: bold;
    font-style: italic;
    font-family: $playfare;
  }

  //Media querias
  @media (max-width: $md) {

  #insta-section {
    background-color: $almond;
    padding-top: 1.2rem;
  }

  .container-grid {
    display: grid;
    grid-template-columns: 1fr;
    column-gap: 0.5rem;
    padding: 1rem;
  }

  .text-container {
    height: 100%;
  }

  .insta-title {
    display: none;
  }

  .insta-title-phone {
    display: block;
  }

  .photo-col-1, .photo-col-3 {
    margin-top: 0rem;
  }
  }

  @media (min-width: $md + 1) and (max-width: $xl) {
  .container-grid {
    column-gap: 1rem;
    padding: 3rem;
  }
  }
</style>
