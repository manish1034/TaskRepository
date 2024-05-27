<template>
    <div id="home">
      <p>Type Something..</p> 
      <p class="p2">Press enter</p>
      <br/>
      <form v-on:submit.prevent>
          <input v-on:keypress="submit" type="text" v-model="name" />
      </form>

      <ul>
          <li v-for="(item, index) in data" v-bind:key="index">{{item}}</li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'home',
  data: function() {
    return {
      name: "",
      data: []
    };
  },
  methods: {
    submit: function(e) {
      if (e.keyCode === 13) {
        this.data.push(this.name);
        this.name = "";
      }
    }
  },
}
</script>
    
<style>
  p {
    text-align: center;
  }

  .p2 {
    font-style: italic;
  }

  .input-field {
      display: flex;
      justify-content: center;
      align-content: center;
  }
  
  input {
      margin-top: 0.2rem;
      border: 1px solid black;
      border-radius: 4px;
      padding: 8px;
  }
  
  input:focus {
      border: none;
      outline: 2px solid blue;
  }
</style>