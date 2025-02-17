<script setup>
import Interpolacion from './components/Interpolacion.vue';
import ReactividadPrimitiva from './components/ReactividadPrimitiva.vue';
import ReactividadObjetos from './components/ReactividadObjetos.vue';
import ReactividadObjetos2 from './components/ReactividadObjetos2.vue';
import Vinculacion from './components/Vinculacion.vue';
import Eventos from './components/Eventos.vue';
import Directivas from './components/Directivas.vue';
import ComunicacionPadrePropsEventos from './components/ComPropsEventosPadre.vue';
import ComVinculacionReactPadre from './components/ComVinculacionReactPadre.vue';
import ComVmodelReactPadre from './components/ComVmodelReactPadre.vue';
import ComDefineModelReactPadre from './components/ComDefineModelReactPadre.vue';
import ComDefineModelReactPadre2 from './components/ComDefineModelReactPadre2.vue';
import ComDefineModelReactPadre3 from './components/ComDefineModelReactPadre3.vue';
import PropComputada from './components/PropComputada.vue';

import Padre from './components/ComDefineModelReactPadre3.vue';
</script>

<template>
  <section>
    <header>
      <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

      <div class="wrapper">
        <HelloWorld msg="You did it!" />
      </div>
    </header>

    <main>
      <section class="flex-columna gap">
        <Interpolacion />
        <Eventos />
        <Directivas />
        <Vinculacion />
        <ReactividadPrimitiva />
        <ReactividadObjetos />
        <ReactividadObjetos2 />
        <ComunicacionPadrePropsEventos />
        <ComVinculacionReactPadre />
        <ComVmodelReactPadre.vue />
        <ComDefineModelReactPadre />
        <ComDefineModelReactPadre2 />
        <ComDefineModelReactPadre3 />
        <PropComputada />
      </section>
    </main>
  </section>
</template>

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
