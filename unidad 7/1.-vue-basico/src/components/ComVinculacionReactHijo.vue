<template>
  <article class="borde flex-columna">
    <h2>{{ titulo }}</h2>
    <!-- <button @click="sendNotification">{{ textoBoton }}</button> -->
     <!-- Cuando el componente reciba el evento @clickButton (definido dentro del componente Boton), llamar a la función sendNotification -->
     <p>{{ msj }}</p>
     <Boton :texto="textoBoton" @clickButton="sendNotification" />
    <p class="mini">ComVinculacionReactHijo.vue</p>
  </article>
</template>

<script setup>
import Boton from "./Boton.vue";

// Definir las propiedades que el componente hijo recibirá
const props = defineProps({
  textoBoton: {
    type: String,
    required: true,
  },
  titulo: {
    type: String,
    required: true,
  },
  msj: String
});

// Definir el evento que el hijo puede emitir
const emit = defineEmits(['notify']);

// Función para emitir el evento "notify" con un nuevo mensaje. El padre estará pendiente del evento "notify" para cambiar la variable reactiva
function sendNotification() {
  const newMessage = 'Este es un mensaje del hijo';
  emit('notify', newMessage); // Emitir el evento con el mensaje
}
</script>

<style scoped>

</style>
