import { defineStore } from "pinia";
import { computed, ref } from "vue";


export const useTaskStore = defineStore('taskStore1', () => {
    const tasks = ref({
        tasks: [],
        loading: false
    })

    const favs = computed(() => {
        return tasks.value.tasks.filter((t) => t.isFav)
    })

    const favCount = computed(() => {
        return tasks.value.tasks.reduce((p, c) => {
            return c.isFav ? p + 1 : p
        }, 0)
    })

    const totalCount = () => {
        return tasks.value.tasks.length;
    }
    
    const getTasks = async() => {
        tasks.value.loading = true;
        const res = await fetch('http://localhost:3000/tasks')
        const data = await res.json()

        tasks.value.tasks = data;
        tasks.value.loading = false;
    }

    const addTask = async(task) => {
        tasks.value.tasks.push(task)

        const res = await fetch('http://localhost:3000/tasks',{
            method: 'POST',
            body: JSON.stringify(task),
            headers: {'Content-Type': 'application/json'}
        })

        if(res.error){
            console.log(res.error)
        }
    }

    const deleteTask = async(id) => {
        tasks.value.tasks = tasks.value.tasks.filter( t => {
            return t.id !== id
        })

        const res = await fetch(`http://localhost:3000/tasks/${id}`,{
            method: 'DELETE',
        })

        if(res.error){
            console.log(res.error)
        }
    }
    const toggleFav = async(id) => {
        const task = tasks.value.tasks.find(t => t.id === id)
        task.isFav = !task.isFav

        const res = await fetch(`http://localhost:3000/tasks/${id}`,{
            method: 'PATCH',
            body: JSON.stringify({ isFav: task.isFav}),
            headers: {'Content-Type': 'application/json'}
        })

        if(res.error){
            console.log(res.error)
        }
    }

    return { tasks, favCount, favs, totalCount , getTasks, addTask , deleteTask , toggleFav } 
})