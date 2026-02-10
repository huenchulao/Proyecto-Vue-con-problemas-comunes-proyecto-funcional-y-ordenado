<template>
  <article class="product-card">
    <h3>{{ product.title }}</h3>
    <p class="product-card__description">{{ product.description }}</p>
    <strong class="product-card__price">{{ formatPrice(product.price) }}</strong>

    <button type="button" @click="$emit('add-to-cart', product)">
      Agregar al carrito
    </button>
  </article>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true
  }
})

const formatPrice = (value) => {
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR'
  }).format(value)
}
</script>

<style scoped>
.product-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  background: #fff;
}

.product-card__description {
  color: #666;
}

.product-card__price {
  display: block;
  margin: 0.75rem 0;
}
</style>
