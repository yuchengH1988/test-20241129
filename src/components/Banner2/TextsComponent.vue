<template>
  <div class="texts display-2 text-secondary-2 inline-flex">
    <div></div>ORAGNIC<div></div>PURE<div></div>
    ORAGNIC<div></div>TRUE ROMANCE
  </div>
</template>
<script>
export default {
  name: "TextsComponent",
}
</script>
<style>
  .texts div {
    height: 83.76px;
    width: 0;
    border-left: 1px solid #DBBB76;
    transform: rotate(19.41deg); /* 斜角 */
    position: relative; /* 可調整相對位置 */
    margin: 0 40px 24px;
  }
</style>
