<template>
  <div id="Contact" class="relative text-center pt-[35px] md:pt-0 pb-[133px] md:pb-[124px] ">
    <p class="from_left title ml-[-22px] md:ml-[67px]">Contact</p>
    <p class="from_left text-primary-1 heading-2 mt-6 md:mt-[18px]">+339 566 789</p>
    <div
      ref="imageWrapper" 
      class="relative mt-[51px] md:mt-[56px] md:w-[92.08vw] h-[276px] md:h-[445px] overflow-hidden mx-auto relative">
      <img
        class="from_left call_me_img "
        :src="baseUrl + '/assets/images/call_me.jpeg'"
      />
      <div class="zoom" ref="zoom"></div>
      <div class="blend"></div>
    </div>
    <div class="from_left body-2 text-secondary-3 mt-[40px] md:mt-[43px] w-[317px] md:w-[474px] mx-auto text-center">
      Sit elit incididunt Lorem minim ea pariatur anim dolor ut veniam amet ad. Ipsum tempor commodo ullamco Lorem incididunt proident nisi nostrud dolore. Et labore minim laboris esse amet eu eu exercitation ea esse velit tempor culpa.
    </div>
    <div class="call">
      <div class="relative from_right">CALL</div>
    </div>
    <div class="me">
      <div class="relative from_left">ME</div>
    </div>
  </div>
</template>
<script>
  import { ref, onMounted, onUnmounted } from "vue";
  import { gsap } from "gsap";
  export default {
    name: "ContactComponent",
    setup () {
      const baseUrl = process.env.VUE_APP_BASE_URL
      const imageWrapper = ref(null);
      const zoom = ref(null);
      const wrapperBounds = ref({});
      onMounted(() => {
        const wrapper = imageWrapper.value;
        const circle = zoom.value;
        const onMouseEnter = () => {
          wrapperBounds.value = wrapper.getBoundingClientRect();
          gsap.to(circle, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });
        };
        const onMouseLeave = () => {
          gsap.to(circle, {
            scale: 0,
            duration: 0.3,
            ease: "power2.out",
          });
        };
        const onMouseMove = (e) => {
            const x = e.clientX;
            const y = e.clientY;
            gsap.to(circle, {
              x: x - circle.offsetWidth / 2,
              y: y - circle.offsetHeight / 2,
              duration: 0.1,
            });
        };
        wrapper.addEventListener("mouseenter", onMouseEnter);
        wrapper.addEventListener("mouseleave", onMouseLeave);
        wrapper.addEventListener("mousemove", onMouseMove);

        onUnmounted(() => {
          wrapper.removeEventListener("mouseenter", onMouseEnter);
          wrapper.removeEventListener("mouseleave", onMouseLeave);
          wrapper.removeEventListener("mousemove", onMouseMove);
        });
    })

    return {
      imageWrapper,
      zoom,
      baseUrl,
    };
  }
}
</script>
<style scoped>
  .title, .call, .me {
    @apply display-1 text-secondary-3;
  }
  .call_me_img {
    width: auto;
    height: 613px;
    object-fit: cover;
    object-position: center -123px;
  }
  .blend {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    mix-blend-mode: overlay;
    background-color: #FFF;
  }
  .call {
    position: absolute;
    bottom: 242px;
    left: calc(50% - 89px);
  }
  .me {
    position: absolute;
    bottom: -28px;
    left: calc(50% - 216px);
  }
  @screen md {
    .call_me_img {
      width: 100%;
      height: 100%;
      transform: scale(1.3);
      object-fit: cover;
      object-position: 95px -92px;
    }
    .zoom {
      position: fixed;
      top: 0;
      left: 0;
      width: 264px;
      height: 264px;
      background-color: #FFF;
      border-radius: 50%;
      transform: scale(0);
      pointer-events: none;
      mix-blend-mode: exclusion;
    }
    .blend {
      display: none;
    }
    .call {
      bottom: 185px;
      right: -101px;
    }
    .me {
      bottom: -55px;
      left: 0;
    }
  }
</style>