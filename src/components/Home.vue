<template>
  <div id="home">
    <customer-form @add-customer="addCustomer" ref="customerForm" />
    <customer-table :customers="customers" @delete-customer="deleteCustomer" />
  </div>
</template>

<script>
import CustomerForm from "./CustForm.vue";
import CustomerTable from "./CustTable.vue";

export default {
  name: "Home",
  components: {
    CustomerForm,
    CustomerTable,
  },
  data() {
    return {
      customers: [],
    };
  },
  methods: {
    addCustomer(customerData) {
      this.customers.push(customerData);
      // Call the clearForm method from CustomerForm component to reset the form
      this.$refs.customerForm.clearForm();
    },
    deleteCustomer(index) {
      this.customers.splice(index, 1);
    },
  },
};
</script>

<style>
#home {
  max-width: 600px;
  margin: auto;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

/* Other styles can be kept here if applicable to the home component */
</style>
