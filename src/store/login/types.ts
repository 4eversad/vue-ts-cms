export interface ILoginState {
  token: string
  userInfo: any
  userMenus: any
  permissions: string[]
}
export interface ILoginResult {
  id: number
  code: string
  token: string
}
export interface IUserData {
  id: string
}
