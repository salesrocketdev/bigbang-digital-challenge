<template>
  <div class="w-full">
    <RecentTransactionsItem
      v-for="(transaction, index) in recentTransactionsData"
      :key="index"
      :transaction="transaction"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

import type { IRecentTransactionItem } from '@/models/IRecentTransactionItem'

import RecentTransactionsItem from '@/components/atoms/RecentTransactionsItem.vue'

const recentTransactionsData = ref<IRecentTransactionItem[]>([])

onMounted(() => {
  const data: IRecentTransactionItem[] = [
    { name: 'Mercadinho da Cidade', amount: 10.98, type: 'Grocery' },
    { name: 'Tenda Nostra', amount: 26.38, type: 'Restaurant' },
    { name: 'Farmácia Um', amount: 43.17, type: 'Pharmacy' },
    { name: 'Academia Body', amount: 62.12, type: 'Gym' },
    { name: 'ShopOnline', amount: 135.24, type: 'OnlineStore' }
  ]

  recentTransactionsData.value.push(...data)
})
</script>
