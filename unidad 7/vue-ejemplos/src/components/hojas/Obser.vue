<template>
    <p>Valor: {{ contador }}</p>
    <button @click="contador++">Incrementar</button>
    <p>{{ mensaje }}</p>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue';
  
  const contador = ref(0);
  const mensaje = ref("Esperando cambios...");
  
  // Observador: Detecta cualquier cambio en "contador"
  watch(contador, (nuevoValor) => {
    mensaje.value = `Nuevo valor: ${nuevoValor}`;
  });
  
  // Simula un cambio después de 3 segundos
  setTimeout(() => {
    contador.value = 10; // No se hizo clic, pero watch() lo detecta
  }, 3000);
  </script>
  