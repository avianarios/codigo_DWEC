<template>
  <Tarjeta>
    <template #titulo>
      <h1>Ranuras (slots)</h1>
    </template>
    <template #contenido>
      <p>¿Alguna vez has soñado con ir a este paisaje?</p>
    </template>
    <template #imagen>
      <img src="@/../public/paisaje-474px.jpg" alt="un reflejo en el lago">
    </template>
    <p class="mini">Un reflejo de las montañas en el lago</p>
  </Tarjeta>
</template>

<script setup>
  import Tarjeta from '../hojas/Tarjeta.vue';
</script>


