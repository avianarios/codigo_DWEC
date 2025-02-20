<template>
    <article class="borde flex-columna">
        <h1>Comunicación con v-model y reactividad</h1>
        <h2>Padre</h2>
        <p>Mensaje en el Padre: {{ parentMessage }}</p>
        <p class="mini">ComVmodelReactPadre.vue</p>
        <ComVmodelReactHijo v-model="parentMessage" />
    </article>
</template>
  
<script setup>
  import { ref } from 'vue';
  import ComVmodelReactHijo from './ComVmodelReactHijo.vue';
  
  const parentMessage = ref('Hola desde el padre');
</script>