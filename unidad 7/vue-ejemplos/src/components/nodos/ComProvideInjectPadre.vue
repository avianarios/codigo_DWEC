<template>
  <article class="borde flex-columna">
    <h1>Comunicación con provide e inject</h1>
    <ComProvideInjectHijo />
    <p class="mini">ComProvideInjectPadre.vue</p>
  </article>
</template>
  
<script setup>
  import { provide } from 'vue';
  import ComProvideInjectHijo from '../hojas/ComProvideInjectHijo.vue';
  
  // Usamos `provide` para compartir un valor
  provide('mensaje', '¡Este es un mensaje desde el componente padre!');
</script>
  