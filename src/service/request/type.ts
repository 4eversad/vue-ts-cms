import type {
  CreateAxiosDefaults,
  InternalAxiosRequestConfig,
  AxiosResponse,
  AxiosRequestConfig
} from 'axios'

export interface FTRequestInterceptor {
  // 请求拦截
  requestInterceptor?: (
    config: InternalAxiosRequestConfig | FTRequestConfig
    // 这个地方类型实在匹配不上,只好用any
  ) => InternalAxiosRequestConfig | any

  // 请求拦截错误
  requestInterceptorCatch?: (error: any) => any
  // 响应拦截
  responseInterceptor?: (config: AxiosResponse | any) => AxiosResponse | any
  // 响应错误拦截
  responseInterceptorCatch?: (error: any) => any
}

export interface FTRequestConfig extends CreateAxiosDefaults {
  interceptors?: FTRequestInterceptor
  showLoading?: boolean
}

export interface FTConfig extends AxiosRequestConfig {
  interceptors?: FTRequestInterceptor
}
