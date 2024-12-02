<template>
  <svg
    :width="size"
    :height="size"
    :viewBox="viewBox"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
  >
    <path
      d="M3 16L21 9.86364L14.8636 7"
      :stroke="color"
    />
  </svg>
</template>

<script>
export default {
  name: "IconComponent",
  props: {
    size: {
      type: [String, Number],
      default: 24,
    },
    viewBox: {
      type: String,
      default: "0 0 24 24",
    },
    color: {
      type: String,
      default: "#505050",
    }
  },
};
</script>

