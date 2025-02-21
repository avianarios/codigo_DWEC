<script setup>
    import ObservadorBasico from '@/components/hojas/ObservadorBasico.vue';
    import ObservadorBasico2 from '@/components/hojas/ObservadorBasico2.vue';
    import ObservadorPregunta from '@/components/hojas/ObservadorPregunta.vue';
</script>

<template>
    <section class="flex-columna gap">
        <ObservadorBasico />
        <ObservadorBasico2 />
        <ObservadorPregunta />
    </section>
</template>