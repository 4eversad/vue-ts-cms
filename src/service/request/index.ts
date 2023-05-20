// 封装请求 类
import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { FTRequestInterceptor, FTRequestConfig, FTConfig } from './type'
import { ElLoading } from 'element-plus'
const DEFAULT_LOADING = true
class FTRequest {
  instance: AxiosInstance
  interceptors?: FTRequestInterceptor
  showLoading: boolean
  loadingInstance: any
  constructor(config: FTRequestConfig) {
    // 单独实例拦截器
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    this.loadingInstance = null
    // 默认给一个true
    this.showLoading = DEFAULT_LOADING

    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )

    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    // 全局拦截器,所有实例拦截器, 可以过滤data
    this.instance.interceptors.request.use(
      (config) => {
        if (this.showLoading) {
          this.loadingInstance = ElLoading.service({
            lock: true,
            text: '正在加载',
            background: 'rgba(0, 0, 0, .1)'
          })
        }
        return config
      },
      (err) => {
        this.loadingInstance?.close()

        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        this.loadingInstance?.close()

        return res.data
      },
      (err) => {
        this.loadingInstance?.close()
        return err
      }
    )
  }
  // request类型上必须有interceptors属性,
  // 只能是 FTRequestConfig
  request<T>(config: FTRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      this.showLoading = config.showLoading ?? DEFAULT_LOADING
      // 请求的拦截
      // 如果单个请求有拦截, 那就先对config进行操作,
      // 再发请求
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config) as FTConfig
      }

      this.instance
        .request<any, T>(config as FTConfig)
        .then((res) => {
          // 如果请求中有响应拦截,那就执行
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          resolve(res)
        })
        .catch((err) => {
          reject(err)
          return err
        })
    })
  }

  get<T>(config: FTRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }
  post<T>(config: FTRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }
  delete<T>(config: FTRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }
  patch<T>(config: FTRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}
export default FTRequest
