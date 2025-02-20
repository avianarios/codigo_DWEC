
<template>
    <article class="borde flex-columna gap">
        <h1>Reactividad con directivas v-if, v-show, v-bind y v-on</h1>

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

        <!-- Directiva v-bind (:is) con v-on  -->
        <article>
            <article class="flex-fila gap">
                <button @click="componenteActual = ComponenteA">Cargar componente A</button>
                <button @click="componenteActual = ComponenteB">Cargar componente B</button>
            </article>

            <keep-alive>
                <component :is="componenteActual"></component>
            </keep-alive>
        </article>
        <p class="mini">ReactividadDirectivas.vue</p>
    </article>
</template>

<script setup>
    import { ref } from 'vue';
    const mostrarMensaje = ref(true);
    const mostrarMensaje2 = ref(true);

    import ComponenteA from './ComponenteA.vue';
    import ComponenteB from './ComponenteB.vue';
  
    const componenteActual = ref(ComponenteA);
</script>