import { defineStore } from "pinia";
import {  ref } from "vue";

export const useAnimalStore = defineStore("animalStore", () => {
  const animalList = ref([]);

  const addAnimal = (image, title, type) => {
    animalList.value.push({
        title,
        type,
        image,
        id: Math.random()
    })
  }

  const deleteAnimal = (index) => {
    animalList.value.splice(index, 1)
  }

  const updateAnimal = (image, title, type, index) => {
    animalList.value[index] = {
        image,
        title,
        type,
        id: animalList[index].id
    }
  }

  return { list: animalList, add: addAnimal, delete: deleteAnimal, update: updateAnimal };
});