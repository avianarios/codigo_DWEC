<template>
    <article class="tarjeta">
      <h2 class="tarjeta-titulo"><slot name="titulo">Título por defecto</slot></h2>
      <div class="tarjeta-contenido"><slot name="contenido">Contenido por defecto</slot></div>
      <slot name="imagen"></slot>
      <div article="tarjeta-pie"><slot></slot></div>
    </article>
  </template>

<style scoped>
/* Contenedor de la tarjeta */
.tarjeta {
  background-color: white;
  border: 1px solid #e5e7eb; /* border-gray-200 */
  border-radius: 0.75rem; /* rounded-lg */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* shadow-md */
  overflow: hidden;
  padding: 15px;
}

/* Estilo para la imagen */
.tarjeta img {
  height: 12rem; /* h-48 */
}

/* Contenedor del contenido de la tarjeta */
.tarjeta-contenido {
  padding: 1rem; /* p-4 */
}

/* Título de la tarjeta */
.tarjeta-titulo{
  font-size: 1.5rem; /* text-2xl */
  font-weight: 600; /* font-semibold */
}

/* Pie de la tarjeta */
.tarjeta-pie {
  padding: 1rem; /* p-4 */
  color: #6b7280; /* text-gray-500 */
  font-size: 0.75rem; /* text-sm */
}


</style>