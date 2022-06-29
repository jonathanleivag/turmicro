import { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'

import { Balance, PuntosAcomulados, TusViajes } from './modules'
import { IStateBalance } from './modules/Balance'
import { IPuntosAcomulados } from './modules/puntosAcomulados'
import { IStateTusViajes } from './modules/TusViajes'

export interface RootState {
  balance: IStateBalance
  tusViajes: IStateTusViajes
  puntosAcomulados: IPuntosAcomulados
}

export const key: InjectionKey<Store<RootState>> = Symbol('Store vuex')

export const store = createStore<RootState>({
  modules: {
    balance: Balance,
    tusViajes: TusViajes,
    puntosAcomulados: PuntosAcomulados
  }
})

export const useStore = () => {
  return baseUseStore(key)
}
