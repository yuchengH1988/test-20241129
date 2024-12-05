<template>
  <div
    class="w-[298px] md:w-[720px] py-[100px] px-[40px] md:pt-[102.5px] md:pb-0 border-r border-primary-2">
    <div
      class="mt-[-27px] md:mt-6 md:pl-[60.5px] text-primary-2">
      <div class="heading-1 whitespace-normal md:whitespace-nowrap">
        Cinquième Élément
      </div>
      <div class="body-2 mt-2 md:w-[655px] whitespace-normal">
        Tarantino wrote Pulp Fiction in 1992 and 1993, incorporating scenes that Avary originally wrote for True Romance (1993). Do et reprehenderit exercit reprehendetation excepteur aliqua duis culpa.
      </div>
    </div>
    <LearnMoreComponent class="mt-4"/>
    <div
      class="flex justify-center mt-6">
      <svg
        ref="svgRef"
        width="210" height="211" viewBox="0 0 210 211" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M149.445 61.0555V83.2778" stroke="#288E3E" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M60.5547 61.0555V83.2778" stroke="#288E3E" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M104.999 61.0555V116.611L71.666 149.944C71.666 149.944 82.7771 161.056 104.999 161.056C127.222 161.056 138.333 149.944 138.333 149.944" stroke="#288E3E" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M49.4444 205.5H27.2222C15 205.5 5 195.5 5 183.278V27.7222C5 15.5 15 5.5 27.2222 5.5H49.4444" stroke="#288E3E" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M160.555 205.5H182.777C194.999 205.5 204.999 195.5 204.999 183.278V27.7222C204.999 15.5 194.999 5.5 182.777 5.5H160.555" stroke="#288E3E" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    
  </div>
</template>
<script>
import { ref, onMounted } from "vue";
import { gsap } from "gsap";
import LearnMoreComponent from "./LearnMoreComponent.vue";

export default {
  name: "RightServiceComponent",
  components: {
    LearnMoreComponent,
  },
  setup() {
    const svgRef = ref(null);
    const animatePath = (path) => {
      const length = path.getTotalLength();
      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
      });
      gsap.to(path, {
        strokeDashoffset: 0,
        duration: 1.5,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
      });
    };
    onMounted(() => {
      const paths = svgRef.value.querySelectorAll("path");
      paths.forEach((path) => animatePath(path));
    });

    return {
      svgRef,
    };
  },
}

</script>