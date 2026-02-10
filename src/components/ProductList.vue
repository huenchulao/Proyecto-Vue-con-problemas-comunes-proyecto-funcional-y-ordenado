<template>
  <section>
    <h2>Productos</h2>

    <p v-if="loading">Cargando productos...</p>
    <p v-else-if="error">{{ error }}</p>

    <div v-else class="product-list">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
        @add-to-cart="handleAddToCart"
      />
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import ProductCard from './ProductCard.vue'
import { getProducts } from '../services/api'

const emit = defineEmits(['add-to-cart'])

const products = ref([])
const loading = ref(true)
const error = ref('')

const loadProducts = async () => {
  loading.value = true
  error.value = ''

  try {
    products.value = await getProducts()
  } catch (err) {
    error.value = 'No se pudieron cargar los productos.'
  } finally {
    loading.value = false
  }
}

const handleAddToCart = (product) => {
  emit('add-to-cart', product)
}

onMounted(loadProducts)
</script>

<style scoped>
.product-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
}
</style>
