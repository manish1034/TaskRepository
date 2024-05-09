<template>
  <div>
    <h2>Countdown Timer: {{ count }}</h2>
  </div>
</template>

<script>
export default {
  name: "Timer",
  props: {
    count: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style>
/* Add any styles specific to Timer component */
</style>
