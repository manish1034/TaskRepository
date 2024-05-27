<template>
  <div id="home">
    <todo-form @add-task="addTask" ref="todoForm" />
    <todo-table :tasks="tasks" @delete-task="deleteTask" @edit-task="editTask" />
  </div>
</template>

<script>
import TodoForm from "./TodoForm.vue";
import TodoTable from "./TodoTable.vue";
export default {
  name: "Home",
  components: {
    TodoForm,
    TodoTable,
  },
  data() {
    return {
      tasks: [],
      editingIndex: -1,
    };
  },
  methods: {
    addTask(taskData) {
      if (this.editingIndex === -1) {
        // Add new customer
        this.tasks.push(taskData);
      } else {
        // Update existing customer
        this.tasks[this.editingIndex] = taskData;
        this.editingIndex = -1; // Reset editing index after update
      }
      this.$refs.todoForm.clearForm();
    },
    editTask(index) {
      // Set editingIndex to the index of the customer being edited
      this.editingIndex = index;
      console.log(index);
      // Populate the form with the customer's data for editing
      const taskToEdit = this.tasks[index];
      console.log(taskToEdit);
      this.$refs.todoForm.setFormValues(taskToEdit); // Assume DetailForm has a setFormValues method
    },
    deleteTask(index) {
      this.tasks.splice(index, 1);
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
