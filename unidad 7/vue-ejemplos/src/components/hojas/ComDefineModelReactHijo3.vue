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
  // Al usar un parámetro en defineModel, Vue automáticamente maneja el evento, evitando tener que definirlo, asociarlo a la etiqueta y definir lo que hace para avisar al padre de cambios en la propiedad.
  const firstName = defineModel('firstName');
  const lastName = defineModel('lastName');
</script>
  