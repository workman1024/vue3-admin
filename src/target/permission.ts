import router from '../route/index';
import { config } from './setting'
import { getToken } from '../utils/auth'
import NProgress from 'nprogress'
import store from '../store/index'
import { ElMessage } from 'element-plus'

// NProgress.configure({ showSpinner: false })
const whiteList = ['/login'] // 配置路由白名单 不需要token就能跳转
router.beforeEach(async(to, from, next) => {
    NProgress.start()
    document.title = config.title
    const hasToken = getToken('token')
    if (hasToken) {
      if (to.path === '/login') {
        next()
        NProgress.done()
      } else {
        const userRoles = store.getters.userinfo.id
        if (userRoles) {
          next()
        } else {
          try {
            await store.dispatch('user/getInfo')
            const addRoutes = store.state.permission.addRoutes; 
            // 不再支持addRoutes
            addRoutes.forEach(route => {
              router.addRoute(route) 
            });
            next({ ...to, replace: true })
          } catch (error) {
            store.commit('user/resetState');
            ElMessage({
              message:'Has Error',
              type: 'error',
            })
            next(`/login?redirect=${to.path}`)
            NProgress.done()
          }
        }
      }
    } else {
      if (whiteList.indexOf(to.path) !== -1) {
        next()
      } else {
        next(`/login?redirect=${to.path}`)
        NProgress.done()
      }
    }
  })