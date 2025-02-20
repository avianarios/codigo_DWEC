<!-- ReactividadObjetos.vue -->
<template>
    <section class="justify-center flex-columna borde">
      <h1>Reactividad con objetos</h1>
      <h2>Componente padre</h2>
      <ObjetoPerfilUsuario :user @update-user="updateUser" />
      <p class="mini">ReactividadObjetos.vue</p>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import ObjetoPerfilUsuario from '@/components/especificos/ObjetoPerfilUsuario.vue';
  
  // Definir un objeto reactivo
  const user = ref({
    name: 'Juan',
    age: 30,
  });
  
  // Función para manejar la actualización del usuario
  function updateUser(newUser) {
    user.value = newUser; // Cambiar el objeto reactivo
  }
  </script>
  