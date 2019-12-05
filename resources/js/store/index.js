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

			if(user == {} || !user.access_token) {
				state.user = {}
				state.permissions = []
				return false
			}

			window.axios.defaults.headers.common = {'Authorization': `Bearer ${user.access_token}`}

			let expire = new Date

			let data = {
				token: user.access_token,
				expire: expire.setHours( expire.getHours() + 2 )
			}

			localStorage.setItem('token', JSON.stringify(data))

			state.user = user.custom

			if(user.custom && user.custom.permissions) {

				state.permissions = user.custom.permissions

			}
		},
		setPermissions(state, permissions) {
			state.permissions = permissions
		}
	},
	actions: {
		checkAuth(context) {
			// Check if localStorage
			let token = localStorage.getItem('token')

			if(!token) {
				context.commit('setUser', {})
				context.commit('setPermissions', [])
				return false
			}
			token = JSON.parse(token)

			// Check timing
			if(token.expire) {
				let expire = new Date

				if(token.expire < expire.getTime()) {
					context.commit('setUser', {})
					context.commit('setPermissions', [])
					return false
				}
			}
			context.dispatch('me', token)
		},
		login(context, data) {
			window.axios.post(`${BASE_URL}/login`, data)
			.then(res => {
				context.commit('setUser', res.data)
			})
		},
		me(context, token) {

			window.axios.defaults.headers.common = {'Authorization': `Bearer ${token.token}`}
			window.axios.post(`${BASE_URL}/me`)
			.then(res => {
				let data = {
					access_token: token.token,
					custom: res.data
				}

				context.commit('setUser', data)
			})
		},
		refresh(context) {
			window.axios.post(`${BASE_URL}/refresh`)
			.then(res => {
				context.commit('setUser', res.data)
			})
		},
		logout(context) {
			window.axios.post('/api/auth/logout')
			.then(res => {
				context.commit('setUser', {})
				context.commit('setPermissions', null)
				localStorage.removeItem('token')
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