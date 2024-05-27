<template>
  <div>
    <p>Customer Details</p>
    <form @submit.prevent="handleAddCustomer">
      <div class="form-group">
        <label for="firstName">First Name</label>
        <input
          type="text"
          v-model="customerData.firstName"
          placeholder="Enter First Name"
          required
        />
      </div>
      <div class="form-group">
        <label for="lastName">Last Name</label>
        <input
          type="text"
          v-model="customerData.lastName"
          placeholder="Enter Last Name"
          required
        />
      </div>
      <div class="form-group">
        <label for="address">Address</label>
        <input
          type="text"
          v-model="customerData.address"
          placeholder="Enter Address"
          required
        />
      </div>
      <button type="submit" class="submitBtn">Add</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "CustomerForm",
  data() {
    return {
      customerData: {
        firstName: "",
        lastName: "",
        address: "",
      },
    };
  },
  methods: {
    handleAddCustomer() {
      this.$emit("add-customer", { ...this.customerData });
    },
    clearForm() {
      this.customerData = {
        firstName: "",
        lastName: "",
        address: "",
      };
    },
  },
};
</script>

<style scoped>
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
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

/* Other styles can be kept here if applicable to the form component */
</style>
