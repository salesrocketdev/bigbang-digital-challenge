<template>
  <div class="mb-4 sm:w-full md:w-full lg:w-5/12">
    <div class="flex flex-col sm:mt-6 md:flex-row items-start lg:items-center mb-6">
      <div class="flex items-center mb-2 md:mb-0 md:mr-4">
        <RecentTransactionsIcon />
        <h5 class="text-xl tracking-tight text-gray-900 ml-2">Transações recentes</h5>
      </div>

      <p class="text-sm text-gray-400 mr-auto">últimos 7 dias</p>
      <LabelButton :label="'Ver tudo'" :text-color="'primary'" class="w-full md:w-auto" />
    </div>

    <div class="w-full">
      <RecentTransactionsList />
    </div>
  </div>
</template>

<script setup lang="ts">
import RecentTransactionsIcon from '@/components/atoms/icons/RecentTransactionsIcon.vue'

import LabelButton from '@/components/atoms/LabelButton.vue'

import RecentTransactionsList from '@/components/molecules/RecentTransactionsList.vue'
</script>
