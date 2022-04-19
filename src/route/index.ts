import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '../components/layout/index.vue'
import ChidrenView from '../components/chidren/index.vue'
const routes = [
	{
		path: '/login',
		name: 'Login',
		hidden: true,
		meta: { noHistory: true },
		component: () => import('../views/login/index.vue')
	},
	{
		path: '/',
		name: 'Main',
		component: Layout,
		redirect: '/dashboard',
		meta: { title: '首页', singleShowChildren: true, icon: 'dashboard' },
		children: [{
			path: 'dashboard',
			name: 'Dashboard',
			meta: { title: '首页', icon: 'dashboard' },
			component: () => import('../views/dashboard/index.vue'),
		}]
	}, {
		path: '/center',
		component: Layout,
		name: 'Center',
		hidden: true,
		meta: { title: '基本资料' },
		children: [{
			path: 'person',
			name: 'CenterPerson',
			component: () => import('../views/center/index.vue'),
		}],
	},
]

export const constantRoutes = routes;

let router = createRouter({
	history: createWebHashHistory(),
	routes
})

export function resetRouter () {
	router = createRouter({
		history: createWebHashHistory(),
		routes
	})
	return router;
}

export default router
