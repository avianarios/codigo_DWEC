<template>
    <section class="borde flex-columna">
        <h1>Reactividad con datos primitivos</h1>
        <p class="rojo">Contador: {{ count }}</p>
        <article class="flex-fila gap">
            <Boton texto="Incrementar" @clickButton="incrementar" />
            <Boton texto="Decrementar" @clickButton="decrementar" />
            <Boton texto="Reiniciar" @clickButton="reiniciar" />
        </article>
        <p class="mini">ReactividadSencilla2.vue</p>
    </section>
</template>
  
<script setup>
    import { ref } from 'vue';

    import Boton from './Boton.vue'; // Importamos el componente Boton

    // Crear un dato reactivo
    const count = ref(0);

    // Función para incrementar el contador
    function incrementar() {
      count.value++;
    }

    // Función para decrementar el contador
    function decrementar() {
      count.value--;
    }

    // Función para reiniciar el contador
    function reiniciar() {
     count.value = 0;
    }
</script>

<style scoped>
    .rojo{
        font-size: 1rem;
        color: red;
    }
</style>
