<script setup>
    import Observador from '@/components/hojas/ObservadorBasico.vue';
    import ObservadorMostachosVinculacion from '@/components/hojas/ObservadorMostachosVinculacion.vue';
    import ObservadorPregunta from '@/components/hojas/ObservadorPregunta.vue';
    import Obser from '@/components/hojas/Obser.vue';
</script>

<template>
    <section class="flex-columna gap">
        <Observador />
        <ObservadorMostachosVinculacion />
        <ObservadorPregunta />
        <Obser />
    </section>
</template>