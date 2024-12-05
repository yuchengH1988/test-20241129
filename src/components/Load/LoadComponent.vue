<template>
  <div class="h-screen font-ppRightDidone font-light text-primary-1 text-[50px] leading-[50px] flex flex-col items-center justify-center">
    <div class="mb-[27px]">ZOENW</div>
    <div
      class="progress-container">
      <div
        ref="progressBar"
        class="progress-bar">
      </div>
    </div>
  </div>
</template>
<script>
  import { ref, watch } from 'vue';
  import { gsap } from 'gsap';
  export default {
    name: "LoadComponent",
    props: {
      progress: {
        type: Number,
        required: true,
      },
    },
    setup(props) {
      const progressBar = ref(null);
      watch(
        () => props.progress,
        (newProgress) => {
          const targetWidth = `${(newProgress / 100) * 140}px`;
          gsap.to(progressBar.value, {
            width: targetWidth,
            duration: 0.5,
            ease: 'power1.out',
          });
        }
      );
      return {
        progressBar,
      };
    },
  }
</script>
<style scoped>
.progress-container {
  position: relative;
  width: 140px;
  height: 0px;
  border-top: 1px solid #ccc;
}

.progress-bar {
  position: absolute;
  top: -1px;
  left: 0;
  width: 0;
  border-top: 1px solid red;
  z-index: 10;
}

</style>
