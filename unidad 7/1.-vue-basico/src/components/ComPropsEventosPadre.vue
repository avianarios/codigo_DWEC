<template>
    <section class="borde flex-columna">
      <h1>Comunicación padre-hijo con props y eventos</h1>
      <h2>Padre</h2>
      <!-- El padre le manda propiedades al hijo y escucha el evento @notify -->
      <ComPropsEventosHijo textoBoton="Púlsame" titulo="Componente hijo" msj="Mira la consola al pulsar el botón" @notify="handleNotification" />
      <p class="mini">ComPropsEventosPadre.vue</p>
    </section>
  </template>
  
  <script setup>
  // Aquí no es necesaria la reactividad porque no hay componentes en el interfaz que necesiten actualizarse. La salida se hace por consola
  import ComPropsEventosHijo from './ComPropsEventosHijo.vue';
  
  // Función para manejar el evento emitido por el hijo
  function handleNotification(newMessage) {
    console.log('Mensaje recibido en el padre:', newMessage); // Mostrar el mensaje en la consola
  }
  </script>

<style scoped>
  /* .contenedor{
    border: 1px solid rgb(88, 142, 249);
    border-radius: 5px;
    background-color: rgb(237, 243, 255);
    padding: 10px;
  } */
</style>