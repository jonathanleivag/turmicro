<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Web3 from 'web3'

import { getWeb3 } from '../../utils'
import BalanceAppComponent from './BalanceAppComponent.vue'
import PuntosAcomuladosAppComponent from './PuntosAcomuladosAppComponent.vue'
import TusViejesAppComponent from './TusViejesAppComponent.vue'
import ViejesDisponiblesAppComponent from './ViejesDisponiblesAppComponent.vue'

const web3 = ref<Web3 | boolean>()

onMounted(async () => {
  const verifiedWeb3 = await getWeb3()
  try {
    web3.value = verifiedWeb3
    console.log(await web3.value.eth.getAccounts())
  } catch (error) {
    web3.value = false
    if (error instanceof Error) {
      console.error(error.message)
    }
  }
})
</script>

<template>
  <BalanceAppComponent />
  <PuntosAcomuladosAppComponent />
  <ViejesDisponiblesAppComponent />
  <TusViejesAppComponent />
</template>
