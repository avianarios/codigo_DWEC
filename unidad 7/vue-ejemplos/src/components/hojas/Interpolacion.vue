<template>
    <article class="borde flex-columna">
        <h1>Interpolación</h1>
        <p>La suma de {{ a }} + {{ b }} es igual a {{ a + b }}.</p>
        <p>{{ obtenerSaludo() }}</p>
        <p>Nombre: {{ persona.nombre }}</p>
        <p>Edad: {{ persona.edad }}</p>
        <p class="mini">Interpolacion.vue</p>
    </article>
</template>

<script setup>
    const a = 10;
    const b = 5;

    const persona = {
        nombre: "Ana",
        edad: 30
    };

    function obtenerSaludo() {
        return "¡Hola desde una función!";
    }
</script>