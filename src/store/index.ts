import { createStore } from 'vuex'
import loginModule from './login/login'
import { IRootState } from './types'
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

export default store
