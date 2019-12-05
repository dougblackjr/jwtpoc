<template>
	<div class="col-md-6">
		<h2>Login</h2>
		<form class="form-group" v-if="!loggedIn">
			<p>Email</p>
			<input type="email" class="form-control" v-model="email" />
			<p>Password (the password is password)</p>
			<input type="password" class="form-control" v-model="password" />
			<input type="submit" class="btn btn-primary" v-on:click.prevent="login" value="Login" />
		</form>
		<input v-else type="submit" class="btn btn-warning" v-on:click.prevent="logout" value="Logout" />
	</div>
</template>

<script>
	export default {
		components: {},
		props: {},
		data() {
			return {
				email: '',
				password: ''
			}
		},
		computed: {
			loggedIn() {
				return this.$store.state.user.name ? true : false
			}
		},
		methods: {
			login() {
				this.$store.dispatch('login', {email: this.email, password: this.password})
			},
			logout() {
				this.$store.dispatch('logout')
			}
		}
	};
</script>
<style lang="scss" scoped>
</style>