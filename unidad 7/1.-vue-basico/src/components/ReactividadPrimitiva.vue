<template>
    <section class="borde flex-columna">
        <h1>Reactividad con datos primitivos</h1>
        <p>Componente ReactividadPrimitiva.vue</p>
        <p class="rojo">Contador: {{ count }}</p>
        <article class="flex-fila gap">
            <Boton texto="Incrementar" @clickButton="increment" />
            <Boton texto="Decrementar" @clickButton="decrement" />
            <Boton texto="Reiniciar" @clickButton="reset" />
        </article>
    </section>
    
</template>
  
<script setup>
    import { ref } from 'vue';
    import Boton from './Boton.vue'; // Importamos el componente Boton

    // Crear un dato reactivo
    const count = ref(0);

    // Función para incrementar el contador
    function increment() {
      count.value++;
    }

    // Función para decrementar el contador
    function decrement() {
      count.value--;
    }

    // Función para reiniciar el contador
    function reset() {
     count.value = 0;
    }
</script>

<style scoped>
    .rojo{
        font-size: 1rem;
        color: red;
    }
</style>
