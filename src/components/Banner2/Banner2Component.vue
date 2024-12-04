<template>
  <div class="bg-secondary-3 whitespace-nowrap">
    <div
      class="relatvie overflow-hdden pt-[54px] pb-[23.2px] border-b border-[#1313131A]">
      <div
        ref="marquee">
        <TextsComponent/>
        <TextsComponent/>
      </div>
    </div>
    <div
      class="relatvie overflow-hdden pt-[47.8px] pb-[29px]">
      <div
        ref="marquee2">
        <TextsComponent/>
        <TextsComponent/>
      </div>
    </div>
  </div>
</template>
<script>
import TextsComponent from './TextsComponent.vue';
import { onMounted, ref } from "vue";
import { gsap } from "gsap";
export default {
  name: "Banner2Component",
  components: {
    TextsComponent,
  },
  setup () {
    const marquee = ref(null);
    const marquee2 = ref(null)
    onMounted(() => {
      const marqueeWidth = 2311*2;

      gsap.to(marquee.value, {
        x: -marqueeWidth,
        duration: 15,
        repeat: -1,
        ease: "linear",
        modifiers: {
          x: gsap.utils.unitize((x) => parseFloat(x) % marqueeWidth /2),
        },
      });
      gsap.fromTo(
        marquee2.value,
        {
          x: - marqueeWidth / 2,
        },
        {
          x: 0,
          duration: 15,
          ease: "linear",
          repeat: -1,
          modifiers: {
            x: gsap.utils.unitize((x) => {
              const normalizedX = parseFloat(x) % marqueeWidth;
              return normalizedX < -marqueeWidth / 2
                ? normalizedX + marqueeWidth
                : normalizedX;
            }),
          },
        }
      );
    });
    return { marquee, marquee2 };
  }
}
</script>