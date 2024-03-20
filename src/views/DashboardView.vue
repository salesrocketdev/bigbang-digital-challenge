<template>
  <div class="lg:block lg:flex-column">
    <Summary />

    <section class="md:flex md:flex-wrap lg:flex lg:flex-column lg:justify-between mt-10">
      <RecentTransactions />
      <GeneralAnalysis />
    </section>
  </div>
</template>

<script setup lang="ts">
import Summary from '@/components/organisms/Summary.vue'

import RecentTransactions from '@/components/organisms/RecentTransactions.vue'
import GeneralAnalysis from '@/components/organisms/GeneralAnalysis.vue'
</script>
