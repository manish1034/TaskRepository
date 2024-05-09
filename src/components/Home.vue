<template>
  <div id="home">
    <Button name="1" @button-click="showAlert('Button 1 clicked!')" />
    <Button name="2" @button-click="toggleMessage" />
    <p>{{ msg }}</p>
  </div>
</template>

<script>
import Button from './Button.vue'

export default {
  name: 'Home',
  components: {
    Button,
  },
  data() {
    return {
      msg: "Yosh!!!",
      isMsgVisible: true
    };
  },
  methods: {
    showAlert(message) {
      alert(message);
    },
    toggleMessage() {
      this.isMsgVisible = !this.isMsgVisible;
      this.msg = this.isMsgVisible ? "Yosh!!!" : "Message toggled!";
    }
  }
};
</script>

<style>
#home {
  max-width: 600px;
  margin: auto;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

p {
  text-align: center;
}
</style>
