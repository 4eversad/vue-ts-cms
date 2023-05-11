// 创建FTRequest类实例，导出
// import { InternalAxiosRequestConfig } from 'axios'
import FTRequest from './request'

const ftRequest = new FTRequest({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 5000,
  // 这个请求实例可以传拦截器
  interceptors: {
    requestInterceptor: (config) => {
      console.log('实例单独响应')
      return config
    }
  }
})
export default ftRequest
