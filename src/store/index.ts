import { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'

import { Balance, TusViajes } from './modules'
import { IStateBalance } from './modules/Balance'
import { IStateTusViajes } from './modules/TusViajes'

export interface RootState {
  balance: IStateBalance
  tusViajes: IStateTusViajes
}

export const key: InjectionKey<Store<RootState>> = Symbol('Store vuex')

export const store = createStore<RootState>({
  modules: {
    balance: Balance,
    tusViajes: TusViajes
  }
})

export const useStore = () => {
  return baseUseStore(key)
}
