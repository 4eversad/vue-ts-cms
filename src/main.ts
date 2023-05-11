import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './service/axios_demo'
import ftRequest from './service'

createApp(App).use(store).use(ElementPlus).use(router).mount('#app')
ftRequest.request({
  url: '/home/multidata',
  method: 'GET',
  // showLoading: true,
  // 这是这个请求的拦截器
  interceptors: {
    requestInterceptor: (config) => {
      console.log('请求的单独拦截器')
      return config
    }
  }
})
// 请求后返回的Promise的类型
interface IDataType {
  data: any
  returnCode: string
  success: boolean
}

ftRequest
  .get<IDataType>({
    url: '/home/multidata',
    showLoading: true,
    // 这是这个请求的拦截器
    interceptors: {
      requestInterceptor: (config) => {
        console.log('请求的单独拦截器')
        return config
      }
    }
  })
  .then((res) => {
    console.log(res)
  })
