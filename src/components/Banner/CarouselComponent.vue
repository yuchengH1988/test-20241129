<template>
  <div class="carousel-container relative">
    <swiper
      :grabCursor="true"
      :effect="'creative'"
      :creativeEffect="{
        prev: {
          shadow: true,
          translate: [0, 0, -1500],
        },
        next: {
          translate: ['100%', 0, 0],
        },
      }"
      :modules="modules"
      class="mySwiper"
      loop
      :speed="1000"
      @slideChange="onSlideChange"
    >
      <swiper-slide
        v-for="(item, index) in slides"
        :key="index">
        <div class="image-wrapper">
          <img :src="item" :alt="'Slide ' + (index + 1)" />
        </div>
      </swiper-slide>
    </swiper>
  </div>
  <div class="image-wrapper sync-display">
    <img :src="slides[currentIndex]" alt="Sync Slide" />
  </div>
</template>

<script>
import { ref } from "vue";
import { Swiper, SwiperSlide } from 'swiper/vue';


import 'swiper/css';
import 'swiper/css/effect-creative';
import { EffectCreative } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const slides = [
      "/assets/images/blonde_dog.jpeg",
      "/assets/images/red_car.jpeg",
      "/assets/images/statue.jpeg",
      "/assets/images/call_me.jpeg",
      "/assets/images/book.jpeg",
      "/assets/images/tv.jpeg",
      "/assets/images/tv_boot.jpeg",
      "/assets/images/mouse_mask.jpeg",
    ];
    const currentIndex = ref(0);
    const onSlideChange = (swiper) => {
      currentIndex.value = swiper.activeIndex % slides.length;
    };
    return {
      slides,
      modules: [EffectCreative],
      currentIndex,
      onSlideChange,
    };
  },
};
</script>
<style>
.carousel-container {
  z-index: 20;
  padding-top: 259px;
  display: flex;
  justify-content: center;
}

.swiper {
  width: 746px;
  height: 519px;
}

.image-wrapper {
  width: 746px;
  height: 519px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.image-wrapper img {
  max-width: 110%;
  min-height: 417px;
  object-fit: cover;
  object-position: 50% 87px;
}
.sync-display {
  width: 503px;
  height: 417px;
  position:absolute;
  top: 123px;
  right: 50%;
  transform: translate(calc(50% + 400px), 0);
  z-index: 0;
}
.sync-display img {
  max-width: 210%;
  object-position: 50px -66px;
} 
</style>
