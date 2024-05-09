<template>
    <button id="btn" @click="handleClick">
      Button {{ name }}
    </button>
  </template>
  
  <script>
  export default {
    name: "Button",
    props: {
      name: String
    },
    methods: {
      handleClick() {
        this.$emit("button-click", this.name); // Emit event with button name
      }
    }
  };
  </script>
  
  <style>
  #btn {
    background: #007bff;
    padding: 1rem;
    margin: 15px;
    color: aliceblue;
    border-radius: 4px;
  }
  
  #btn:hover {
    background: #0458b1;
  }
  </style>
  