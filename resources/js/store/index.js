import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import helpers from '../helpers'

Vue.use(Vuex)

const BASE_URL = process.env.MIX_JWT_BASE_AUTH_URL;

const store = new Vuex.Store({
	state: {
		items: [],
		user: {},
		can: []
	},
	getters: {
		items: state => state.items,
		user: state => state.user,
		permissions: state => state.permissions
	},
	mutations: {
		setItems(state, items) {
			state.items = items
		},
		setUser(state, user) {
			state.user = user
			if(user.permissions) {
				state.commit('setPermissions', user.permissions)
			}
		},
		setPermissions(state, permissions) {
			state.permissions = permissions
		}
	},
	actions: {
		checkAuth(context) {
			return true
		},
		login(context, data) {
			window.axios.post(`${BASE_URL}/login`, data)
			.then(res => {
				console.log('gotLogin', res.data)
				console.log('parsed', helpers.parseJwt(res.data.accessToken))
				context.commit('setUser', res.data)
			})
		},
		logout(context) {
			window.axios.post('/api/auth/logout')
			.then(res => {
				context.commit('setUser', res.data)
				context.commit('setPermissions', [])
			})
		},
		can(context, data) {
			if(Array.isArray(data)) {

				let response = false

				let confirmed = data.filter(d => context.permissions.includes(d))

				return confirmed.length > 0

			} else {

				return context.permissions.includes(data)

			}
		}
	}
})

export default store