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
          <img
            :src="baseUrl + item"
            :alt="'Slide ' + (index + 1)" />
        </div>
      </swiper-slide>
    </swiper>
  </div>
  <div class="image-wrapper sync-display">
    <img
      ref="image"
      :src="baseUrl + slides[currentIndex]"
      class="fade"
      alt="Sync Slide" />
  </div>
</template>
<script>
import { ref, watch } from 'vue';
import { gsap } from 'gsap';
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
    const baseUrl = process.env.VUE_APP_BASE_URL
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
      currentIndex.value = swiper.realIndex;
    };
    const image = ref(null);

    watch(() => currentIndex.value, () => {
      gsap.fromTo(
        image.value,
        { opacity: 0, scale: 0.5, filter: 'grayscale(100%)' },
        { opacity: 1, scale: 1, duration: 3, filter: 'grayscale(0%)', ease: 'power1.out' }
      );
    });
    return {
      slides,
      modules: [EffectCreative],
      currentIndex,
      onSlideChange,
      baseUrl,
      image,
    };
  },
};
</script>
<style scoped>
.carousel-container {
  z-index: 20;
  padding-top: 179px;
  display: flex;
  justify-content: center;
  margin-left: -116px;
}

.swiper {
  width: 333px;
  height: 338px;
}
.image-wrapper {
  width: 333px;
  height: 338px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.image-wrapper img {
  max-width: 210%;
  min-height: 417px;
  object-fit: cover;
  object-position: -10px 84px;
}
.sync-display {
  width: 194px;
  height: 161px;
  position:absolute;
  top: 80px;
  right: calc(50% - 232px);
  z-index: 0;
}
.sync-display img {
  max-width: 210%;
  object-position: 23px -23px;
}

@screen md {
  .carousel-container {
    margin-left: 0;
    padding-top: 259px;
  }
  .swiper {
    width: 746px;
    height: 519px;
  }
  .image-wrapper {
    width: 746px;
    height: 519px;
  }
  .image-wrapper img {
    max-width: 110%;
    min-height: 417px;
    object-position: 50% 87px;
  }
  .sync-display {
    width: 503px;
    height: 417px;
    top: 123px;
    right: 50%;
    transform: translate(calc(50% + 400px), 0);
  }
  .sync-display img {
    max-width: 210%;
    object-position: 50px -66px;
  }
}
</style>
