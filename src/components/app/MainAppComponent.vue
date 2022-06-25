<script setup lang="ts">
import { onMounted, ref } from 'vue'

import { getWeb3, IWeb3 } from '../../utils'
import BalanceAppComponent from './BalanceAppComponent.vue'
import PuntosAcomuladosAppComponent from './PuntosAcomuladosAppComponent.vue'
import TusViejesAppComponent from './TusViejesAppComponent.vue'
import ViejesDisponiblesAppComponent from './ViejesDisponiblesAppComponent.vue'

const web3 = ref<IWeb3>()

onMounted(async () => {
  const verifiedWeb3 = await getWeb3()

  if (!verifiedWeb3.error) {
    web3.value = verifiedWeb3
  } else {
    console.error(verifiedWeb3.message)
  }
})
</script>

<template>
  <main class="main">
    <BalanceAppComponent />
    <PuntosAcomuladosAppComponent />
    <ViejesDisponiblesAppComponent />
    <TusViejesAppComponent />
  </main>
</template>
