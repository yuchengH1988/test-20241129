<template>
  <div id="Story" class="relative justify-center overflow-hidden md:h-[417px] h-[680px] border-t bg-secondary-1 border-primary-2 text-primary-2 flex md:justify-start md:items-center">
    <div ref="marquee" class="absolute flex md:flex-row flex-col whitespace-nowrap">
      <ContentComponent/>
      <ContentComponent/>
    </div>
    <div
      class="w-full flex items-center justify-center">
      <img
        ref="rotatingUnicorn"
        class="unicorn"
        src="/assets/images/unicorn.png"
      />
    </div>
  </div>
</template>

<script>
import { onMounted, ref, onUnmounted } from "vue";
import { gsap } from "gsap";
import ContentComponent from "./ContentComponent.vue";

export default {
  name: "StoryComponent",
  components: {
    ContentComponent,
  },
  setup() {
    const marquee = ref(null);
    const rotatingUnicorn = ref(null);
    const isVertical = ref(window.innerWidth < 768);

    const onScroll = () => {
      const scrollY = window.scrollY;
      const rotation = scrollY % 720;
      gsap.to(rotatingUnicorn.value, {
        rotation,
        duration: 4,
        ease: "back.out(3)",
      });
    };
    const onResize = () => {
      isVertical.value = window.innerWidth < 768;
      setupMarquee(); 
    };
    const setupMarquee = () => {
      gsap.killTweensOf(marquee.value);
      if (isVertical.value) {
        gsap.to(marquee.value, {
          y: -1335.4 ,
          duration: 10,
          repeat: -1,
          ease: "linear",
          modifiers: {
            y: gsap.utils.unitize((y) => parseFloat(y) % (1335.4/2)),
          },
        });
      } else {
        gsap.to(marquee.value, {
          x: -2848,
          duration: 10,
          repeat: -1,
          ease: "linear",
          modifiers: {
            x: gsap.utils.unitize((x) => parseFloat(x) % 2848),
          },
        });
      }
    };

    onMounted(() => {
      window.addEventListener("scroll", onScroll);
      window.addEventListener("resize", onResize);
      setupMarquee();
    });
    onUnmounted(() => {
      window.removeEventListener("scroll", onScroll);
    });
    return { marquee, rotatingUnicorn };
  },
};
</script>
<style>
  .unicorn {
    width: 360px;
    height: auto;
    z-index: 10;
  }
</style>
