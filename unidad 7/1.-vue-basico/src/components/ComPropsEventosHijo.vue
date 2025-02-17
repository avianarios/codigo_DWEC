<template>
  <section class="borde flex-columna">
    <article class="flex-columna">
      <h2>{{ titulo }}</h2>
      <p>{{ msj }}</p>
    </article>
    <Boton texto="Púlsame" @clickButton="notifyParent" />
    <p class="mini">ComPropsEventosHijo.vue</p>
    <!-- <button @click="notifyParent"> {{ textoBoton }}</button> -->
  </section>
</template>
  
  <script setup>
    import Boton from './Boton.vue'; // Importamos el componente Boton


  // Se definen las propiedades que este componente acepta del padre
  defineProps({
    msj: {
      type: String,
      required: true
    },
    titulo: {
      type: String,
      default: 'Título por defecto'
    },
    autor: String,
    textoBoton: {
      type: String,
      default: 'Mira la consola'
    }
  });

  // Se definen los eventos que el componente puede emitir. En este caso, el evento "notify"
  const emit = defineEmits(['notify']);
  
  // Función que emite el evento
  function notifyParent() {
    console.log("Botón pulsado en el hijo");
    emit('notify', 'El botón fue pulsado');
  }
  </script>

<style scoped>
  /* .contenedor{
    border: 1px solid rgb(88, 249, 115);
    border-radius: 5px;
    background-color: rgb(211, 255, 216);
    padding: 10px;
  } */
</style>