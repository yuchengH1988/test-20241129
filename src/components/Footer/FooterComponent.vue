<template>
  <div class="relative bg-secondary-3 h-[173px] flex items-center justify-center text-primary-1">
    <p class="brand">ZOENW</p>
    <div class="rwd">
      <div class="flex tab">
        <button class="t-h-green">Privacy Policy</button>
        <div class="slash"></div>
        <button class="t-h-green">Brand Site</button>
      </div>
      <div class="copyright">
        © original COSME JAPAN CO.,LTD
      </div>
    </div>
  </div>

</template>
<script>
  export default {
    name: "FooterComponent"
  }
</script>
<style lang="css" scoped>
  .brand {
    @apply font-ppRightDidone font-light;
    font-size: 24px;
    line-height: 40px;
  }
  .tab {
    @apply font-ppCirka font-normal;
    font-size:14px;
    line-height: 19.5px;
  }
  .copyright {
    @apply font-ppCirka font-normal;
    font-size: 14px;
    line-height: 15.6px
  }
  .slash {
    width: 0px;
    height: 16px;
    gap: 0px;
    border-left: 1px solid #E01111;
    margin: 0 12px;
    opacity: 1;
    transform: rotate(20deg);
  }
  @screen md {
    .brand {
      font-size:40px;
      line-height: 40px;
    }
    .tab {
      font-size:16px;
    }
    .copyright {
      font-size: 16px;
    }
    .rwd {
      display: flex;
      justify-content: space-between;
      position: absolute;
      width: 92.08vw;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

</style>