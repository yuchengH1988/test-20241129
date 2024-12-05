<template>
  <svg
    ref="svgRef"
    :width="dynamicWidth"
    :height="dynamicHeight"
    :viewBox="`0 0 ${dynamicWidth} ${dynamicHeight}`"
    fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      ref="pathRef"
      d="M95.9869 85C95.9869 85 95.9869 71 95.9869 60M95.9869 60C95.9869 48 95.9869 32 95.9869 20C95.9869 12 102.988 5 110.989 5C118.99 5 125.99 12 125.99 20V105L145.993 132C151.993 140 150.993 150 144.993 158L106.988 199C102.988 203 97.9871 205 91.9864 205C80.9852 205 62.9831 205 45.9812 205C21.9784 205 9.97702 179 5.97656 166V165C5.97656 158 5.97656 96 5.97656 80C5.97656 57 35.98 57 35.98 80C35.98 84 35.98 86 35.98 86C35.98 86 35.98 71 35.98 69C35.98 46 65.9834 46 65.9834 69C65.9834 78 65.9834 86 65.9834 86V60C65.9834 37 95.9869 37 95.9869 60Z" stroke="#288E3E" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</template>
<script>
import { ref, onMounted } from "vue";
import { gsap } from "gsap/gsap-core";

export default {
  name: "HandComponet",
  setup () {
    const svgRef = ref(null);
    const pathRef = ref(null);
    const dynamicWidth = ref(156);
    const dynamicHeight = ref(210);
    const updateDimensions = () => {
      if (window.innerWidth < 768) {
        // 手機螢幕
        dynamicWidth.value = 176;
        dynamicHeight.value = 238;
      } else {
        // 桌面螢幕
        dynamicWidth.value = 156;
        dynamicHeight.value = 210;
      }
    };
    onMounted(() => {
      const path = pathRef.value;
      const length = path.getTotalLength();
      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
      });
      gsap.to(path, {
        strokeDashoffset: 0,
        duration: 2,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
      });

      updateDimensions(); // 初始設置
      window.addEventListener("resize", updateDimensions);
    });
    return {
      svgRef,
      pathRef,
      dynamicWidth,
      dynamicHeight,
    };
  }
};
</script>
