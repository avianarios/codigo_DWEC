<template>
    <article class="borde flex-columna">
        <h1>Observador</h1>
        <h2>uso de watch</h2>
        <h3>Reaccionando a un botón y a cambio externo (simulado por un setTimeout) </h3>
        <p>Valor: {{ contador }}</p>
        <p> {{ mensaje }}</p>
        <button @click="contador++">Incrementar</button>
        <p class="mini">ObservadorBasico.vue</p>
    </article>
</template>
  
<script setup>
  import { ref, watch } from 'vue';
  
  const contador = ref(0);
  const mensaje = ref("Esperando cambios...");
  
  // Observador: Detecta cualquier cambio en "contador" y modifica el mensaje
  watch(contador, (nuevoValor) => {
    mensaje.value = `Este texto es el observador reaccionando. El valor es: ${nuevoValor}`;
  });
  
  // Simula un cambio después de 3 segundos para demostrar que el observador reaccionará a dicho cambio
  setTimeout(() => {
    contador.value = 10; // No se hizo clic, pero watch() lo detecta
  }, 3000);
</script>