<template>
  <div id="home">
    <p>Customer Details</p> 
    <br/>
    <form @submit.prevent="addCustomer">
      <div class="form-group">
        <label for="firstName">First Name</label>
        <input type="text" v-model="firstName" placeholder="Enter First Name" required>
      </div>
      <div class="form-group">
        <label for="lastName">Last Name</label>
        <input type="text" v-model="lastName" placeholder="Enter Last Name" required>
      </div>
      <div class="form-group">
        <label for="address">Address</label>
        <input type="text" v-model="address" placeholder="Enter Address" required>
      </div>
      <button type="submit" class="submitBtn">Add</button>
    </form>

    <table v-if="customers.length > 0">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Address</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(customer, index) in customers" :key="index">
          <td class="td-col">{{ customer.firstName }}</td>
          <td class="td-col">{{ customer.lastName }}</td>
          <td class="td-col">{{ customer.address }}</td>
          <td>
            <button @click="deleteCustomer(index)" class="btn">X</button>
          </td>
        </tr>
      </tbody>
    </table>
    <p v-else>No customers added yet.</p>
  </div>
</template>

<script>
export default {
  name: 'CustomerDetails',
  data() {
    return {
      firstName: "",
      lastName: "",
      address: "",
      customers: []
    };
  },
  methods: {
    addCustomer() {
      if (this.firstName && this.lastName && this.address) {
        this.customers.push({
          firstName: this.firstName,
          lastName: this.lastName,
          address: this.address
        });
        // Clear input fields after adding
        this.firstName = "";
        this.lastName = "";
        this.address = "";
      }
    },
    deleteCustomer(index) {
      this.customers.splice(index, 1);
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
  font-size: 25px;
  font-weight: 900;
}

form {
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 10px;
}

label {
  display: block;
  font-weight: 400;
}

input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 10px 20px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

.btn {
  padding: 5px 15px;
  margin-left: 10px;
  background-color: #f92c4e;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn:hover {
  background-color: #a3034b;
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

.td-col {
  font-weight: 400;
}
</style>
