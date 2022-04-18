import { constantRoutes, resetRouter } from '../../route/index'
import Layout from '@/components/layout/index.vue'
import ChidrenView from '@/components/chidren/index.vue'

const state = {
    constantRoutes: constantRoutes,
    addRoutes: [],
    allRouters: constantRoutes
}
const mutations = {
    doRoute(state, route) {
        if(!Array.isArray(route)){
            route = [route]
        }
        console.log('route',route);
        const addRoutes = filterAsyncRouter(route); // 处理后的路由 return array
        state.addRoutes = addRoutes;
        const allRouters = constantRoutes.concat(addRoutes)
        state.allRouters = allRouters;
    },
    // 重置路由并添加一个新的路由
    resetAddRoute(state,route) {
       const nr = resetRouter().getRoutes()
       state.addRoutes = [];
       state.allRouters = constantRoutes;
       if(route) {
            this.commit('permission/doRoute',route)
       }
    }
};

const actions = {};

// 遍历后台传来的路由字符串，转换为组件对象
function filterAsyncRouter(asyncRouterMap) {
    return asyncRouterMap.filter(route => {
        if (route.component) {
            if (route.component === 'Layout') {
                route.component = markRaw(Layout)
            } else if (route.component === 'ChidrenView') {
                route.component = ChidrenView
            } else {
                route.component = loadView(route.component)
            }
        }
        if (route.children != null && route.children && route.children.length) {
            route.children = filterAsyncRouter(route.children)
        }
        return true
    })
}
const modules = import.meta.glob('../../views/**/*.vue')

function loadView(path) {
    return modules[`../../views/${path}.vue`]
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}