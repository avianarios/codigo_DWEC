<template>
  <article class="borde flex-columna">
    <h1>Comunicación padre-hijo con defineModel (varias props) y reactividad</h1>
    <h2>Padre</h2>
    <h3>Uso de varias propiedades</h3>
    <p class="destacado">Nombre: {{ first }}</p>
    <p class="destacado">Apellido: {{ last }}</p>
    <ComDefineModelReactHijo3 v-model:first-name="first" v-model:last-name="last" />
    <p class="mini">ComDefineModelReactPadre3.vue</p>
  </article>
</template>

<script setup>
  import { ref } from 'vue';
  import ComDefineModelReactHijo3 from '../especificos/ComDefineModelReactHijo3.vue';

  const first = ref('Juan');
  const last = ref('Pérez');
</script>
