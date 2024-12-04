<template>
  <div class="relative w-[90.14vw] mx-auto overflow-x-hidden">
    <div class="gallery_header text-primary-1 display-1">
      <div class="relative from_right">
        Gallery
      </div>
    </div>
    <div class="title flex items-center justify-between w-[65.62vw] from_left mt-[202px] pl-[3.4vw]">
      <div>SUMMER<br>COLLECTION</div>
      <div>SECTION 01</div>
    </div>
    <div class="mt-5 flex gap-6 justify-end items-end mr-[-71px]">
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
    <div class="title relatvie mt-[330px] mb-[32px] mr-[354px] text-right">
      <div class="from_left">
        SECTION 02
      </div>
    </div>
    <div
      class="flex justify-between">
      <ArtworkComponent
        class="from_right mt-[-125px]"
        imageUrl="/assets/images/call_me.jpeg"
        height="501px"
        width="433px"
      />
      <div class="flex mr-[-71px] gap-6">
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
    <div class="relatvie mt-[39px] mb-[119px] pl-[19.7vw]">
      <div class="title from_left">
        SECTION 03
      </div>
      <div class="flex mt-[32px] gap-6">
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
      <div class="title mt-[123px] from_right">
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
  export default {
    name: "GallerComponent",
    components: {
      ArtworkComponent,
    }
  }

</script>
<style scoped>
  .gallery_header {
    position: absolute;
    top: 841px;
    left: 50%;
    transform: translate(-50%, 0);
  }
  .title {
    @apply heading-3 text-secondary-3;
  }

</style>