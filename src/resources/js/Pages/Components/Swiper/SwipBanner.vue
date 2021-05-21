<template>
    <div>
        <swiper
            :spaceBetween="0"
            :centeredSlides="true"
            class="parallax-slider"
            id="swiper_banner"
        >
            <swiper-slide
                class="slides"
                v-for="(image, index) in images"
                :key="index"
            >
                <img class="banner_imgs" :src="image" alt="" />
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/swiper.scss";

import "swiper/components/navigation/navigation.min.css";

// import Swiper core and required modules
import SwiperCore, { Navigation } from "swiper/core";

// install Swiper modules
SwiperCore.use([Navigation]);

import Button from "../SVGs/Button";
export default {
    components: {
        Swiper,
        SwiperSlide,
        carouselbutton: Button,
    },
    data() {
        return {
            images: {
                id1: "./images/pictures/image3.jpg",
                id2: "./images/pictures/image4.jpg",
                id3: "./images/pictures/image5.jpg",
                id4: "./images/pictures/image6.jpg",
            },
        };
    },
    methods: {},
};
</script>

<style lang="scss" scoped>
@import "resources/css/sass/allImports";

div {
    #swiper_banner {
        width: 35vw;
        height: 20vw;

        .slides {
            .banner_imgs {
                width: 100%;
            }
        }
    }
}

//+----------------------------------------+
//|            RESPONSIVIDADE              |
//+----------------------------------------+

@media (max-width: 800px) {
    div {
        #swiper_banner {
            width: 50vw;
            height: 35vw;
        }
    }
}
@media (max-width: 600px) {
     div {
        #swiper_banner {
            width: 70vw;
            height: 48vw;
        }
    }
}
@media (max-width: 500px) {
}
@media (max-width: 350px) {
    div {
        #swiper_banner {
            width: 82vw;
            height: 54vw;
        }
    }
}
</style>
