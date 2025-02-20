<template>
    <section class="borde flex-columna gap">
        <h1>Renderización condicional (directivas v-if, v-else)</h1>

        <!-- Directiva v-if y v-else -->
         <article class="borde">
            <h2>v-if y v-else</h2>
            <p v-if="condicion1">Si ves este mensaje es porque mostrarMensaje es true.</p>
            <p v-else>Si ves este mensaje es porque mostrarMensaje es false</p>
        </article>

         <p class="mini">DirectivasRenderizacionCondicional.vue</p>
    </section>
</template>

<script setup>
    const condicion1=true;
</script>
