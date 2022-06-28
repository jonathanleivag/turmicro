<script setup lang="ts">
import { defineProps, onMounted, ref } from 'vue'
import Web3 from 'web3/dist/web3.min.js'

import { Turmicro } from '../../interfaces/ITurmicro'
import { useStore } from '../../store'
import { weiToEther } from '../../utils'
import CardUiComponent from '../ui/CardUiComponent.vue'

interface IProps {
  deployContract: Turmicro
  web3: Web3
  account: string
}

interface IPropsViajes {
  name: string
  price: number
  puntos: number
}

const props = defineProps<IProps>()
const viajes = ref<IPropsViajes[]>([])
const store = useStore()

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
      price: +viaje.valor,
      puntos: +viaje.puntos
    })
  }
}

const comprar = async (
  indexViaje: number,
  value: number,
  name: string,
  puntos: number
) => {
  await props.deployContract.pagarViaje(indexViaje, {
    from: props.account,
    value
  })

  store.dispatch('tusViajes/setOneViaje', {
    nombre: name,
    valor: value,
    puntos
  })
}
</script>

<template>
  <CardUiComponent title="Viajes disponibles">
    <ul class="card__list">
      <li v-for="(viaje, index) in viajes" :key="viaje.name">
        <span>Nombre: {{ viaje.name }}</span>
        <span>Precio: {{ weiToEther(web3, viaje.price) }} ETH</span>
        <span>Puntos: {{ viaje.puntos }}</span>
        <div class="card__mantenedor_boton">
          <button
            @click="comprar(index, viaje.price, viaje.name, viaje.puntos)"
            typer="button"
            class="card__comprar"
          >
            Comprar
          </button>
        </div>
      </li>
    </ul>
  </CardUiComponent>
</template>
