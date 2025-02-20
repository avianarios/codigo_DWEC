<script setup>
    import ReactividadDirectivas from '@/components/especificos/ReactividadDirectivas.vue';
    import ReactividadSencilla from '@/components/especificos/ReactividadSencilla.vue';
    import ReactividadObjetos from '@/components/padres/ReactividadObjetos.vue';
    import ReactividadObjetos2 from '@/components/especificos/ReactividadObjetos2.vue';
    import ReactividadVmodelFormularios from '@/components/especificos/ReactividadVmodelFormularios.vue';
</script>

<template>
    <section class="flex-columna gap">
        <ReactividadDirectivas />
        <ReactividadSencilla />
        <ReactividadObjetos />
        <ReactividadObjetos2 />
        <ReactividadVmodelFormularios />
    </section>
</template>