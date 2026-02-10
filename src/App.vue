<template>
  <div class="app-shell">
    <router-view v-slot="{ Component }">
      <component :is="Component || HomeView" />
    </router-view>
  </div>
</template>

<script setup>
import HomeView from './views/HomeView.vue'
</script>

<style scoped>
.app-shell {
  max-width: 920px;
  margin: 0 auto;
  padding: 2rem 1rem;
  font-family: Arial, sans-serif;
  color: #1f2937;
}
</style>
