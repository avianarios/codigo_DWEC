
<template>
    <article class="borde flex-columna">
        <h1>Directivas v-if y v-show con reactividad</h1>

        <!-- Directiva v-if -->
        <p v-if="mostrarMensaje2">Este mensaje se puede renderizar, o no, en el DOM.</p>
        <button @click="mostrarMensaje2 = !mostrarMensaje2">
            {{ mostrarMensaje2 ? 'Insertar' : 'Eliminar' }} mensaje {{ mostrarMensaje2 ? 'en el' : 'del' }} DOM (v-if)
        </button>

        <!-- Directiva v-show -->
        <p v-show="mostrarMensaje">Este mensaje se puede ocultar o mostrar, pero siempre se renderiza</p>
        <button @click="mostrarMensaje = !mostrarMensaje">
            {{ mostrarMensaje ? 'Ocultar' : 'Mostrar' }} mensaje (v-show)
        </button>

        <p class="mini">ReactividadDirectivas.vue</p>
    </article>
</template>

<script setup>
    import { ref } from 'vue';
    const mostrarMensaje = ref(true);
    const mostrarMensaje2 = ref(true);
</script>