<template>
  <div
    id="banner"
    class="md:h-[1109px] h-[815px] relative">
    <div
      class="header display-0 text-primary-1 whitespace-nowrap z-10">
      <div id="banner_text1" class="from_right">
        1976--
        <span class="mobile_line_break">Mazda</span>
      </div>
      <div id="banner_text3"
        class="from_left text-right md:mt-[400px] mt-[337px]">
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
      class="from_left body-2 md:w-[474px] w-[86.67vw] text-secondary-3">
      Sit elit incididunt Lorem minim ea pariatur anim dolor ut veniam amet ad. Ipsum tempor commodo ullamco Lorem incididunt proidtation ea esse velit tempor culpa.
    </div>
    <button
      id="btn_view"
      class="from_left md:mt-[51px] mt-[32px] md:ml-[180px] ml-[6.67vw] relative z-30 flex items-center">
      <div class="md:w-[64px] md:h-[64px] w-[48px] h-[48px] mr-3 border border-white rounded-full flex items-center justify-center">
        <VectorIcon color="#FFF" />
      </div>
      <span class="heading-1 text-secondary-3">View All</span>
    </button>
  </div>
</template>
<script>
import CarouselComponent from './CarouselComponent.vue';
import VectorIcon from '../Icons/VectorIcon.vue';


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
  width: 86.67vw;
  position: absolute;
  top: 80px;
  left: 50%;
  transform: translate(-50%, 0);
}
#banner_text2 {
  position: absolute;
  left: 6.67vw;
  top: 184px;
  z-index: 30;
}
#banner_des {
  margin: 79px auto 0;
}
@screen md {
  .header {
    width: 1594px;
    top: 158px;
    left: 50%;
    transform: translate(calc(-50% + 40px), 0);
  }
  #banner_text2 {
    left: calc(50% - 761px);
    top: 395px;
  }
  #banner_des {
    margin-top: 37px;
    margin-left: 69px;
  }
}


#btn_view div {
  transition: background-color 0.3s ease-in-out;
}
#btn_view:hover > div {
  background: #288E3E;
}

</style>
