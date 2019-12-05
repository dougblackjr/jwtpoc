import axios from 'axios'

const api = require('axios')

api.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

// CSRF
let token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
	api.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
	console.error('CSRF token not found');
}

export default api