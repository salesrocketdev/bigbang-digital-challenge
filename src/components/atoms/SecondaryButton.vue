<template>
  <button class="xs:min-w-auto gap-x-4 p-2 duration-300">
    <span>
      {{ props.label }}
    </span>
  </button>
</template>

<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    default: 'Texto'
  }
})
</script>

<style scoped>
button {
  background-color: #fff;
  color: #686868;
  border: 1px solid #686868;
  font-weight: 600;

  min-width: 254px;
}

button:hover {
  filter: brightness(0.9);
}
</style>
