import { Module } from 'vuex'
import { ILoginState } from './types'
import { IRootState } from '../types'
import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenusById
} from '@/service/login/login'
import localCache from '@/utils/cache'
import router from '@/router/index'
import { mapMenusToRoutes } from '@/utils/map-menu'

// 泛型需要两个类型,一个是自己的state的类型, 一个是根state的类型
const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: []
    }
  },
  getters: {},
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    changeUserMenus(state, userMenus: any) {
      state.userMenus = userMenus
      // 注册路由
      const routes = mapMenusToRoutes(userMenus)
      routes.forEach((item) => {
        router.addRoute('main', item)
      })
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload: any) {
      // 登录逻辑
      const loginResult = await accountLoginRequest(payload)
      const { id, token } = loginResult.data
      commit('changeToken', token)
      localCache.setCache('token', token)

      // 请求用户信息
      const userInfoResult = await requestUserInfoById(id)
      const userInfo = userInfoResult.data
      commit('changeUserInfo', userInfo)
      localCache.setCache('userInfo', userInfo)

      // 根据用户id请求不同的首页菜单
      const UserMenusResult = await requestUserMenusById(userInfo.role.id)

      const userMenus = UserMenusResult.data
      localCache.setCache('userMenus', userMenus)

      commit('changeUserMenus', userMenus)

      // 跳至首页
      router.push('/main')
    },
    loadLocalLogin({ commit }) {
      const token = localCache.getCache('token')
      if (token) {
        commit('changeToken', token)
      }
      const userInfo = localCache.getCache('userInfo')
      if (userInfo) {
        commit('changeUserInfo', userInfo)
      }
      const userMenus = localCache.getCache('userMenus')
      if (userMenus) {
        commit('changeUserMenus', userMenus)
      }
    }
  }
}
export default loginModule
