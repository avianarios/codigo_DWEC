<template>
    <article class="borde flex-columna">
        <h2>Hijo</h2>
        <input :value="modelValue" @input="updateValue" />
        <p class="mini">ComVmodelReactHijo.vue</p>
    </article>
  </template>
  
  <script setup>
  const props = defineProps(['modelValue']);
  const emit = defineEmits(['update:modelValue']);
  
  function updateValue(event) {
    emit('update:modelValue', event.target.value);
  }
  </script>