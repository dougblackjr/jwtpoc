import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		items: [],
		user: {}
	},
	getters: {
		items: state => state.items,
		user: state => state.user,
	},
	mutations: {
		setItems(state, items) {
			state.items = items
		},
		setUser(state, user) {
			state.user = user
		}
	},
	actions: {
		checkAuth() {
			return true
		}
	}
})

export default store