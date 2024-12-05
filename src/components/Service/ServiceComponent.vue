<template>
  <div
    id="service_container"
    ref="serviceContainer"
    class="h-[680px] md:h-[603px] inline-flex relative w-full">
    <LeftServiceComponent/>
    <RightServiceComponent/>
  </div>
</template>
<script>
import { ref, onMounted, onUnmounted } from "vue";
import LeftServiceComponent from "./LeftServiceComponent.vue";
import RightServiceComponent from "./RightServiceComponent.vue";
export default {
  name: "ServiceComponent",
  components: {
    LeftServiceComponent,
    RightServiceComponent,
  },
  setup() {
    const serviceContainer = ref(null);
    let isDragging = false;
    let startX = 0;
    let scrollLeft = 0;

    const onMouseDown = (e) => {
      isDragging = true;
      serviceContainer.value.classList.add("active");
      startX = e.pageX - serviceContainer.value.offsetLeft;
      scrollLeft = serviceContainer.value.scrollLeft;
    };

    const onMouseMove = (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - serviceContainer.value.offsetLeft;
      const walk = x - startX;
      serviceContainer.value.scrollLeft = scrollLeft - walk;
    };

    const onMouseUp = () => {
      isDragging = false;
      serviceContainer.value.classList.remove("active");
    };

    onMounted(() => {
      const container = serviceContainer.value;
      container.addEventListener("mousedown", onMouseDown);
      container.addEventListener("mousemove", onMouseMove);
      container.addEventListener("mouseup", onMouseUp);
      container.addEventListener("mouseleave", onMouseUp);
    });

    onUnmounted(() => {
      const container = serviceContainer.value;
      container.removeEventListener("mousedown", onMouseDown);
      container.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("mouseup", onMouseUp);
      container.removeEventListener("mouseleave", onMouseUp);
    });

    return {
      serviceContainer,
    };
  }
}

</script>
<style>
  #service_container {
    cursor: grab;
    overflow-x: scroll;
    white-space: nowrap;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
  #service_container:active {
    cursor: grabbing;
  }
  #service_container::-webkit-scrollbar {
    display: none;
  }
  #service_container > div {
    flex-shrink: 0;
  }
</style>