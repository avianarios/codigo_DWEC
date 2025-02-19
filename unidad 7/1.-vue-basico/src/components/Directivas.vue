<template>
    <section class="borde flex-columna gap">
        <h1>Directivas v-bind, v-if, v-else, v-for, v-on, v-text y v-html</h1>

        <!-- Directiva v-bind -->
        <article class="borde">
            <h2>v-bind</h2>
            <!-- Recuerda que, cuando se vinculan atributos simples, existe una versión abreviada de v-bind llamada : que se puede usar en lugar de v-bind:. -->
            <a v-bind="atributosEnlace">Enlace dinámico</a>

            <!-- Enlace dinámico con v-bind abreviado -->
            <a :href="url" :title="tituloEnlace">Otro enlace dinámico</a>
        </article>

        <!-- Directiva v-if y v-else -->
         <article class="borde">
            <h2>v-if y v-else</h2>
            <p v-if="condicion1">Si ves este mensaje es porque mostrarMensaje es true.</p>
            <p v-else>Si ves este mensaje es porque mostrarMensaje es false</p>
        </article>

        <!-- Directiva v-for -->
         <article class="borde">
            <h2>v-for</h2>
            <ul>
                <li v-for="(fruta, indice) in frutasEscasas" :key="indice">{{ fruta.nombre }}: quedan {{ fruta.cantidad }} unidades</li>
            </ul>
            <ul>
                <li v-for="(tarea, index) in tareas" :key="index">
                    <h2>{{ tarea.nombre }}</h2>
                    <p>{{ tarea.descripcion }}</p>
                </li>
            </ul>
        </article>

        <!-- Directiva v-on. Recuerda que @ equivale a v-on:click  -->
         <article class="borde">
            <h2>v-on</h2>
            <button @click="console.log(++contador)">Incrementar contador (consola)</button>
        </article>

        <!-- Directivas v-text y v-html -->
         <article class="borde">
            <h2>v-text y v-html</h2>
            <p v-text="mensaje"></p>
            <p v-html="mensaje"></p>
         </article>

    </section>
</template>

<script setup>
    const atributosEnlace = {
      href: 'https://vuejs.org',
      target: '_blank',
      title: 'Ir a Vue.js'
    };
    const url='https://www.duckduckgo.com';
    const title='Ir a duckduckgo';


    let contador=0;
    const condicion1=true;
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
    const mensaje = '<p>¡Vue te va a encantar!<p>';
</script>

<style scoped>

</style>
