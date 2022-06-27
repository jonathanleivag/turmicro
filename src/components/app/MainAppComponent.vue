<script setup lang="ts">
import { onMounted, ref } from 'vue'

import { Turmicro } from '../../interfaces/ITurmicro'
import { getWeb3, interfaceContract, IWeb3 } from '../../utils'
import BalanceAppComponent from './BalanceAppComponent.vue'
import PuntosAcomuladosAppComponent from './PuntosAcomuladosAppComponent.vue'
import TusViejesAppComponent from './TusViejesAppComponent.vue'
import ViejesDisponiblesAppComponent from './ViejesDisponiblesAppComponent.vue'

const web3 = ref<IWeb3>()
const deployContract = ref<Turmicro>()
const account = ref<string>()

onMounted(async () => {
  const verifiedWeb3 = await getWeb3()

  if (!verifiedWeb3.error) {
    web3.value = verifiedWeb3
    deployContract.value = await interfaceContract(verifiedWeb3.web3!)
    account.value = (
      await web3.value.web3!.eth.getAccounts()
    )[0].toLocaleLowerCase()
  } else {
    console.error(verifiedWeb3.message)
  }
})
</script>

<template>
  <main class="main">
    <BalanceAppComponent
      v-if="!web3?.error && account"
      :web3="web3?.web3!"
      :account="account!"
    />
    <PuntosAcomuladosAppComponent />
    <ViejesDisponiblesAppComponent
      v-if="deployContract && !web3?.error && account"
      :deployContract="deployContract"
      :web3="web3?.web3!"
      :account="account"
    />
    <TusViejesAppComponent
      v-if="deployContract && !web3?.error && account"
      :account="account"
      :deployContract="deployContract"
      :web3="web3?.web3!"
    />
  </main>
</template>
