<!-- Ejemplo de uso de Comunicación entre padre e hijo usando defineModel con la propiedad por defecto, por lo que hay que generar a mano el gestor de eventos en el hijo, y reactividad para reflejar los cambios en el DOM-->
<template>
  <article class="borde flex-columna">
    <h1>Comunicación Padre-Hijo con defineModel y reactividad</h1>
    <h2>Padre</h2>
    <p class="destacado">Mensaje: {{ mensaje }}</p>
    <p class="mini">ComDefineModelReactPadre</p>
    <ComDefineModelReactHijo v-model="mensaje" />
  </article>
</template>
  
<script setup>
  import { ref } from 'vue';
  import ComDefineModelReactHijo from './ComDefineModelReactHijo.vue';
  
  const mensaje = ref('Hola desde el padre');
</script>