<template>
  <div class="sm:w-full md:w-full lg:w-5/12">
    <div class="flex flex-col sm:mt-6 md:flex-row items-start lg:items-center mb-6">
      <div class="flex items-center mb-2 md:mb-0 md:mr-4">
        <GeneralAnalysisIcon />
        <h5 class="text-xl tracking-tight text-gray-900 ml-2">Análise geral</h5>
      </div>

      <p class="text-sm text-gray-400 mr-auto">últimos 7 dias</p>
      <LabelButton :label="'Ver tudo'" :text-color="'primary'" class="w-full md:w-auto" />
    </div>

    <div class="flex justify-between border-t">
      <div class="py-2 px-6">
        <h5 class="text-sm font-medium tracking-tight text-gray-900 mb-2">Ganhos</h5>

        <h4 class="text-xl font-medium tracking-tight text-gray-900">R$ 2789,21</h4>
      </div>

      <div class="py-2 px-6">
        <h5 class="text-sm font-medium tracking-tight text-gray-900 mb-2">Saídas</h5>

        <h4 class="text-xl font-medium tracking-tight text-gray-900">R$ 1278,47</h4>
      </div>
    </div>

    <div class="w-full">
      <GeneralAnalysisList />
    </div>
  </div>
</template>

<script setup lang="ts">
import GeneralAnalysisIcon from '@/components/atoms/icons/GeneralAnalysisIcon.vue'

import LabelButton from '@/components/atoms/LabelButton.vue'

import GeneralAnalysisList from '@/components/molecules/GeneralAnalysisList.vue'
</script>
