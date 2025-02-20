<script setup>
    import DirectivasRenderizacionCondicional from '../components/especificos/DirectivasRenderizacionCondicional.vue';
    import DirectivasEventos from '../components/especificos/DirectivasEventos.vue';
    import DirectivasMostrarTexto from '@/components/especificos/DirectivasMostrarTexto.vue';
    import DirectivasVinculacion from '@/components/especificos/DirectivasVinculacion.vue';
    import DirectivasRenderizacionMultiple from '@/components/especificos/DirectivasRenderizacionMultiple.vue';
</script>

<template>
    <section class="flex-columna gap">
        <DirectivasRenderizacionCondicional />
        <DirectivasEventos />
        <DirectivasMostrarTexto />
        <DirectivasVinculacion />
        <DirectivasRenderizacionMultiple />
    </section>
</template>