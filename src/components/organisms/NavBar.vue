<template>
  <header class="md:px-6 md:pt-2 md:pb-8 lg:h-96">
    <nav
      class="bg-[#202027] fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600"
    >
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="@/assets/svg/logo.svg" alt="Logo" />
        </a>

        <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <NotificationButton />

          <SecondaryIconButton class="md:hidden" :icon="'bars'" @click="toggleNavbar()" />
        </div>

        <nav
          :class="{ hidden: !showMenu, flex: showMenu }"
          class="items-center justify-between w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul class="flex flex-col w-full p-4 md:p-0 mt-4 md:flex-row md:mt-0 md:border-0">
            <NavLink :label="'Dashboard'" :route="'/dashboard'" />
            <NavLink :label="'Pagamentos'" :route="'/payments'" />
            <NavLink :label="'Invoices'" :route="'/invoices'" />
            <NavLink :label="'Insights'" :route="'/insights'" />
          </ul>
        </nav>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import NavLink from '@/components/atoms/NavLink.vue'

import NotificationButton from '@/components/atoms/NotificationButton.vue'
import SecondaryIconButton from '@/components/atoms/SecondaryIconButton.vue'

const showMenu = ref(false)

const toggleNavbar = () => {
  showMenu.value = !showMenu.value
}
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: start;

  background-color: #202027;
}

img {
  width: 100px;
}

nav {
  text-align: center;
}

nav ul {
  display: flex;
  justify-content: center;
  list-style-type: none;
  padding: 0;
}

nav ul li,
nav ul li a {
  min-width: 120px;
}
</style>
