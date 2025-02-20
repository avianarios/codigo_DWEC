<template>
    <section class="borde flex-columna gap">
        <h1>Mostrar texto (v-text y v-html)</h1>

        <!-- Directiva v-if y v-else -->
         <article class="borde">
            <h2>v-if y v-else</h2>
            <p v-if="condicion1">Si ves este mensaje es porque mostrarMensaje es true.</p>
            <p v-else>Si ves este mensaje es porque mostrarMensaje es false</p>
        </article>

        <!-- Directivas v-text y v-html -->
         <article class="borde">
            <h2>v-text y v-html</h2>
            <p v-text="mensaje"></p>
            <p v-html="mensaje"></p>
         </article>
         <p class="mini">DirectivasMostrarTexto.vue</p>
    </section>
</template>

<script setup>
    const condicion1=true;
    const mensaje = '<p>¡Vue te va a encantar!<p>';
</script>
