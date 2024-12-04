<template>
  <div>
    <div
      class="overflow-hidden"
      :style="{ width: width, height: height }"
    >
      <img
        :src="imageUrl"
        alt="Dynamic Image"
        class="image"
        :style="{ width: width, height: height, ...imgStyle }"
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
