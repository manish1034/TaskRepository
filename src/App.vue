<template>
  <div id="app">
    <img src="./assets/logo.png">
    <Home />
  </div>
</template>

<script>
import Home from './components/Home.vue';

export default {
  name: 'app',
  components: {
    Home
  }
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center; 
  height: 100vh; 
}

.img-size {
  width: 100px;
  height: auto;
}
</style>