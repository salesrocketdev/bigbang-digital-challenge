<template>
  <button
    type="button"
    class="text-white rounded-lg px-4 py-3 text-center inline-flex items-center duration-300"
  >
    <span>
      <FontAwesomeIcon class="fa-xl" icon="bell" />
    </span>
    <span class="sr-only">Icon description</span>
  </button>
</template>

<script setup lang="ts"></script>

<style scoped>
button {
  background-color: transparent;
  color: #fff;
  font-weight: 600;
}

button:hover {
  color: #ff6969;
}
</style>
