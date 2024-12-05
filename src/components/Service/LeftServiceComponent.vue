<template>
  <div
    class="w-[298px] md:w-[720px] border-r border-primary-2 px-[40px] py-[100px] md:py-[84px]">
    <div
      class="flex justify-center py-[28px]">
      <HandComponent class="ml-[10px] md:ml-0"/>
    </div>
    <div
      class="mt-6 pl-0 md:pl-[60.5px] text-primary-2 whitespace-normal md:whitespace-nowrap">
      <div class="heading-1">
        Cinquième Élément
      </div>
      <div class="body-2 mt-2 w-[105%]">
        Its plot occurs out of chronological order.
      </div>
    </div>
    <LearnMoreComponent class="mt-4"/>
  </div>
</template>
<script>
import LearnMoreComponent from "./LearnMoreComponent.vue";
import HandComponent from "./HandComponent.vue";

export default {
  name: "LeftServiceComponent",
  components: {
    LearnMoreComponent,
    HandComponent,
  },
}

</script>