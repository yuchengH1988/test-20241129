<template>
  <div id="Contact" class="relative text-center pb-[124px] ">
    <p class="from_left title ml-[67px]">Contact</p>
    <p class="from_left text-primary-1 heading-2 mt-[18px]">+339 566 789</p>
   
    <div
      ref="imageWrapper" 
      class="relative mt-[56px] w-[92.08vw] h-[445px] overflow-hidden mx-auto relative">
      <img
        class="from_left call_me_img "
        src="/assets/images/call_me.jpeg"
      />

      <div class="zoom" ref="zoom"></div>
    </div>
    <div class="from_left body-2 text-secondary-3 mt-[43px] w-[474px] mx-auto text-center">
      Sit elit incididunt Lorem minim ea pariatur anim dolor ut veniam amet ad. Ipsum tempor commodo ullamco Lorem incididunt proident nisi nostrud dolore. Et labore minim laboris esse amet eu eu exercitation ea esse velit tempor culpa.
    </div>
    <div ref="callText" class="call">
        CALL
      </div>
    <div class="me">
      ME
    </div>
  </div>
</template>
<script>
  import { ref, onMounted, onUnmounted } from "vue";
  import { gsap } from "gsap";
  export default {
    name: "ContactComponent",
    setup () {
      const imageWrapper = ref(null);
      const callText = ref(null)
      const zoom = ref(null);
      const wrapperBounds = ref({});
      onMounted(() => {
        const wrapper = imageWrapper.value;
        const circle = zoom.value;
        const onMouseEnter = () => {
          wrapperBounds.value = wrapper.getBoundingClientRect();
          console.log('wrapperBounds.value', wrapperBounds.value)
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
      callText
    };
  }
}
</script>
<style scoped>
  .title, .call, .me {
    @apply display-1 text-secondary-3;
  }
  .call_me_img {
    width: 100%;
    height: 100%;
    transform: scale(1.3);
    object-fit: cover;
    object-position: 95px -92px;
  }
  .call {
    position: absolute;
    bottom: 185px;
    right: -101px;
  }
  .me {
    position: absolute;
    bottom: -55px;
    left: 0;
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
</style>