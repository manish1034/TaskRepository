<template>
  <div>
    <button @click="toggleFormVisibility">Add Details</button>
    <div v-if="isFormVisible">
      <p>Personal Details</p>
      <form @submit.prevent="handleAddCustomer">
        <div style="display: flex; gap: 5px">
          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="text"
              v-model="customerData.email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div class="form-group">
            <label for="name">Name</label>
            <input
              type="text"
              v-model="customerData.name"
              placeholder="Enter your Name"
              required
            />
          </div>
        </div>
        <div class="form-group">
          <label for="dob">Date of Birth</label>
          <input
            type="date"
            v-model="customerData.dob"
            placeholder="Enter date of birth"
            required
          />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            v-model="customerData.password"
            placeholder="Password"
            required
          />
        </div>
        <div class="form-group">
          <label for="confirmPass">Confirm Password</label>
          <input
            type="password"
            v-model="customerData.confirmPass"
            placeholder="Confirm Password"
            required
          />
        </div>
        <div class="form-group" style="display: flex; justify-content: center">
          <input type="checkbox" required />
          <label class="check">Accept Terms & Condition</label>
        </div>
        <button type="submit" class="submitBtn">Add</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailForm",
  data() {
    return {
      customerData: {
        email: "",
        name: "",
        dob: "",
        password: "",
        confirmPass: "",
      },
      isFormVisible: false,
    };
  },
  methods: {
    handleAddCustomer() {
      this.$emit("add-customer", { ...this.customerData });
      this.clearForm();
      this.isFormVisible = false;
    },
    clearForm() {
      this.customerData = {
        email: "",
        name: "",
        dob: "",
        password: "",
        confirmPass: "",
      };
    },
    toggleFormVisibility() {
      this.isFormVisible = !this.isFormVisible;
    },
    setFormValues(customer) {
      this.customerData = { ...customer };
      this.isFormVisible = true; // Show the form for editing
    },
  },
};
</script>

<style scoped>
p {
  text-align: center;
  font-size: 20px;
  font-weight: 800;
  color: #2c3e50; /* Dark blue shade */
  margin-top: 10px;
}

form {
  background: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.form-group {
  margin-bottom: 10px;
}

label {
  display: block;
  font-size: 12px;
  font-weight: 600;
  color: #34495e; /* Dark gray/blue */
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 5px;
  border: 1px solid #bdc3c7; /* Light gray */
  border-radius: 4px;
  font-size: 12px;
  transition: border-color 0.3s ease-in-out;
}

input[type="text"]:focus,
input[type="password"]:focus {
  border-color: #3498db; /* Nice blue */
  box-shadow: 0 0 8px rgba(52, 152, 219, 0.2);
}

input[type="date"] {
  width: 100%;
  padding: 5px;
  border: 1px solid #bdc3c7; /* Consistent with other inputs */
  border-radius: 4px;
  font-size: 12px;
  background-color: white;
  color: #2c3e50; /* Dark text for readability */
  cursor: pointer;
}

input[type="date"]:focus {
  border-color: #3498db; /* Highlight focus with blue border */
  box-shadow: 0 0 8px rgba(52, 152, 219, 0.2);
}

button {
  display: block;
  margin: auto;
  width: 70%;
  padding: 6px 10px;
  background-color: #3498db; /* Bright blue */
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
}

button:hover {
  background-color: #2980b9; /* Darker blue */
  transform: translateY(-2px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.check {
  user-select: none;
  cursor: pointer;
  font-size: 10px;
  display: flex;
  align-items: center;
}

input[type="checkbox"] {
  margin-right: 10px;
}
</style>
