<!-- ObjetoPerfilUsuario.vue -->
<template>
    <article class="borde flex-columna">
      <h2>Componente hijo</h2>
      <p>Nombre: {{ user.nombre }}</p>
      <p>Edad: {{ user.edad }}</p>
      <button @click="updateUserData">Actualizar datos</button>
      <p class="mini">ObjetoPerfilUsuario.vue</p>
    </article>
  </template>
  
  <script setup>
  // Definir las props que recibe el componente
  const props = defineProps({
    user: {
      type: Object,
      required: true,
    },
  });
  
  // Definir los eventos que el componente puede emitir
  const emit = defineEmits(['update-user']);
  
  // Función para emitir el evento con los nuevos datos
  function updateUserData() {
    const newUser = {
      nombre: 'Procopio',
      edad: 35,
    };
    emit('update-user', newUser); // Emitir el evento con los nuevos datos
  }
  </script>
  