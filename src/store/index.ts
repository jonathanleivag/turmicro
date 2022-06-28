import { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'

import { Balance } from './modules'
import { IStateBalance } from './modules/Balance'

export interface RootState {
  balance: IStateBalance
}

export const key: InjectionKey<Store<RootState>> = Symbol('Store vuex')

export const store = createStore<RootState>({
  modules: {
    balance: Balance
  }
})

export const useStore = () => {
  return baseUseStore(key)
}
