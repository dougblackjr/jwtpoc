<template>
	<div class="alert" role="alert" :class="loginClass">
		<p v-if="hasUser">
			You are logged in as {{ user }}, and can 
			<span v-for="p in permissions" :key="p">{{ p }}, </span>
		</p>
		<p v-else>
			You are not logged in
		</p>
	</div>
</template>

<script>
	export default {
		components: {},
		props: {},
		data() {
			return {

			}
		},
		methods: {
			
		},
		computed: {
			loginClass() {
				return this.$store.state.user.name ? 'alert-primary' : 'alert-danger'
			},
			hasUser() {
				return this.$store.state.user.name ? true : false
			},
			user() {
				return this.$store.state.user.name
			},
			permissions() {
				return this.$store.state.permissions
			}
		},
		created() {

		},
		beforeDestroy() {

		},
		mounted() {

		}
	};
</script>
<style lang="scss" scoped>
</style>