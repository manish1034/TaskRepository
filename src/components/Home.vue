<template>
  <div id="home">
    <Timer :count="count" />
    <Control :isRunning="isRunning" @start="startTimer" @stop="stopTimer" />
  </div>
</template>

<script>
import Timer from "./Timer.vue";
import Control from "./Control.vue";

export default {
  name: "Home",
  components: {
    Timer,
    Control,
  },
  data() {
    return {
      count: 0,
      isRunning: false,
      timer: null,
    };
  },
  methods: {
    startTimer() {
      if (!this.isRunning) {
        this.isRunning = true;
        this.timer = setInterval(() => {
          this.count++;
        }, 500);
      }
    },
    stopTimer() {
      if (this.isRunning) {
        this.isRunning = false;
        clearInterval(this.timer);
      }
    },
  },
};
</script>

<style>
#home {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
