<template>
  <article class="borde flex-columna">
    <h2>Hijo</h2>
    <!-- v-bind:value -> enlaza unidireccionalmente el atributo value del input con la prop modelValue -->
    <input v-model="mensaje" />
    <p class="mini">ComDefineModelReactHijo2.vue</p>
  </article>
</template>
  
<script setup>
  import { defineModel } from 'vue';

  // defineModel proporciona acceso al valor vinculado con v-model
  // Al usar un parámetro en defineModel, Vue automáticamente maneja el evento, evitando tener que definirlo, asociarlo a la etiqueta y definir lo que hace para avisar al padre de cambios en la propiedad.
  const mensaje = defineModel('mensajeDelPadre');
</script>
