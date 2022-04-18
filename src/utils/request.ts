import axios from 'axios'
import { ElMessageBox, ElMessage } from 'element-plus'
import store from '../store'
import { getToken } from './auth'
import { getBaseUrl } from './env'

const baseURL = getBaseUrl().url;

const service = axios.create({
  baseURL,
  timeout: 5000,
  method:'post'
})

service.interceptors.request.use(
  config => {
    if (store.getters.token) {
      config.headers['X-Token'] = getToken()
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code !== 200) {
      ElMessage({
        message: res.message || 'Error',
        type: 'error',
        duration: 5 * 1000
      })
      return Promise.reject(res.message || 'Error')
    } else {
      return res.data
    }
  },
  error => {
    console.log('err' + error)
    ElMessage({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)



export default service
