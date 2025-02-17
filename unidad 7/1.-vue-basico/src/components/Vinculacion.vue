<template>
    <article class="borde flex-columna">
      <h1>Vinculación con v-bind</h1>
  
      <!-- 1. Vinculación de atributos -->
      <img v-bind:src="imageSrc" v-bind:alt="imageAlt" />
  
      <!-- 2. Vinculación de clases -->
      <div v-bind:class="{ 'activo': isActive, 'deshabilitado': !isActive }">
        Este div tiene clases vinculadas.
      </div>
  
      <!-- 3. Vinculación de estilos -->
      <div v-bind:style="{ color: textColor, fontSize: fontSize + 'px' }">
        Este texto tiene estilo vinculado.
      </div>
  
      <!-- 4. Vinculación de un atributo booleano (disabled) -->
      <button v-bind:disabled="isButtonDisabled">Botón deshabilitado</button>
  
      <!-- 5. Sin necesidad de v-bind, ya que el nombre del atributo coincide con el nombre de la propiedad -->
      <a :href="url">Enlace vinculado</a>
      <p class="mini">Componente Vinculacion.vue</p>
    </article>
  </template>
  
  <script setup>
  const imageSrc = 'https://cataas.com/cat?width=400';
  const imageAlt = 'Imagen de ejemplo';
  const isActive = true;
  const textColor = 'blue';
  const fontSize = 16;
  const isButtonDisabled = false;
  const url = 'https://vuejs.org';
  </script>
  
  <style scoped>
  .activo {
    color: green;
  }
  .deshabilitado {
    background-color: lightgray;
  }
  </style>
  