<script setup lang="ts">
import { defineProps, onMounted } from 'vue'
import Web3 from 'web3/dist/web3.min.js'

import { Turmicro } from '../../interfaces/ITurmicro'
import { useStore } from '../../store'
import CardUiComponent from '../ui/CardUiComponent.vue'

interface IProps {
  account: string
  deployContract: Turmicro
  web3: Web3
}

const props = defineProps<IProps>()
const store = useStore()

onMounted(() => {
  getViajes()
})

const getViajes = async () => {
  store.dispatch('tusViajes/setViajes', {
    deployContract: props.deployContract,
    account: props.account
  })
}
</script>

<template>
  <CardUiComponent title="Tus viejes">
    <ul class="card__list card__list--cliente">
      <li
        v-for="(viaje, index) in store.state.tusViajes.viajes"
        :key="viaje.nombre"
      >
        <span>{{ index + 1 }}) {{ viaje.nombre }}</span>
      </li>
    </ul>
  </CardUiComponent>
</template>
