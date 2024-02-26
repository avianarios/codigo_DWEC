<script setup>
import {ref, computed} from 'vue'
import padre from './components/padre.vue'
import listaTareas from './components/listaTareas.vue'
import watcher from './components/watcher.vue'

const routes = {
  '/padre': padre,
  '/listaTareas': listaTareas,
  '/watcher': watcher
}

//changes on location.hash, the part of the URL followed by #, are listened to determine 
const currentPath = ref(window.location.hash)
window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] 
})
</script>

<template>
  <section class="flex flex-col w-100">
    <img src="./assets/vue3.png" alt="logo vue">
    <section class="flex w-100 jc-center">
      <article class="flex gap-4 ai-center"></article>
      <a href="#/padre">Emit, Inject y v-model</a> |
      <a href="#/listaTareas">Lista de tareas (emit)</a> |
      <a href="#/watcher">Observador</a>
    </section>
    <article class="flex w-100 jc-center">
      <component :is="currentView" />
    </article>
  </section>
</template>
<!--
<template>
  <main>
    <listaTareas />
  </main>
</template>
-->


<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
