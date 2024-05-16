<template>
  <table v-if="paginatedTasks.length > 0">
    <thead>
      <tr>
        <th>Tasks</th>
        <th>Date of completing</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(task, index) in paginatedTasks" :key="index">
        <td>{{ task.task }}</td>
        <td>{{ task.date }}</td>
        <td>
          <button @click="$emit('edit-task', index)" class="btn">Edit</button>
          <button @click="$emit('delete-task', index)" class="btnn">X</button>
        </td>
      </tr>
    </tbody>
  </table>
  <p v-else>No Details added yet.</p>

  <!-- Pagination controls -->
  <div class="pagination">
    <button @click="previousPage" :disabled="currentPage === 1">Previous</button>
    <span>Page {{ currentPage }} of {{ totalPages }}</span>
    <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
  </div>
</template>

<script>
export default {
  name: "TodoTable",
  props: {
    tasks: Array,
  },
  data() {
    return {
      currentPage: 1,
      tasksPerPage: 5,
    };
  },
  computed: {
    paginatedTasks() {
      const startIndex = (this.currentPage - 1) * this.tasksPerPage;
      const endIndex = startIndex + this.tasksPerPage;
      return this.tasks.slice(startIndex, endIndex);
    },
    totalPages() {
      return Math.ceil(this.tasks.length / this.tasksPerPage);
    },
  },
  methods: {
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
      console.log(this.tasks);
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
      console.log(this.tasks);
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
  font-size: 12px;
}
.btn {
  color: blue;
  margin-right: 1rem;
  font-size: 12px;
  border-right: 1px solid black;
  padding-right: 15px;
}
.btnn {
  color: red;
  margin-right: 1rem;
  font-size: 12px;
}
.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
.pagination button {
  padding: 8px 16px;
  margin: 0 5px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.pagination button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.pagination span {
  font-weight: bold;
  font-size: 14px;
  margin: 7px 10px;
}
</style>
