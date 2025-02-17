<template>
    <article class="borde flex-columna">
        <h1>Eventos</h1>
        <p>Mira la consola</p>
        <article class="flex-fila gap" @click="alerta">
            <button @click="mostrarMensaje('¡Botón pulsado!')">Púlsame</button>
            <button @click.left="mostrarMensaje('¡Botón izquierdo pulsado!')">Púlsame izquierdo</button>
            <button @contextmenu.prevent @click.right="mostrarMensaje('¡Botón derecho pulsado!')">Púlsame derecho</button>
            <button @mouseover="mostrarMensaje('¡Botón pasado por encima!')">Pasa por encima</button>
        </article>
        <p class="mini">Componente Evento.vue</p>
    </article>
</template>
  
<script setup>
  function mostrarMensaje(msj) {
    console.log(msj);
  }
  function alerta(){
    console.log('te capturé en la fase de burbujeo');
  }
</script>
  