<template>
    <section class="borde flex-columna">
      <h1>Reactividad en formularios y vinculación con v-model</h1>
      <!-- Entrada de texto -->
      <input type="text" v-model="mensaje" placeholder="Escribe algo..." />
      <p>Has escrito: {{ mensaje }}</p>
      <!-- Área de texto -->
      <textarea v-model="descripcion" placeholder="Escribe una descripción..."></textarea>
      <p>Descripción: {{ descripcion }}</p>
  
      <!-- Casilla de verificación -->
      <label>
        <input type="checkbox" v-model="aceptado" />
        Acepto los términos y condiciones
      </label>
      <p v-if="aceptado">¡Gracias por aceptar!</p>
  
      <!-- Grupo de casillas de verificación -->
      <p>Selecciona tus intereses:</p>
      <label><input type="checkbox" v-model="intereses" value="Deporte" /> Deporte</label>
      <label><input type="checkbox" v-model="intereses" value="Música" /> Música</label>
      <label><input type="checkbox" v-model="intereses" value="Cine" /> Cine</label>
      <p>Intereses seleccionados: {{ intereses }}</p>
  
      <!-- Botones de radio -->
      <p>Selecciona tu color favorito:</p>
      <label><input type="radio" v-model="color" value="Rojo" /> Rojo</label>
      <label><input type="radio" v-model="color" value="Azul" /> Azul</label>
      <label><input type="radio" v-model="color" value="Verde" /> Verde</label>
      <p>Color seleccionado: {{ color }}</p>
  
      <!-- Selección en un <select> -->
      <label for="fruta">Elige una fruta:</label>
      <select id="fruta" v-model="fruta">
        <option value="">Selecciona...</option>
        <option value="Manzana">Manzana</option>
        <option value="Plátano">Plátano</option>
        <option value="Naranja">Naranja</option>
      </select>
      <p>Fruta seleccionada: {{ fruta }}</p>
  
      <!-- Selección múltiple en un <select> -->
      <label for="paises">Selecciona países:</label>
      <select id="paises" v-model="paisesSeleccionados" multiple>
        <option value="España">España</option>
        <option value="México">México</option>
        <option value="Argentina">Argentina</option>
        <option value="Colombia">Colombia</option>
      </select>
      <p>Países seleccionados: {{ paisesSeleccionados }}</p>
      <p class="mini">ReactividadVmodelFormularios.vue</p>
    </section>
  </template>
  
  <script setup>
    import { ref } from 'vue';
    
    const mensaje = ref('');
    const descripcion = ref('');
    const aceptado = ref(false);
    const intereses = ref([]);
    const color = ref('');
    const fruta = ref('');
    const paisesSeleccionados = ref([]);
  </script>
  