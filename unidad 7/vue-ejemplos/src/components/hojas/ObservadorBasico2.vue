<template>
  <article class="borde flex-columna">
    <h1>Observador 2</h1>
    <h2>uso de watchEffect</h2>
    <h3>Reaccionando a un botón y a cambio externo (simulado por un setTimeout) </h3>
    <p>Valor: {{ contador }}</p>
    <p> {{ mensaje }}</p>
    <button @click="contador++">Incrementar</button>
    <p class="mini">ObservadorBasico2.vue</p>
  </article>
</template>
  
<script setup>
  import { ref, watchEffect } from 'vue';
  
  const contador = ref(0);
  const mensaje = ref("Esperando cambios...");
  
  // Observador con watchEffect: Reacciona a cualquier cambio en "contador" automáticamente
  watchEffect(() => {
    mensaje.value = `Este texto es el observador reaccionando. El valor es: ${contador.value}`;
  });
  
  // Simula un cambio después de 3 segundos para demostrar que el observador reaccionará a dicho cambio
  setTimeout(() => {
    contador.value = 10; // No se hizo clic, pero watchEffect lo detecta
  }, 3000);
</script>