<template>
    <div id="home">
        <h1 :class="{red: isRed}">{{message}} Testing....</h1>
        {{date}}
        <div class="input-field">
            <input type="text" v-model="message">
            <button @click="clearMessage">clear</button>
            <button @click="capsMessage">caps</button>
            <input class="check-input" :checked="isRed" v-model="isRed" type="checkbox" @click="red" /> <span>Red</span>
        </div>
    </div>
</template>

<script>
export default {
  name: 'home',
  data(){
    return{
        message:"Manish",
        date: false,
        isRed: false,
    }
  },
  created: function() {
    this.date =
      new Date().getFullYear() +
      "-" +
      new Date().getMonth() +
      "-" +
      new Date().getDay();
  },
  mounted: function() {
    this.date =
      new Date().getFullYear() +
      "-" +
      new Date().getMonth() +
      "-" +
      new Date().getDay();
  },
  methods: {
    clearMessage() {
      this.message = ""; // Clear the message text
    },
    capsMessage() {
        this.message = this.message.toUpperCase();
    },
    red: function() {
        // eslint-disable-next-line
        console.log(this.isRed)
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

span {
    margin-top: 1.5rem;
    padding-left: 0.5rem;
}

.red {
  color: red;
}

.green {
  color: green;
}

</style>