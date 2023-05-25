export interface ILoginState {
  token: string
  userInfo: any
  userMenus: any
}
export interface ILoginResult {
  id: number
  code: string
  token: string
}
export interface IUserData {
  id: string
}
export interface IDataType<T = any> {
  code: number
  data: T
}
