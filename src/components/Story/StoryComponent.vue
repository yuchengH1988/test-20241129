<template>
  <div class="relative overflow-hidden h-[417px] border-t border-b bg-secondary-1 border-primary-2 text-primary-2 flex items-center">
    <div ref="marquee" class="absolute flex whitespace-nowrap">
      <div
        class="display-0 my-auto">
        Story
      </div>
      <div class="text-center w-[773px] pl-[143px] pr-[156px] my-auto">
        <h2 class="heading-2">Story</h2>
        <p class="body-2 whitespace-normal mt-8">
          Sit elit incididunt Lorem minim ea pariatur anim dolor ut veniam amet ad. Ipsum tempor commodo ullamco Lorem incididunt proident nisi nostrud dolore. Et labore minim laboris esse amet eu eu exercitation ea esse velit tempor culpa.
        </p>
      </div>
      <div
        class="display-0 my-auto">
        Story
      </div>
      <div class="text-center w-[773px] pl-[143px] pr-[156px] my-auto">
        <h2 class="heading-2">Story</h2>
        <p class="body-2 whitespace-normal mt-8">
          Sit elit incididunt Lorem minim ea pariatur anim dolor ut veniam amet ad. Ipsum tempor commodo ullamco Lorem incididunt proident nisi nostrud dolore. Et labore minim laboris esse amet eu eu exercitation ea esse velit tempor culpa.
        </p>
      </div>
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

export default {
  name: "StoryComponent",
  setup() {
    const marquee = ref(null);
    const rotatingUnicorn = ref(null)

    const onScroll = () => {
      const scrollY = window.scrollY;
      const rotation = scrollY % 720;
      gsap.to(rotatingUnicorn.value, {
        rotation,
        duration: 4,
        ease: "back.out(3)",
      });
    };

    onMounted(() => {
      window.addEventListener("scroll", onScroll);
      const marqueeWidth = 2848;

      gsap.to(marquee.value, {
        x: -marqueeWidth,
        duration: 10,
        repeat: -1,
        ease: "linear",
        modifiers: {
          x: gsap.utils.unitize((x) => parseFloat(x) % marqueeWidth /2),
        },
      });
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
