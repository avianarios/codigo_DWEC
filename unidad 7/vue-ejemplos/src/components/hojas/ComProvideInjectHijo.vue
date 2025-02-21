<template>
  <article class="borde flex-columna">
    <h2>Componente Hijo</h2>
      <p>{{ mensaje }}</p>
      <p class="mini">ComProvideInjectHijo.vue</p>
    </article>
</template>
  
<script setup>
  import { inject } from 'vue';
  
  // Usamos `inject` para obtener el valor proporcionado por el padre
  const mensaje = inject('mensaje');
</script>
  