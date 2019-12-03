<template>
	<div class="alert" role="alert" :class="loginClass">
		<p v-if="user !== {}">
			You are not logged in
		</p>
		<p v-else>
			You are logged in as {{ user.name }}
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
				return this.$store.state.user == {} ? 'alert-warning' : 'alert-primary'
			},
			user() {
				return this.$store.state.user
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