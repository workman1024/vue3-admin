import { getToken, setToken, removeToken } from '../../utils/auth'
import api from '../../utils/request'
import { getUserInfo } from '../../apis/data/test'

const getDefaultState = () => {
    return {
        userinfo: {},
        routes:[], // 请求下来的路由权限
        token: ''
    }
}

const state = getDefaultState();
const mutations = {
    setUserinfo(state, userinfo) {
        state.userinfo = userinfo;
    },
    setRoutes(state, routes) {
        state.routes = routes;
    },
    setToken(state, token) {
        state.token = token;
    },
    resetState(state) {
        Object.assign(state, getDefaultState())
    }
}
const actions = {
    login({ commit, state }, userInfo) {
        const { username, password } = userInfo
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                let token = 'token';
                commit('setToken', token)
                setToken(token)
                resolve()
            }, 500);
        })
    },
    getInfo({ commit, state }) {
        return new Promise((resolve,reject) => {
            // api({
            //     url:'/pay/getUserInfo',
            //     method:'GET'
            // }).then(data=>{
            //     commit('permission/doRoute',data.route, {root: true});
            //     commit('setUserinfo', data.info)
            //     commit('setRoutes',data.route)
            //     resolve(data.info)
            // }).catch(e=>{
            //     console.log('err',e);
            // })
            const data = getUserInfo.data;
            commit('permission/doRoute',data.route, {root: true});
            commit('setUserinfo', data.info)
            commit('setRoutes',data.route)
            resolve(data.info)
        })
    },
    outLogin({ commit, state }) {
        return new Promise(resolve => {
            commit('resetState');
            resolve();
        })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}