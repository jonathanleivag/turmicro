<script setup lang="ts">
import { defineProps, onMounted } from 'vue'
import Web3 from 'web3/dist/web3.min.js'

import { useStore } from '../../store'
import CardUiComponent from '../ui/CardUiComponent.vue'

interface IProps {
  web3: Web3
  account: string
}

const store = useStore()

const props = defineProps<IProps>()

onMounted(() => {
  getBalance()
})

const getBalance = async () => {
  store.dispatch('balance/changeBalance', {
    web3: props.web3,
    account: props.account
  })
}
</script>

<template>
  <CardUiComponent title="Balance">
    <p><span class="negrita">Cuenta</span>: {{ account }}</p>
    <p>
      <span class="negrita">Balance</span>:
      {{ store.state.balance.balance }} ETH
    </p>
  </CardUiComponent>
</template>
