<template>
    <article class="borde flex-columna">
    <h1>Comparación de Métodos de Reactividad</h1>

    <h2>Observador básico</h2>
    <button @click="contador++">Incrementar: {{ contador }}</button>
      
      <!-- 1. Mostachos y v-bind: Solo reflejan el valor -->
      <!-- Se actualizan automáticamente si contador cambia.
      No pueden ejecutar lógica adicional cuando cambia el valor. -->
      <h2>1. Mostachos y v-bind</h2>
      <p>Valor: {{ contador }}</p>
      <input v-bind:value="contador" />
  
      <!-- 2. Eventos: Solo reaccionan a eventos -->
      <!-- @click="incrementar" hace que contador aumente solo cuando el usuario haga clic en el botón. -->      
      <h2>2. Eventos con v-on</h2>
      <button @click="contador++">Incrementar con evento</button>
  
      <!-- 3. Observador: Detecta cualquier cambio -->
      <!-- Cuando contador cambia, sin importar la causa, se actualiza mensaje. -->
      <h2>3. Observador (watch)</h2>
      <p>{{ mensaje }}</p>
    </article>
</template>
  
<script setup>
  import { ref, watch } from 'vue';
  
  const contador = ref(0);
  const mensaje = ref("Aún no ha cambiado");
  
//  Esta función se define si se usa @click="incrementar" en el botón
//  2. Evento: Solo incrementa si el usuario hace clic
//   const incrementar = () => {
//     contador.value++;
//   };
  
  // 3. Observador: Se activa con cualquier cambio en "contador"
  watch(contador, (nuevoValor, viejoValor) => {
    mensaje.value = `El contador cambió de ${viejoValor} a ${nuevoValor}`;
  });
  
  // Simula un cambio de valor externo después de 3 segundos
  setTimeout(() => {
    contador.value = 10; // Esto NO activaría el evento, pero sí el watch()
  }, 3000);
</script>
  