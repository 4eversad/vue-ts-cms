// 导出登录时需要的请求
import ftRequest from '../index'
import { IAccount } from './types'
import { IDataType, ILoginResult } from '@/store/login/types'
enum LoginAPI {
  AccountLogin = '/login',
  LoginUserInfo = '/users/',
  UserMenu = '/role/' //根据用户角色决定展示的菜单
}
export function accountLoginRequest(account: IAccount) {
  return ftRequest.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}
export function requestUserInfoById(id: number) {
  return ftRequest.get<IDataType>({
    url: LoginAPI.LoginUserInfo + id,
    showLoading: false
  })
}
export function requestUserMenusById(id: number) {
  return ftRequest.get<IDataType>({
    url: LoginAPI.UserMenu + id + '/menu',
    showLoading: false
  })
}
