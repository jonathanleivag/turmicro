<script setup lang="ts">
import { defineProps, onMounted, ref } from 'vue'
import Web3 from 'web3/dist/web3.min.js'

import { weiToEther } from '../../utils'
import CardUiComponent from '../ui/CardUiComponent.vue'

interface IProps {
  web3: Web3
  account: string
}

const props = defineProps<IProps>()

const balance = ref<number>(0)

onMounted(() => {
  getBalance()
})

const getBalance = async () => {
  const getBalanceResult = await props.web3.eth.getBalance(props.account)
  balance.value = weiToEther(props.web3, +getBalanceResult)
}
</script>

<template>
  <CardUiComponent title="Balance">
    <p><span class="negrita">Cuenta</span>: {{ account }}</p>
    <p><span class="negrita">Balance</span>: {{ balance }} ETH</p>
  </CardUiComponent>
</template>
