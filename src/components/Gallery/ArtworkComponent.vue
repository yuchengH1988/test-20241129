<template>
  <div class="mt-8 md:mt-0">
    <div
      class="overflow-hidden"
      :style="{ width: dynamicWidth, height: dynamicHeight }"
    >
      <img
        :src="imageUrl"
        alt="Dynamic Image"
        class="image"
        :style="{ width: dynamicWidth, height: dynamicHeight, ...dynamicStyle }"
      />
    </div>
    <div
      class="text-primary-2 body-1 mt-4"
      v-if="description">
      {{ description }}
    </div>
  </div>
 
</template>
<script>
  import { ref, onMounted, onUnmounted, watch } from "vue";
  export default {
    name: "ArtworkComponent",
    props: {
      width: {
        type: String,
        default: '300px',
      },
      height: {
        type: String,
        default: '200px',
      },
      imageUrl: {
        type: String,
        required: true, 
      },
      description: {
        type: String,
        default: "1997 Christopher Fairbank",
      },
      imgStyle: {
        type: Object,
        default: () => ({}),
      }
    },
    setup(props) {
      const dynamicWidth = ref(props.width);
      const dynamicHeight = ref(props.height);
      const dynamicStyle = ref({})
      const screenWidth = ref(window.innerWidth);
      const updateDimensions = () => {
        if (screenWidth.value < 768) {
          const contentWidth = screenWidth.value * 0.8972
          const newWidth = contentWidth > 500 ? 500 : contentWidth
          dynamicWidth.value = `${newWidth}px`;
          dynamicHeight.value = `${newWidth / 323 * 357}px`;
          dynamicStyle.value = {}
        } else {
          dynamicWidth.value = props.width;
          dynamicHeight.value = props.height;
          dynamicStyle.value = props.imgStyle
        }
      };
      const onResize = () => {
        screenWidth.value = window.innerWidth;
      };
      onMounted(() => {
        window.addEventListener("resize", onResize);
        updateDimensions();
      });
      onUnmounted(() => {
        window.removeEventListener("resize", onResize);
      });
      watch(screenWidth, updateDimensions);
      return { dynamicWidth, dynamicHeight, dynamicStyle };
    },
  };
</script>
<style scoped>
  .image {
    object-fit: cover;
    object-position: center;
    transition: transform 0.6s ease-in-out;
  }
  .image:hover {
    transform: scale(1.1);
  }
</style>
