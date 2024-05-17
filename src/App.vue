<template>
  <main>
    <!--heading-->
    <header>
      <img src="./assets/Pinialogo.svg.png" alt="pinia logo" />
      <h1>Pinia Tasks</h1>
    </header>

    <!-- new task form  -->
    <div class="new-task-form">
      <TaskForm @add-task="onAddTask" />
    </div>

    <!-- filter -->
    <nav class="filter">
      <button @click="filter = 'all'">All tasks</button>
      <button @click="filter = 'favs'">Fav tasks</button>
    </nav>

    <!-- Loading -->
    <div class="loading" v-if="taskStore.loading">Loading tasks...</div>
    <!-- tasks list -->
    <div class="task-list" v-if="filter === 'all'">
      <p>You have {{ taskStore.totalCount() }} tasks left to do</p>
      <div class="over" v-for="task in taskStore.tasks.tasks">
        <TaskDetails :task="task" />
      </div>
    </div>
    <div class="task-list" v-if="filter === 'favs'">
      <p>You have {{ taskStore.favCount }} favs left to do</p>
      <div class="over" v-for="task in taskStore.favs">
        <TaskDetails :task="task" />
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from "vue";
import TaskDetails from "./components/TaskDetails.vue";
import { useTaskStore } from "./store/TaskStore";
import TaskForm from "./components/TaskForm.vue";
const taskStore = useTaskStore();

const filter = ref("all");

onMounted(() => {
  taskStore.getTasks();
});
</script>

<style>
@import "./assets/main.css";
.over {
  overflow-x: scroll;
}
</style>
