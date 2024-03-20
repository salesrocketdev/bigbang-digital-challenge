<template>
  <NavBar />

  <main
    class="container relative flex flex-col sm:max-w-none mt-12 md:max-w-2xl px-4 lg:px-6 mx-auto xl:px-0 mt-4"
  >
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </main>
</template>

<script setup lang="ts">
import NavBar from '@/components/organisms/NavBar.vue'
</script>

<style scoped>
@media (min-width: 1024px) {
  #app {
    background-color: red;
  }

  .container {
    max-width: 1120px;
    margin: 0 auto;
    margin-top: -270px;
  }
}
</style>
