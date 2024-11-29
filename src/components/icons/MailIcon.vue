<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
    :viewBox="viewBox"
    :fill="fillColor"
    role="img"
    aria-label="icon"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M5 7.50714L5.50714 7H18.6929L19.2 7.50714V16.6357L18.6929 17.1428H5.50714L5 16.6357V7.50714ZM6.01429 8.55693V16.1286H18.1857V8.55794L12.4144 12.9843H11.7957L6.01429 8.55693ZM17.2019 8.01428H6.99814L12.1 11.9386L17.2019 8.01428Z"
      :fill="color"
    />
  </svg>
</template>

<script>
export default {
  name: "MailIcon",
  props: {
    size: {
      type: [String, Number],
      default: 24,
    },
    color: {
      type: String,
      default: "#505050",
    },
    fillColor: {
      type: String,
      default: "none",
    },
    viewBox: {
      type: String,
      default: "0 0 24 24",
    },
  },
};
</script>