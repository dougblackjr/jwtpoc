import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		items: [],
		user: {},
		canCreate: false,
		canUpdate: false,
		canRead: false,
		canDelete: false,
	},
	getters: {
		items: state => state.items,
		user: state => state.user,
		canCreate: state => state.canCreate,
		canUpdate: state => state.canUpdate,
		canRead: state => state.canRead,
		canDelete: state => state.canDelete,
	},
	mutations: {
		setItems(state, items) {
			state.items = items
		},
		setUser(state, user) {
			state.user = user
			if(user.permissions) {
				state.commit('setCanCreate', user.permissions.includes('create'))
				state.commit('setCanUpdate', user.permissions.includes('update'))
				state.commit('setCanRead', user.permissions.includes('read'))
				state.commit('setCanDelete', user.permissions.includes('delete'))
			}
		},
		setCanCreate(state, canCreate) {
			state.canCreate = canCreate
		},
		setCanUpdate(state, canUpdate) {
			state.canUpdate = canUpdate
		},
		setCanRead(state, canRead) {
			state.canRead = canRead
		},
		setCanDelete(state, canDelete) {
			state.canDelete = canDelete
		}
	},
	actions: {
		checkAuth(context) {
			return true
		},
		login(context, data) {
			window.axios.post('/api/auth/login', data)
			.then(res => {
				console.log('gotLogin', res.data)
				context.commit(setUser, res.data)
			})
		},
		logout(context) {
			window.axios.post('/api/auth/logout')
			.then(res => {
				context.commit(setUser, res.data)
				context.commit('setCanCreate', false)
				context.commit('setCanUpdate', false)
				context.commit('setCanRead', false)
				context.commit('setCanDelete', false)
			})
		}
	}
})

export default store