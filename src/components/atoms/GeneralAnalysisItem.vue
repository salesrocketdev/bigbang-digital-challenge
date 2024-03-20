<template>
  <div class="p-3 border-t cursor-pointer hover:bg-gray-200">
    <div class="flex items-center justify-between mb-2">
      <div class="flex items-center">
        <div class="p-1 text-center">
          <FontAwesomeIcon class="fa-lg" :icon="props.analysis.icon" />
        </div>

        <div class="ml-2 flex flex-col">
          <div class="leading-snug text-sm text-gray-900">{{ props.analysis.name }}</div>
        </div>
      </div>

      <div class="font-bold text-xs text-gray-600">
        {{ formatPercentage(props.analysis.percentage) }}
      </div>
    </div>

    <div class="w-full bg-gray-300 rounded-full h-2 overflow-hidden">
      <div
        :class="`${getProgressColor(props.analysis.type)} h-2 rounded-full`"
        :style="`width: ${props.analysis.percentage * 100}%`"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUtils } from '@/utils/useUtils'
import { useColorUtils } from '@/utils/useColorUtils'

import type { IGeneralAnalysisItem } from '@/models/IGeneralAnalysisItem'

const { formatPercentage } = useUtils()
const { getProgressColor } = useColorUtils()

const props = defineProps({
  analysis: {
    type: Object as () => IGeneralAnalysisItem,
    required: true
  }
})
</script>
