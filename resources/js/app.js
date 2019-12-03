/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

// Vue set up
import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import store from './store'
import router from './router'
import helpers from './helpers'

// Components
Vue.use(VueRouter)
Vue.use(Vuex)

import App from './components/Dashboard'

const app = new Vue({
	el: '#app',
	router,
	store,
	render: h => h(App)
});