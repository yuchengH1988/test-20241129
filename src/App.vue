<template>
  <div id="app">
    <NavBar />
    <BannerComponent />
  
  </div>
</template>

<script>
import { onMounted } from 'vue'; 
import { gsap } from 'gsap';
import NavBar from './components/NavBar.vue';
import BannerComponent from './components/Banner/BannerComponent.vue';
import ScrollTrigger from "gsap/ScrollTrigger";

export default {
  name: 'App',
  components: {
    NavBar,
    BannerComponent,
  },
  setup() {
    onMounted(() => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.utils.toArray(".from_left").forEach((el) => {
        gsap.fromTo(
          el,
          { x: -300, opacity: 0 }, // 起始狀態
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el, // 以當前元素為觸發器
              start: "top 90%", // 當滾動到視窗 90% 時觸發
              toggleActions: "play none reset none",
            },
          }
        );
      })
      gsap.utils.toArray(".from_right").forEach((el) => {
        gsap.fromTo(
          el,
          { x: 300, opacity: 0 }, // 起始狀態
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            immediateRender: true,
            scrollTrigger: {
              trigger: el, // 以當前元素為觸發器
              start: "top 90%", // 當滾動到視窗 90% 時觸發
              toggleActions: "play none reset none",
            },
          }
        );
      })
      gsap.fromTo(
        "nav",
        { y: -100 },
        {
          y: 0,
          duration: 1,
          ease: "power3.out",
        }
      );
    });
  }
} 
</script>

<style>
#app {
  width: 100vw;
  min-height: 300vh;
  background: #000000;
}
html {
  overflow-x: hidden;
}
</style>
