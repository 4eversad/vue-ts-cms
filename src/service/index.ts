// 创建FTRequest类实例，导出
import FTRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'
import localCache from '@/utils/cache'

const ftRequest = new FTRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  // 这个请求实例可以传拦截器
  interceptors: {
    requestInterceptor: (config) => {
      const token = localCache.getCache('token')
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    }
  }
})

export default ftRequest
