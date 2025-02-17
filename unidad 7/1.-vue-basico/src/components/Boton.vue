<!-- Boton.vue -->
<template>
    <button @click="handleClick">{{ texto }}</button>
  </template>
  
  <script setup>
    // Propiedades del componente
  const props = defineProps({
    texto: {
      type: String,
      default: 'Haz clic aquí'
    }
  });
  
  // Emitir evento cuando se haga clic en el botón
  const emit = defineEmits(['clickButton']);
  function handleClick() {
    emit('clickButton', 'El botón ha sido pulsado');
  }
  </script>
  
  <style scoped>

  </style>
  