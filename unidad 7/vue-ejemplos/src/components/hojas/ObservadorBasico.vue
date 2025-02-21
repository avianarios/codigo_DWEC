<template>
    <article class="borde flex-columna">
        <h1>Observador básico</h1>
        <button @click="contador++">Incrementar: {{ contador }}</button>
    </article>
</template>

<script setup>
    import { ref, watch } from 'vue';

    const contador = ref(0);

    watch(contador, (nuevoValor, viejoValor) => {
      console.log(`El contador cambió de ${viejoValor} a ${nuevoValor}`);
    });
</script>