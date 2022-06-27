<script setup lang="ts">
import { defineProps, onMounted, ref } from 'vue'
import Web3 from 'web3/dist/web3.min.js'

import { Turmicro } from '../../../build/contracts/ITurmicro'
import { weiToEther } from '../../utils'
import CardUiComponent from '../ui/CardUiComponent.vue'

interface IProps {
  deployContract: Turmicro
  web3: Web3
}

interface IPropsViajes {
  name: string
  price: number
  puntos: number
}

const props = defineProps<IProps>()
const viajes = ref<IPropsViajes[]>([])

onMounted(() => {
  getViaje()
})

const getTotalViajes = async (): Promise<number> =>
  +(await props.deployContract.getTotalViajes())

const getViaje = async () => {
  const totalViajes = await getTotalViajes()
  for (let i = 0; i < totalViajes; i++) {
    const viaje = await props.deployContract._viajes(i)
    viajes.value.push({
      name: viaje.nombre,
      price: weiToEther(props.web3, +viaje.valor),
      puntos: +viaje.puntos
    })
  }
}
</script>

<template>
  <CardUiComponent title="Viajes disponibles">
    <ul class="card__list">
      <li v-for="viaje in viajes" :key="viaje.name">
        <span>Nombre: {{ viaje.name }}</span>
        <span>Precio: {{ viaje.price }} ETH</span>
        <span>Puntos: {{ viaje.puntos }}</span>
      </li>
    </ul>
  </CardUiComponent>
</template>
