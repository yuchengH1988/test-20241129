<template>
  <div id="app">
    <NavBar />
  
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar
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
