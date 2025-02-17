<script setup>
import { ref } from 'vue';

// Definir las frutas como una variable reactiva
const frutas = ref([
  { nombre: 'Manzana', cantidad: 5 },
  { nombre: 'Plátano', cantidad: 2 },
  { nombre: 'Naranja', cantidad: 1 },
  { nombre: 'Pera', cantidad: 4 },
  { nombre: 'Mango', cantidad: 2 }
]);

// Función para reducir la cantidad de una fruta al hacer clic
function disminuirCantidad(index) {
  if (frutas.value[index].cantidad > 0) {
    frutas.value[index].cantidad--;
  }
}
</script>

<template>
  <article class="borde">
    <h1>Reactividad con objetos y vinculación de clases</h1>
    <h2>Lista de Frutas</h2>
    <ul>
      <li 
        v-for="(fruta, index) in frutas" 
        :key="index"
        :class="{ 'pocas': fruta.cantidad < 3, 'agotado': fruta.cantidad === 0 }"
        @click="disminuirCantidad(index)"
      >
        {{ fruta.nombre }} - {{ fruta.cantidad }} unidades
      </li>
    </ul>
    <p class="mini">ReactividadObjetos2.vue</p>
  </article>
</template>

<style scoped>
.pocas {
  color: orange;
}
.agotado {
  color: red;
  text-decoration: line-through;
}
ul{
  padding: 15px;
}
</style>
