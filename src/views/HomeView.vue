<template>
  <main>
    <h1>Vue Fix Example</h1>
    <p>Ejemplo técnico de limpieza y orden en un proyecto Vue.</p>

    <ProductList @add-to-cart="addProduct" />

    <aside class="cart-summary">
      <h2>Carrito</h2>
      <p v-if="cart.length === 0">No hay productos agregados.</p>
      <ul v-else>
        <li v-for="item in cart" :key="`${item.id}-${item.count}`">
          {{ item.title }} x{{ item.count }}
        </li>
      </ul>
    </aside>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import ProductList from '../components/ProductList.vue'

const cart = ref([])

const addProduct = (product) => {
  const existing = cart.value.find((item) => item.id === product.id)

  if (existing) {
    existing.count += 1
    return
  }

  cart.value.push({
    id: product.id,
    title: product.title,
    count: 1
  })
}
</script>

<style scoped>
.cart-summary {
  margin-top: 2rem;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #fafafa;
}
</style>
