<template>
  <button :class="`p-2 bg-${props.backgroundColor}`">
    <span :class="`text-sm text-${props.textColor}`">
      {{ props.label }}
    </span>
  </button>
</template>

<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    default: 'Texto'
  },
  textColor: {
    type: String,
    default: 'white'
  },
  backgroundColor: {
    type: String,
    default: 'white'
  }
})
</script>

<style scoped>
.text-white {
  color: #fff;
}

.text-gray {
  color: #8b8b8b;
}

.text-primary {
  color: #7986fe;
}
</style>
