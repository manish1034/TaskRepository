<template>
    <div id="home">
        <h1>{{message}} Testing....</h1>
        {{date}}
        <div class="input-field">
            <input type="text" v-model="message">
            <button @click="clearMessage">clear</button>
            <button @click="capsMessage">caps</button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'home',
  data(){
    return{
        message:"Manish",
    }
  },
  created: function() {
    console.log("created");
    this.date = new Date();
  },
  mounted: function() {
    console.log("mounted");
    this.date = new Date();
  },
  updated: function() {
    console.log("updated");
    // this.message = new Date();
  },
  destroyed: function() {
    console.log("destroyed");
    this.message = new Date();
  },
  methods: {
    clearMessage() {
      this.message = ""; // Clear the message text
    },
    capsMessage() {
        this.message = this.message.toUpperCase();
    }
  },
}
</script>
    
<style>
h1 {
    text-align: center;
}

.input-field {
    display: flex;
    justify-content: center;
    align-content: center;
}

input {
    margin-top: 1rem;
    border: 1px solid black;
    border-radius: 4px;
    padding: 8px;
}

input:focus {
    border: none;
    outline: 2px solid blue;
}

button {
    border: 1px solid black;
    margin-top: 1rem;
    padding: 4px 8px;
    height: 2.6rem;
    border-radius: 4px;
    align-content: center;
}

button:hover {
    background: blanchedalmond;
    color: gray;
}

</style>