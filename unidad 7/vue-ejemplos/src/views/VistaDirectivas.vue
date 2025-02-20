<script setup>
    import DirectivasRenderizacionCondicional from '../components/hojas/DirectivasRenderizacionCondicional.vue';
    import DirectivasEventos from '../components/hojas/DirectivasEventos.vue';
    import DirectivasMostrarTexto from '@/components/hojas/DirectivasMostrarTexto.vue';
    import DirectivasVinculacion from '@/components/hojas/DirectivasVinculacion.vue';
    import DirectivasRenderizacionMultiple from '@/components/hojas/DirectivasRenderizacionMultiple.vue';
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