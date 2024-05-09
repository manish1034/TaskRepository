<template>
  <div id="control">
    <button @click="handleStart" :disabled="isRunning">Start</button>
    <button @click="handleStop" :disabled="!isRunning">Stop</button>
  </div>
</template>

<script>
export default {
  name: "Control",
  props: {
    isRunning: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleStart() {
      this.$emit("start");
    },
    handleStop() {
      this.$emit("stop");
    },
  },
};
</script>

<style>
/* Add any styles specific to Control component */
#control {
  margin-top: 1rem;
}

button {
  margin: 0 10px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border: 1px solid #007bff;
  background-color: #007bff;
  color: white;
  border-radius: 4px;
}

button:disabled {
  background-color: #ccc;
  color: #999;
  cursor: not-allowed;
}
</style>
