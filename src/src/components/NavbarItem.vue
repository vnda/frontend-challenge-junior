<template>
    <li>
      <a @mouseenter="animate = true" @mouseleave="animate = false" @click="scrollTo(target)">{{item}}</a>
      <transition name="under">
        <hr v-if="animate">
      </transition>
    </li>
</template>

<script>
export default {
  name: 'NavbarItem',
  props: ['item', 'target'],
  data: () => ({
    animate: false,
  }),
  methods: {
    scrollTo(Tag) {
      return document.querySelector(Tag).scrollIntoView({ behavior: 'smooth' });
    },
  },
};
</script>

<style scoped lang="scss">
li {
  position: relative;
  overflow: hidden;
}

 li a {
    text-decoration: none;
    color: $erlie-black;
    font-size: 1.0rem;
    font-family: $pt-sans;
    font-weight: 400;
    cursor: pointer;
  }

  hr {
    height: 1px;
    border: 0;
    border-top: 1px solid $erlie-black;
    width: 100%;
    margin-top: -1px;
    }

.under-enter-active {
  animation: grow .5s;
}
.under-leave-active {
  animation: shrink .5s;
}

@keyframes grow {
  from {transform: translateX(-100%)}
  to {transform: translateX(0%)}
}

@keyframes shrink {
  from {transform: translateX(-0%)}
  to {transform: translateX(100%)}
}
</style>
