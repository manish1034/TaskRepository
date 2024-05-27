<template>
  <div id="home">
    <detail-form @add-customer="addCustomer" ref="customerForm" />
    <detail-table
      :customers="customers"
      @delete-customer="deleteCustomer"
      @edit-customer="editCustomer"
    />
  </div>
</template>

<script>
import DetailForm from "./DetailForm.vue";
import DetailTable from "./DetailTable.vue";

export default {
  name: "Home",
  components: {
    DetailForm,
    DetailTable,
  },
  data() {
    return {
      customers: [],
      editingIndex: -1,
    };
  },
  methods: {
    addCustomer(customerData) {
      if (this.editingIndex === -1) {
        // Add new customer
        this.customers.push(customerData);
      } else {
        // Update existing customer
        this.customers[this.editingIndex] = customerData;
        this.editingIndex = -1; // Reset editing index after update
      }
      this.$refs.customerForm.clearForm();
    },
    editCustomer(index) {
      // Set editingIndex to the index of the customer being edited
      this.editingIndex = index;
      // Populate the form with the customer's data for editing
      const customerToEdit = this.customers[index];
      this.$refs.customerForm.setFormValues(customerToEdit); // Assume DetailForm has a setFormValues method
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
</style>
