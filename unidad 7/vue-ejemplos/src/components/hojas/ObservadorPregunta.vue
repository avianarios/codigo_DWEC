<template>
    <article class="borde flex-columna">
        <h1>Observadores (watchers)</h1>
        <label for="pregunta">Pregunta </label>
        <input v-model="pregunta" :disabled="cargando" />
        <!-- <p class="centrado destacado">{{ respuesta }}</p> -->
        <p>{{ respuesta }}</p>
        <img v-if="imagen" :src="imagen" alt="Respuesta visual" />
    </article>
</template>

<script setup>
    import { ref, watch } from 'vue'

    const pregunta = ref('')
    const respuesta = ref('Las preguntas deben acabar con el signo de interrogación')
    const imagen = ref(null)
    const cargando = ref(false)

    watch(pregunta, async (nuevaPregunta) => {
        if (nuevaPregunta.includes('?')) {
            cargando.value = true
            respuesta.value = 'Pensando...'
            imagen.value = null
            try {
                const res = await fetch('https://yesno.wtf/api')
                const data = await res.json()
                respuesta.value = data.answer
                imagen.value = data.image
            } catch (error) {
                respuesta.value = '¡Error! No se pudo acceder a la API.'
                imagen.value = null
            } finally {
                cargando.value = false
            }
        }
    })   
</script>

<style scoped>
    .centrado {
        text-align: center;
    }

    .destacado{
        font-weight: bold;
        font-color: red;
        font-size: 1.5rem;
    }
</style>