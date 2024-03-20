<template>
  <div class="p-3 flex items-center justify-between border-t cursor-pointer hover:bg-gray-200">
    <div class="flex items-center">
      <div class="p-2 rounded" :class="getBgColor(props.transaction.type)">
        <FontAwesomeIcon class="fa-lg" :icon="'store'" />
      </div>

      <div class="ml-2 flex flex-col">
        <div class="leading-snug text-sm text-gray-900">{{ props.transaction.name }}</div>
      </div>
    </div>

    <div class="font-bold text-xs text-gray-600">
      {{ formatCurrency(props.transaction.amount) }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUtils } from '@/utils/useUtils'
import { useColorUtils } from '@/utils/useColorUtils'

import type { IRecentTransactionItem } from '@/models/IRecentTransactionItem'

const { formatCurrency } = useUtils()
const { getBgColor } = useColorUtils()

const props = defineProps({
  transaction: {
    type: Object as () => IRecentTransactionItem,
    required: true
  }
})
</script>
