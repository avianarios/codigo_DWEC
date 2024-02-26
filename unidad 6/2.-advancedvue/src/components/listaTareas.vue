<script setup>
import { ref } from 'vue'
import tarea from './tarea.vue'
  
const nuevoTextoTarea = ref('')
const tareas = ref([
  {
    id: 1,
    title: 'Lavar platos'
  },
  {
    id: 2,
    title: 'Preparar comida'
  },
  {
    id: 3,
    title: 'Limpiar cocina'
  }
])

let proximoIDTarea = tareas.value.length;

function nuevaTarea() {
  tareas.value.push({
    id: proximoIDTarea++,
    title: nuevoTextoTarea.value
  })
  nuevoTextoTarea.value = ''
}

</script>

<template>
	<form v-on:submit.prevent="nuevaTarea">
    <label for="nueva-tarea">Añadir tarea</label>
    <!--v-model creates two-way data binding between input element and nuevoTextoTarea variable allowing to store its value-->
    <input
      v-model="nuevoTextoTarea"
      id="nueva-tarea"
      placeholder="nueva tarea"
    />
    <button>Añadir</button>
  </form>
  <ul>
    <!--remove is an event emitted by "tarea" component for the parent to capture it -->
    <tarea
      v-for="(tarea, index) in tareas"
      :key="tarea.id"
      :title="tarea.title"
      @remove="tareas.splice(index, 1)"
    ></tarea>
  </ul>


</template>