export const env = {
	NODE_ENV:import.meta.env.MODE
};

export const config = {
	title: 'vue3-admin',
	version: 'v1.0.0',
	sidebarCanOpen:true, // sidebar可伸缩
	sidebarCanTitle:true, // sidbar标题可视
	sidebarTitle:'VUE',
	hasTagsView:true, // 历史路由
	hasRouteGroup:false, // 开启路由分组
}