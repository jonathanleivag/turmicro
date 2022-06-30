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
  getPuntosEnEther()
})

const getPuntosEnEther = async () => {
  store.dispatch('puntosAcomulados/setPuntosAcomulados', {
    deployContract: props.deployContract,
    account: props.account,
    web3: props.web3
  })
}

const canjearPuntos = async () => {
  await props.deployContract.transferirPuntosEnEther({ from: props.account })
  getPuntosEnEther()
}
</script>

<template>
  <CardUiComponent title="Puntos acomulados">
    <div>
      <p>
        <span class="negrita">Puntos</span>:
        {{ store.state.puntosAcomulados.puntos }}
      </p>
      <p>
        <span class="negrita">Valor Punto</span>:
        {{ store.state.puntosAcomulados.valorPunto }} ETH
      </p>
      <p>
        <span class="negrita">Acomulado</span>:
        {{ store.state.puntosAcomulados.puntosAcomulados }} ETH
      </p>
    </div>
    <div class="card__mantenedor_boton">
      <button
        @click="canjearPuntos"
        typer="button"
        class="card__comprar card__comprar--puntos"
      >
        Canjear Puntos
      </button>
    </div>
  </CardUiComponent>
</template>
