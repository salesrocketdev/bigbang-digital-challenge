<template>
  <button
    type="button"
    class="text-white px-4 py-2 text-center inline-flex items-center duration-300"
  >
    <span>
      <FontAwesomeIcon class="fa-sm" :icon="props.icon" />
    </span>
    <span class="sr-only">Icon description</span>
  </button>
</template>

<script setup lang="ts">
const props = defineProps({
  icon: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>
button {
  background-color: #fff;
  color: #686868;
  border: 1px solid #686868;
  font-weight: 600;
}

button:hover {
  filter: brightness(0.9);
}
</style>
