import { Module } from 'vuex'
import Web3 from 'web3/dist/web3.min.js'

import { weiToEther } from '../../utils'
import { RootState } from '..'

export interface IStateBalance {
  balance: number
}

interface IChangeBalance {
  web3: Web3
  account: string
}

export const Balance: Module<IStateBalance, RootState> = {
  namespaced: true,
  state: () => ({
    balance: 0
  }),
  mutations: {
    changeBalance (state, payload: number) {
      state.balance = payload
    }
  },
  actions: {
    async changeBalance ({ commit }, payload: IChangeBalance) {
      const getBalanceResult = await payload.web3.eth.getBalance(
        payload.account
      )
      commit('changeBalance', weiToEther(payload.web3, +getBalanceResult))
    }
  }
}
