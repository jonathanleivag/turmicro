<script setup lang="ts">
import { defineProps, onMounted, ref } from 'vue'
import Web3 from 'web3/dist/web3.min.js'

import { _viajesResponse, Turmicro } from '../../interfaces/ITurmicro'
import CardUiComponent from '../ui/CardUiComponent.vue'

interface IProps {
  account: string
  deployContract: Turmicro
  web3: Web3
}

const props = defineProps<IProps>()

const viajes = ref<_viajesResponse[]>([])

onMounted(() => {
  getViajes()
})

const getViajes = async () => {
  const totalViajes = +(await props.deployContract._totalViajes(props.account))
  for (let i = 0; i < totalViajes; i++) {
    const viajeCliente = await props.deployContract._vieajesCliente(
      props.account,
      i
    )
    viajes.value.push({
      nombre: viajeCliente.nombre,
      valor: +viajeCliente.valor,
      puntos: +viajeCliente.puntos
    })
  }
}
</script>

<template>
  <CardUiComponent title="Tus viejes">
    <ul class="card__list card__list--cliente">
      <li v-for="(viaje, index) in viajes" :key="viaje.nombre">
        <span>{{ index + 1 }}) {{ viaje.nombre }}</span>
      </li>
    </ul>
  </CardUiComponent>
</template>
