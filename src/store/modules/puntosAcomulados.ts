import { Module } from 'vuex'
import Web3 from 'web3/dist/web3.min.js'

import { Turmicro } from '../../interfaces/ITurmicro'
import { weiToEther } from '../../utils'
import { RootState } from '..'

export interface IPuntosAcomulados {
  puntosAcomulados: number
  puntos: number
}

interface ISetPuntosAcomulados {
  deployContract: Turmicro
  account: string
  web3: Web3
}

export const PuntosAcomulados: Module<IPuntosAcomulados, RootState> = {
  namespaced: true,
  state: () => ({
    puntosAcomulados: 0,
    puntos: 0
  }),
  mutations: {
    setPuntosAcomulados (state, puntosAcomulados) {
      state.puntosAcomulados = puntosAcomulados
    },
    setPuntos (state, puntos) {
      state.puntos = puntos
    }
  },
  actions: {
    async setPuntosAcomulados ({ commit }, payload: ISetPuntosAcomulados) {
      const cliente = await payload.deployContract._clientes(payload.account)
      const clientePuntos = +cliente.puntos
      commit('setPuntos', clientePuntos)

      const etherPuntos = +(await payload.deployContract._etherPuntos())
      const puntosEnWei = etherPuntos * clientePuntos
      const puntosEnEther = weiToEther(payload.web3, puntosEnWei)
      commit('setPuntosAcomulados', puntosEnEther)
    }
  }
}
