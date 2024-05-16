<template>
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
          <button @click="$emit('delete-customer', index)" class="btn">X</button>
        </td>
      </tr>
    </tbody>
  </table>
  <p v-else>No customers added yet.</p>
</template>

<script>
export default {
  props: {
    customers: Array,
  },
  methods: {
    deleteCustomer(index) {
      this.$emit("delete-customer", index);
    },
  },
};
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th,
td {
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

/* Other styles can be kept here if applicable to the table component */
</style>
