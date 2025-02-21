<template>
  <section class="borde flex-columna">
    <h1>Comunicación con reactividad y vinculación</h1>
    <h2>Padre</h2>
    <p class="rojo">{{ message }}</p>
    <!-- El padre le manda propiedades al hijo y escucha el evento @notify. Cuando este ocurra, llamará a la función handleNotificaion -->
    <ComVinculacionReactHijo
      :textoBoton="textoBoton" 
      :titulo="titulo" 
      :msj="msj"
      @notify="handleNotification"
    />
    <p class="mini">ComVinculacionReactPadre.vue</p>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import ComVinculacionReactHijo from './ComVinculacionReactHijo.vue';

// Definir variables reactivas para las propiedades
const textoBoton = "Púlsame";
const titulo = "Componente hijo";
const msj = ref("Al pulsar el botón le mandaré un mensaje reactivo al padre");

// Variable reactiva para almacenar el mensaje recibido del hijo
const message = ref('');

// Función para manejar el evento emitido por el hijo
function handleNotification(newMessage) {
  msj.value="El mensaje ha sido enviado";
  message.value = newMessage;  // Actualizar el mensaje con el valor recibido
}
</script>

<style scoped>
  .rojo{
      font-size: 1rem;
      color: red;
  }
</style>
