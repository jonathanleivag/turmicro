import { Module } from 'vuex'

import { _viajesResponse, Turmicro } from '../../interfaces/ITurmicro'
import { RootState } from '..'

export interface IStateTusViajes {
  viajes: _viajesResponse[]
}

interface ISetViajes {
  deployContract: Turmicro
  account: string
}

type ISetOneViajes = _viajesResponse

export const TusViajes: Module<IStateTusViajes, RootState> = {
  namespaced: true,
  state: () => ({
    viajes: []
  }),
  mutations: {
    setViajes (state, viajes: _viajesResponse[]) {
      state.viajes = viajes
    }
  },
  actions: {
    async setViajes ({ commit, state }, payload: ISetViajes) {
      const totalViajes = +(await payload.deployContract._totalViajes(
        payload.account
      ))

      for (let i = 0; i < totalViajes; i++) {
        const viajeCliente = await payload.deployContract._vieajesCliente(
          payload.account,
          i
        )
        commit('setViajes', [
          ...state.viajes,
          {
            nombre: viajeCliente.nombre,
            valor: +viajeCliente.valor,
            puntos: +viajeCliente.puntos
          }
        ])
      }
    },
    async setOneViaje ({ commit, state }, payload: ISetOneViajes) {
      commit('setViajes', [
        ...state.viajes,
        {
          nombre: payload.nombre,
          valor: +payload.valor,
          puntos: +payload.puntos
        }
      ])
    }
  }
}
