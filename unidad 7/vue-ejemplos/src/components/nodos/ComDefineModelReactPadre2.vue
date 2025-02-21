<!-- Ejemplo de uso de Comunicación entre padre e hijo usando defineModel con nombrado de propiedad, lo que genera automáticamente el gestor de eventos en el padre y en el hijo, y reactividad para reflejar los cambios en el DOM-->
<template>
  <article class="borde flex-columna">
    <h1>Comunicación con defineModel y reactividad</h1>
    <h2>Padre</h2>
    <h3>Uso de una propiedad nombrada</h3>
    <p class="destacado">Mensaje: {{ mensaje }}</p>
    <p class="mini">ComDefineModelReactPadre2.vue</p>
    <ComDefineModelReactHijo2 v-model:mensajeDelPadre="mensaje" />
  </article>
</template>
  
<script setup>
  import { ref } from 'vue';
  import ComDefineModelReactHijo2 from '../hojas/ComDefineModelReactHijo2.vue';
  
  const mensaje = ref('Hola desde el padre');
</script>