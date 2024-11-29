<template>
  <div id="app">
    <NavBar />
  
  </div>
</template>

<script>
import { onMounted } from 'vue'; 
import { gsap } from 'gsap';
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar
  },
  setup() {
    onMounted(() => {
      gsap.fromTo(
        "nav",
        { y: -100 },
        {
          y: 0,
          duration: 1,
          ease: "power3.out",
        }
      );
    });
  }
} 
</script>

<style>
#app {
  width: 100vw;
  min-height: 300vh;
  background: #000000;
}
</style>
