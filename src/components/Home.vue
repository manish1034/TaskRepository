<template>
    <div id="home">
        <h1>{{message}}Testing....</h1>
        <input type="text" v-model="message">
    </div>
</template>

<script>
export default {
  name: 'home',
  data(){
    return{
        message:"",
    }
  }
}
</script>
    
<style>
h1 {
    text-align: center;
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

</style>