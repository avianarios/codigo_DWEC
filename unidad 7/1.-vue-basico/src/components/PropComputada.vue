<!-- Ejemplo complejo de propiedad computada -->
<template>
    <article class="borde flex-columna">
      <h1>Propiedades computadas</h1>
      <ul>
        <li v-for="product in products" :key="product.id">
          {{ product.name }} - {{ product.price }}€
          <input type="checkbox" v-model="product.selected" />
        </li>
      </ul>
      <p class="destacado">Total: {{ totalPrice }}€</p>
      <p class="mini">PropComputada.vue</p>
    </article>
</template>
  
<script setup>
  import { ref, computed } from 'vue';
  
  const products = ref([
    { id: 1, name: 'Producto 1', price: 10, selected: false },
    { id: 2, name: 'Producto 2', price: 20, selected: false },
    { id: 3, name: 'Producto 3', price: 30, selected: false },
  ]);
  
  const totalPrice = computed(() => {
    return products.value
      .filter(product => product.selected)
      .reduce((total, product) => total + product.price, 0);
  });
</script>

<style scoped>
    ul{
        padding:0px;
    }
</style>