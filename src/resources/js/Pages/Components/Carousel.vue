<template>
    <section>
        <SwipCar/>
    </section>
</template>

<script>
import SwipCarousel from "./Swiper/SwipCarousel";
export default {
    components:{
        SwipCar: SwipCarousel,
    },
    props:{
        // scrollData: Object,
    }
}
</script>

<style lang='scss' scoped>
// PRATICAMENTE TODO ESTILO ESTÁ EM: 
// resources/js/Pages/Components/Swiper/SwipCarousel.vue
</style>