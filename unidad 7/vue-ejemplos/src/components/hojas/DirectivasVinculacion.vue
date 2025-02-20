<template>
    <article class="borde flex-columna">
      <h1>Vinculación con v-bind</h1>

      <!-- Recuerda que, cuando se vinculan atributos simples, existe una versión abreviada de v-bind llamada : que se puede usar en lugar de v-bind:. -->
      <a v-bind="atributosEnlace">Enlace dinámico</a>

      <!-- Enlace dinámico con v-bind -->
      <a v-bind:href="url" :title="tituloEnlace">Otro enlace dinámico</a>

      <!-- Vinculación de atributos con v-bind abreviado -->
      <img :src="imageSrc" v-bind:alt="imageAlt" />
  
      <!-- Vinculación de clases -->
      <div :class="{ 'activo': isActive, 'deshabilitado': !isActive }">
        Este div tiene clases vinculadas.
      </div>
  
      <!-- Vinculación de estilos -->
      <div :style="{ color: textColor, fontSize: fontSize + 'px' }">
        Este texto tiene estilo vinculado.
      </div>
  
      <!-- Vinculación de un atributo booleano (disabled) -->
      <button v-bind:disabled="isButtonDisabled">Botón deshabilitado</button>
  
      <p class="mini">DirectivasVinculacion.vue</p>
    </article>
  </template>
  
<script setup>
  const atributosEnlace = {
      href: 'https://vuejs.org',
      target: '_blank',
      title: 'Ir a Vue.js'
    };
    const url='https://www.duckduckgo.com';
    const title='Ir a duckduckgo';

  const imageSrc = 'https://cataas.com/cat?width=400';
  const imageAlt = 'Imagen de ejemplo';
  const isActive = true;
  const textColor = 'blue';
  const fontSize = 16;
  const isButtonDisabled = false;

</script>
  
<style scoped>
  .activo {
    color: green;
  }
  .deshabilitado {
    background-color: lightgray;
  }
</style>
  