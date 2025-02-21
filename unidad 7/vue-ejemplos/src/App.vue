<script setup>
// import Interpolacion from './views/Interpolacion.vue';
// import ReactividadSencilla2 from './components/basicos/ReactividadSencilla2.vue';
// import ReactividadVmodelFormularios from './components/basicos/ReactividadVmodelFormularios.vue';
// import ReactividadObjetos from './components/basicos/ReactividadObjetos.vue';
// import ReactividadObjetos2 from './components/basicos/ReactividadObjetos2.vue';
// import ReactividadDirectivas from './components/basicos/ReactividadDirectivas.vue';
// import Vinculacion from './components/basicos/Vinculacion.vue';
// import Eventos from './views/Eventos.vue';
// import Directivas from './components/basicos/Directivas.vue';
// import ComunicacionPadrePropsEventos from './components/basicos/ComPropsEventosPadre.vue';
// import ComVinculacionReactPadre from './components/basicos/ComVinculacionReactPadre.vue';
// import ComVmodelReactPadre from './components/basicos/ComVmodelReactPadre.vue';
// import ComDefineModelReactPadre from './components/basicos/ComDefineModelReactPadre.vue';
// import ComDefineModelReactPadre2 from './components/basicos/ComDefineModelReactPadre2.vue';
// import ComDefineModelReactPadre3 from './components/basicos/ComDefineModelReactPadre3.vue';
// import PropComputada from './components/basicos/PropComputada.vue';
// import Ranuras from './components/basicos/Ranuras.vue';
// import RenderizacionMultiple from './components/basicos/RenderizacionMultiple.vue';
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
    <nav>
      <RouterLink to="/Interpolacion">Interpolación</RouterLink>
      <RouterLink to="/Directivas">Directivas</RouterLink>
      <RouterLink to="/Reactividad">Reactividad</RouterLink>
      <RouterLink to="/InteraccionComponentes">Interacción entre componentes</RouterLink>
      <RouterLink to="/Ranuras">Ranuras</RouterLink>
      <RouterLink to="/PropiedadesComputadas">Propiedades Computadas</RouterLink>
      <RouterLink to="/Observadores">Observadores</RouterLink>
    </nav>
  </header>

  <main class="flex-columna gap">
    <router-view />
<!-- 
    <section class="flex-columna gap">
      <Interpolacion />
      <Eventos />
      <Directivas />
      <RenderizacionMultiple />
      <Vinculacion />
      <ReactividadDirectivas />
      <ReactividadSencilla2 />
      <ReactividadVmodelFormularios />
      <ReactividadObjetos />
      <ReactividadObjetos2 />
      <Ranuras />
      <ComunicacionPadrePropsEventos />
      <ComVinculacionReactPadre />
      <ComVmodelReactPadre.vue />
      <ComDefineModelReactPadre />
      <ComDefineModelReactPadre2 />
      <ComDefineModelReactPadre3 />
      <PropComputada />
    </section> -->
  </main>
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

nav{
  display: flex;
  gap: 1rem;
}

main{
  flex: 1;
}
</style>
