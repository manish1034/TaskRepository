<template>
  <div id="home">
    <p>Type Something..</p> 
    <p class="p2">Press enter</p>
    <br/>
    <form v-on:submit.prevent>
        <input v-on:keypress="submit" type="text" v-model="name" />
    </form>

    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in data" :key="index">
          <td>{{ item }}</td>
          <td>
            <button @click="editItem(index)">Edit</button>
            <button @click="deleteItem(index)" class="btn">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
export default {
name: 'home',
data() {
  return {
    name: "",
    data: [],
    editIndex: -1
  };
},
methods: {
  submit(e) {
    if (e.keyCode === 13 && this.editIndex === -1) {  // Check for Enter key and if not editing
      this.data.push(this.name);
      this.name = "";
    } else if (e.keyCode === 13 && this.editIndex !== -1) {
      this.data[this.editIndex] = this.name;  // Update the item at the editIndex
      this.name = "";
      this.editIndex = -1;  // Reset the editIndex
    }
  },
  editItem(index) {
    this.name = this.data[index];  // Load the item into the input for editing
    this.editIndex = index;  // Set the editIndex to the current item index
  },
  deleteItem(index) {
    this.data.splice(index, 1);  // Remove the item from the array
  }
},
}
</script>

    
<style>
#home {
  max-width: 600px;
  margin: auto;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

p, input, table {
  width: 100%;
}

p {
  text-align: center;
}

.p2 {
  font-style: italic;
}

input {
  margin-top: 0.2rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;
  box-sizing: border-box; /* Ensures padding does not affect width */
}

input:focus {
  outline: 2px solid blue;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th, td {
  text-align: left;
  padding: 8px;
  border-bottom: 1px solid #ccc;
}

th {
  background-color: #f9f9f9;
}

button {
  margin-right: 10px;
  padding: 5px 10px;
  cursor: pointer;
  border: none;
  background-color: #007BFF;
  color: white;
  border-radius: 4px;
}

button:hover {
  background-color: #0056b3;
}

.btn {
  margin-right: 10px;
  padding: 5px 10px;
  cursor: pointer;
  border: none;
  background-color: #d13d3d;
  color: white;
  border-radius: 4px;
}

.btn:hover {
  background-color: #ba2929;
}

</style>
