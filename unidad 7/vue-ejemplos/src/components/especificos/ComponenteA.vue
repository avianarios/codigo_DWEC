<template>
    <article class="borde flex-columna">
      <h2>Componente A</h2>
      <p>Valor del contador: {{ contador }}</p>
      <button @click="contador++">Incrementar</button>
    </article>
</template>
  
<script setup>
  import { ref, onActivated, onDeactivated } from 'vue';
  
  const contador = ref(0);
  
  onActivated(() => {
    console.log('Componente A activado');
  });
  
  onDeactivated(() => {
    console.log('Componente A desactivado');
  });
</script>
  