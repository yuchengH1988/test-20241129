<template>
  <div
    class="w-[720px] border-r border-primary-2 px-[40px] py-[84px]">
    <div
      class="flex justify-center py-[28px]">
      <svg
        ref="svgRef"
        width="156"
        height="210" viewBox="0 0 156 210" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          ref="pathRef"
          d="M95.9869 85C95.9869 85 95.9869 71 95.9869 60M95.9869 60C95.9869 48 95.9869 32 95.9869 20C95.9869 12 102.988 5 110.989 5C118.99 5 125.99 12 125.99 20V105L145.993 132C151.993 140 150.993 150 144.993 158L106.988 199C102.988 203 97.9871 205 91.9864 205C80.9852 205 62.9831 205 45.9812 205C21.9784 205 9.97702 179 5.97656 166V165C5.97656 158 5.97656 96 5.97656 80C5.97656 57 35.98 57 35.98 80C35.98 84 35.98 86 35.98 86C35.98 86 35.98 71 35.98 69C35.98 46 65.9834 46 65.9834 69C65.9834 78 65.9834 86 65.9834 86V60C65.9834 37 95.9869 37 95.9869 60Z" stroke="#288E3E" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    <div
      class="mt-6 pl-[60.5px] text-primary-2">
      <div class="heading-1">
        Cinquième Élément
      </div>
      <div class="body-2 mt-2">
        Its plot occurs out of chronological order.
      </div>
    </div>
    <LearnMoreComponent class="mt-4"/>
  </div>
</template>
<script>
import { ref, onMounted } from "vue";
import { gsap } from "gsap";
import LearnMoreComponent from "./LearnMoreComponent.vue";

export default {
  name: "LeftServiceComponent",
  components: {
    LearnMoreComponent,
  },
  setup() {
    const svgRef = ref(null);
    const pathRef = ref(null);

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
    });

    return {
      svgRef,
      pathRef,
    };
  },
}

</script>