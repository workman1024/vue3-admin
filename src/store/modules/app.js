const state = {
	sidebarOpen: true,
	tagViews: []
}
const mutations = {
	setSidebarOpen(state , open) {
		state.sidebarOpen = open;
	},
	setTagView(state, views) {
		state.tagViews = views;
	}
};
const actions = {
	addTagView({ commit, state }, view) {
		if (state.tagViews.some(item => item.path == view.path)) return;
		let tags = state.tagViews.slice();
		tags.push(view)
		commit('setTagView', tags);
	},
	delTagView({ commit, state }, view) {
		if (state.tagViews.every(item => item.path != view.path)) return;
		let tags = state.tagViews;
		tags.map((item, index) => {
			if (item.path == view.path) {
				tags.splice(index, 1);
			}
		});
		commit('setTagView', tags);
	},
	delOthersTagView({ commit }, view) {
		let ntags = [view];
		commit('setTagView', ntags);
	},
	delAllTagView({ commit }) {
		commit('setTagView', []);
	}
};
export default {
	namespaced: true,
	state,
	mutations,
	actions
}