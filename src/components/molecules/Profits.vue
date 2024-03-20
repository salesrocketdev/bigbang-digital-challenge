<template>
  <div class="flex flex-col md:w-full lg:w-3/6 p-5 bg-white shadow-md">
    <h5 class="mb-6 text-sm font-medium tracking-tight text-gray-900">Lucro</h5>
    <p class="mb-12 text-2xl font-medium text-gray-900">R$ 15,887</p>

    <div class="w-full flex items-center mt-auto">
      <SecondaryButton class="w-full mr-3" :label="'Ver mais detalhes'" />
      <SecondaryIconButton :icon="'bars'" />
    </div>
  </div>
</template>

<script setup lang="ts">
import SecondaryButton from '@/components/atoms/SecondaryButton.vue'
import SecondaryIconButton from '@/components/atoms/SecondaryIconButton.vue'
</script>
