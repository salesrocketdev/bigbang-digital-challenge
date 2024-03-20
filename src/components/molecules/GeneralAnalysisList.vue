<template>
  <div class="w-full">
    <GeneralAnalysisItem
      v-for="(analysis, index) in generalanalysisData"
      :key="index"
      :analysis="analysis"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

import type { IGeneralAnalysisItem } from '@/models/IGeneralAnalysisItem'

import GeneralAnalysisItem from '@/components/atoms/GeneralAnalysisItem.vue'

const generalanalysisData = ref<IGeneralAnalysisItem[]>([])

onMounted(() => {
  const data: IGeneralAnalysisItem[] = [
    { icon: 'basket-shopping', name: 'Compras', percentage: 0.62, type: 'Shopping' },
    { icon: 'file-invoice', name: 'Boletos', percentage: 0.14, type: 'Invoices' },
    { icon: 'chart-line', name: 'Investimentos', percentage: 0.05, type: 'Investments' }
  ]

  generalanalysisData.value.push(...data)
})
</script>
