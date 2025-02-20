<template>
    <article class="borde flex-columna">
        <h1>Eventos (directiva v-on)</h1>
        <p>Todas las salidas por consola (no hay reactividad aún)</p>

        <!-- Directiva v-on. Recuerda que @ equivale a v-on:click  -->
        <article class="flex-fila gap" @click="alerta">

          <button @click="mostrarMensaje('¡Botón pulsado!')">Púlsame</button>

          <button @click.left="mostrarMensaje('¡Botón izquierdo pulsado!')">Púlsame izquierdo</button>

          <button @contextmenu.prevent @click.right="mostrarMensaje('¡Botón derecho pulsado!')">Púlsame derecho</button>

          <button @mouseover="mostrarMensaje('¡Botón pasado por encima!')">Pasa por encima</button>

          <button @click="console.log(++contador)">Incrementar contador</button>
        
        <input type="text" :value="nombre" @input="actualizaNombre" placeholder="Escribe"/>

        </article>
        <p class="mini">DirectivasEventos.vue</p>
    </article>
</template>
  
<script setup>
  let nombre = "";

function actualizaNombre(event) {
  console.log(event.target.value);
}



let contador=0;

  function mostrarMensaje(msj) {
    console.log(msj);
  }
  function alerta(){
    console.log('te capturé en la fase de burbujeo');
  }
</script>
  