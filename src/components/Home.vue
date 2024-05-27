<template>
    <div id="home">
        <h1 v-bind:style="{color: color_value.color}">
                {{name}} Testing...
        </h1>
        <div class="input-field">
            <input type="text" v-model="name" />
            <select v-model="color_value">
                <option v-bind:value="{color: 'red'}">red</option>
                <option v-bind:value="{color: 'yellow'}">yellow</option>
                <option v-bind:value="{color: 'black'}">black</option>
                <option v-bind:value="{color: 'orange'}">orange</option>
            </select>
        </div>
    </div>
</template>

<script>
export default {
  name: 'home',
  data(){
    return{
        name: "Manish",
        date: false,
        color_value: {
        color: "black"
      },
    }
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
    margin-right: 1rem;
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