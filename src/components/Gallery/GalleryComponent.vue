<template>
  <div id="Gallery" class="mb-[56px] md:mb-0 relative max-w-[500px] md:max-w-none w-[89.72vw] md:w-[90.14vw]  mx-auto md:overflow-x-hidden">
    <div class="gallery_header text-primary-1 display-1">
      <P5jsComponent />
      <div class="relative from_right">
        Gallery
      </div>
    </div>
    <div class="title md:mx-0 md:flex items-center justify-between from_left md:w-[calc(90.14vw-304px)] mt-[40px] md:mt-[202px] pl-0 md:pl-[3.4vw]">
      <div>SUMMER<br>COLLECTION</div>
      <div class="mt-6 md:mt-0">SECTION 01</div>
    </div>
    <div class="md:mt-5 md:flex md:gap-6 md:justify-end md:items-end md:mr-[-71px]">
      <ArtworkComponent
        class="from_left"
        imageUrl="/assets/images/red_car.jpeg"
        height="512px"
        width="659px"
      />
      <ArtworkComponent
        class="from_right"
        imageUrl="/assets/images/statue.jpeg"
        height="402px"
        width="351px"
      />
    </div>
    <div class="title relatvie mt-8 md:mt-[330px] md:mb-[32px] md:mr-[354px] md:text-right">
      <div class="from_left">
        SECTION 02
      </div>
    </div>
    <div
      class="md:flex justify-between">
      <ArtworkComponent
        class="from_right md:mt-[-125px]"
        imageUrl="/assets/images/call_me.jpeg"
        height="501px"
        width="433px"
      />
      <div class="md:flex mr-[-71px] gap-6">
        <ArtworkComponent
          class="from_left"
          imageUrl="/assets/images/book.jpeg"
          height="376px"
          width="282px"
        />
        <ArtworkComponent
          class="from_left"
          imageUrl="/assets/images/tv.jpeg"
          height="545px"
          width="402px"
        />
      </div>
    </div>
    <div class="relatvie mt-8 md:mt-[39px] md:mb-[119px] md:pl-[19.7vw]">
      <div class="title from_left">
        SECTION 03
      </div>
      <div class="md:flex md:mt-[32px] md:gap-6">
        <ArtworkComponent
          class="from_left"
          imageUrl="/assets/images/tv_boot.jpeg"
          height="285px"
          width="350px"
        />
        <ArtworkComponent
          class="from_left"
          imageUrl="/assets/images/mouse_mask.jpeg"
          height="278px"
          width="282px"
        />
      </div>
      <div class="title mt-8 md:mt-[123px] from_right">
        SECTION 04
      </div>
      <ArtworkComponent
        class="from_right mt-8"
        imageUrl="/assets/images/blonde_dog.jpeg"
        height="42.07vw"
        width="70.44vw"
        :imgStyle="{objectPosition: 'center -300px'}"
      />
    </div>
  </div>
</template>
<script>
  import ArtworkComponent from './ArtworkComponent.vue';
  import P5jsComponent from './P5jsComponent.vue';
  export default {
    name: "GallerComponent",
    components: {
      ArtworkComponent,
      P5jsComponent,
    }
  }

</script>
<style scoped>
  .gallery_header {
    position: relative;
    display: flex;
    justify-content: center;
    padding-top: 100px;
    padding-bottom: 50px
  }
  .title {
    @apply heading-3 text-secondary-3;
  }
  @screen md {
    .gallery_header {
      padding: 0;
      position: absolute;
      top: 841px;
      left: 50%;
      transform: translate(-50%, 0);
    }
  }
</style>