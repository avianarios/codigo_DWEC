<template>
  <article class="borde flex-column">
    <input type="text" v-model="firstName" placeholder="Nombre" />
    <input type="text" v-model="lastName" placeholder="Apellido" />
    <p class="mini">ComDefineModelReactHijo3.vue</p>
  </article>
</template>
  
<script setup>
  import { defineModel } from 'vue';
  
  // Define modelos para cada propiedad
  // Cuando se pasa un parámetro a defineModel, se crea automáticamente el manejador de eventos para avisar al padre
  const firstName = defineModel('firstName');
  const lastName = defineModel('lastName');
</script>
  