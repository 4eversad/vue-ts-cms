import { createStore, Store, useStore as useVuexStore } from 'vuex'
import loginModule from './login/login'
import { IRootState } from './types'
import { IStoreType } from './types'
const store = createStore<IRootState>({
  state: () => {
    return {}
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    loginModule
  }
})

export function setupStore() {
  store.dispatch('loginModule/loadLocalLogin')
}
export function useStore(): Store<IStoreType> {
  return useVuexStore()
}

export default store
