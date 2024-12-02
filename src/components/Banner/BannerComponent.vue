<template>
  <div
    id="banner"
    class="sm:h-[1109px] h-[815px] relative">
    <div
      class="header display-0 text-primary-1 whitespace-nowrap z-10">
      <div id="banner_text1" class="from_right">
        1976--
        <span class="mobile_line_break">Mazda</span>
      </div>
      <div id="banner_text3"
        class="from_left text-right mt-[400px]">
        Movie
      </div>
    </div>
    <CarouselComponent/>
    <div
      class="from_right display-0 text-primary-1 whitespace-nowrap"
      id="banner_text2">
      RX7s
    </div>
    <div
      id="banner_des"
      class="from_left body-2 w-[474px] text-secondary-3">
      Sit elit incididunt Lorem minim ea pariatur anim dolor ut veniam amet ad. Ipsum tempor commodo ullamco Lorem incididunt proidtation ea esse velit tempor culpa.
    </div>
    <button
      id="btn_view"
      class="from_left mt-[51px] ml-[180px] relative z-30 flex">
      <div class="w-[64px] h-[64px] mr-6 border border-white rounded-full flex items-center justify-center">
        <VectorIcon color="#FFF" />
      </div>
      <span class="heading-1 text-secondary-3">View All</span>

    </button>
  </div>
</template>
<script>
import CarouselComponent from './CarouselComponent.vue';
import VectorIcon from '../icons/VectorIcon.vue';


export default {
  name: "BannerComponent",
  components: {
    CarouselComponent,
    VectorIcon,
  },
}
</script>
<style scoped>
.header {
  width: 1594px;
  position: absolute;
  top: 158px;
  left: 50%;
  transform: translate(calc(-50% + 40px), 0);
}
#banner_text2 {
  position: absolute;
  left: calc(50% - 761px);
  top: 395px;
  z-index: 30;
}
#banner_des {
  margin-top: 37px;
  margin-left: 69px;
}
#btn_view div {
  transition: background 0.3s ease-in-out;
}
#btn_view:hover > div {
  background: #288E3E;
}

</style>
