<template>
  <section class="md:flex md:flex-wrap lg:flex lg:flex-column lg:justify-between mt-12 mb-6">
    <div class="w-full sm:mb-4 md:mb-4 lg:w-auto mb-0">
      <h5 class="text-xl font-medium tracking-tight text-gray-900 lg:text-white mb-2">
        Saldo total
      </h5>

      <div class="flex items-center">
        <h4 class="text-xl font-medium tracking-tight text-gray-900 lg:text-white text-4xl mr-4">
          R$ 304,78
        </h4>

        <LightningIcon class="mr-2" />
        <p class="text-sm font-normal text-gray-400 lg:text-white">rendendo 124%</p>
      </div>
    </div>

    <div class="w-full flex items-center lg:w-auto">
      <PrimaryButton class="mr-3 w-full lg:w-auto" :label="'Enviar dinheiro'" />
      <PrimaryIconButton :icon="'plus'" />
    </div>
  </section>

  <section class="flex items-center gap-x-4 mb-6">
    <BubbleIcon />

    <h5 class="text-xl tracking-tight text-gray-900 lg:text-white">Painel de estatísticas</h5>
    <p class="text-sm font-normal text-gray-400">últimos 7 dias</p>
  </section>

  <section class="gap-x-6 justify-between md:flex-row lg:flex">
    <JuridicalAccount />
    <Receipts />
    <Profits />
  </section>
</template>

<script setup lang="ts">
import BubbleIcon from '@/components/atoms/icons/BubbleIcon.vue'
import LightningIcon from '@/components/atoms/icons/LightningIcon.vue'

import PrimaryButton from '@/components/atoms/PrimaryButton.vue'
import PrimaryIconButton from '@/components/atoms/PrimaryIconButton.vue'

import JuridicalAccount from '@/components/molecules/JuridicalAccount.vue'
import Receipts from '@/components/molecules/Receipts.vue'
import Profits from '@/components/molecules/Profits.vue'
</script>
