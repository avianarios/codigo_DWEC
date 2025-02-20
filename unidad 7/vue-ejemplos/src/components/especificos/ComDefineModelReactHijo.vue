<template>
  <article class="borde flex-columna">
    <h2>Hijo</h2>
    <!-- v-bind:value -> enlaza unidireccionalmente el atributo value del input con la prop modelValue -->
    <input :value="modelValue" @input="updateValue" />
    <p class="mini">ComDefineModelReactHijo.vue</p>
  </article>
</template>
  
<script setup>
  import { defineModel } from 'vue';
  const emit = defineEmits(['update:modelValue']);

  // defineModel proporciona acceso al valor vinculado con v-model. Al usarse sin parámetros, no crea automáticamente el evento y hay que hacerlo a mano en el input para avisar al padre de que ha habido cambios.
  const modelValue = defineModel();

  function updateValue(event) {
      emit('update:modelValue', event.target.value);
  }
</script>
