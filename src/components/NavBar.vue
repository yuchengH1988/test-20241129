<template>
  <nav class="pt-4 sm:pt-8 px-6 sm:px-[69.4px] fixed w-screen z-50">
    <div class="flex justify-between items-center">
      <!-- Logo -->
      <div class="text-secondary-3 t-h-green font-light font-ppRightDidone sm:text-[40px] text-2xl">ZOENW</div>

      <!-- Tabs -->
      <div class="sm:flex hidden px-10 py-4 bg-secondary-3 rounded-full text-grayscale-0">
        <div class="flex space-x-10 mr-6">
          <button
            v-for="(tab, index) in tabs"
            :key="index"
            class="t-h-green"
            @click="selectTab(index)"
          >
            {{ tab }}
          </button>
        </div>
        <div class="nav-line"></div>
        <button
          class="flex t-h-green items-center ml-6"
          @click="selectTab('Contact')"
        >
          <PhoneIcon size="15" class="mr-1" />
          Contact
        </button>
      </div>
      <button
        @click="toggleMenu"
        v-bind:class="[
          'sm:hidden block p-4 bg-secondary-3 rounded-full text-grayscale-0',
          isMenuOpen ? 'bg-primary-2' : 'bg-secondary-3'
        ]">
        <div
          v-bind:class="['hamburger space-y-1.5', isMenuOpen ? 'hidden' : 'block']">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line half"></div>
        </div>
        <div
          v-bind:class="['x-line', isMenuOpen ? 'block' : 'hidden']">
          <div></div>
          <div></div>
        </div>
      </button>
    </div>
  </nav>
</template>

<script>
import PhoneIcon from './Icons/PhoneIcon.vue';
export default {
  name: "NavBar",
  components: {
    PhoneIcon,
  },
  data() {
    return {
      tabs: ["About", "Story", "Gallery"],
      selectedTab: 0, // 預設選中第一個 Tab
      isMenuOpen: false
    };
  },
  methods: {
    selectTab(index) {
      this.selectedTab = index;
    },
    toggleMenu () {
      this.isMenuOpen = !this.isMenuOpen
    }
  },
};
</script>

<style scoped>
  .nav-line {
    width: 0px;
    height: 24px;
    gap: 0px;
    border-left: 1px solid #DBBB76;
    opacity: 1;
    transform: rotate(20deg);
  }
  .hamburger .line {
    width: 16px;
    height: 0;
    border-top: 1px solid black;
  }
  .line.half {
    width: 8px;
    margin-left: 8px;
  }
  .x-line {
    position: relative;
    width: 16px;
    height: 15px;
  }  

  .x-line div {
    position: absolute;
    top: 48%;
    left: -2px;
    width: 22px;
    height: 2px;
    background-color: #FFF;
    transform-origin: center;
    transform: rotate(45deg);
  }  

  .x-line div:nth-child(2) {
    transform: rotate(-45deg);
  }

</style>