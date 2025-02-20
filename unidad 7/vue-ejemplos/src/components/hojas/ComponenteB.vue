<template>
    <article class="borde flex-columna">
        <h2>Componente B</h2>
      <p>Texto: {{ texto }}</p>
      <input v-model="texto" placeholder="Escribe algo..." />
    </article>
</template>
  
<script setup>
  import { ref, onActivated, onDeactivated } from 'vue';
  
  const texto = ref('');
  
  onActivated(() => {
    console.log('Componente B activado');
  });
  
  onDeactivated(() => {
    console.log('Componente B desactivado');
  });
</script>
  