import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import store from '../store'
import Dashboard from '../components/Dashboard'

const routes = [
	{
		name: 'Dashboard',
		path: '/home',
		component: Dashboard,
		beforeEnter: (to, from, next) => {
			if(store.dispatch('checkAuth')) {
				next()
			}
		}
	}
]

const router = new VueRouter({
	mode: "history",
	routes: routes
});

export default router;