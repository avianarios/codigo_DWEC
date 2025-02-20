<template>

    <!-- Directiva v-for -->
    <article class="borde flex-columna gap">
        <h1>Renderización múltiple (directiva v-for)</h1>
        <ul>
            <li v-for="(fruta, indice) in frutasEscasas" :key="indice">{{ fruta.nombre }}: quedan {{ fruta.cantidad }} unidades</li>
        </ul>
        <ul>
            <li v-for="(tarea, index) in tareas" :key="index">
                <h2>{{ tarea.nombre }}</h2>
                <p>{{ tarea.descripcion }}</p>
            </li>
        </ul>
        <p class="mini">DirectivasRenderizacionMultiple.vue</p>
    </article>
</template>

<script setup>
    const frutas = [
        { nombre: 'Manzana', cantidad: 5 },
        { nombre: 'Plátano', cantidad: 2 },
        { nombre: 'Naranja', cantidad: 1 },
        { nombre: 'Pera', cantidad: 4 },
        { nombre: 'Mango', cantidad: 2 }
    ];
    const frutasEscasas = frutas.filter(fruta => fruta.cantidad < 3);
    const tareas = [
        { nombre: 'Comprar comestibles', descripcion: 'Leche, Pan, Queso, Frutas' },
        { nombre: 'Llamar al electricista', descripcion: 'Reparar la luz del pasillo' },
        { nombre: 'Estudiar Vue.js', descripcion: 'Leer la documentación oficial y practicar' }
    ];
</script>

<style scoped>
    ul{
        padding: 0px;
    }
</style>