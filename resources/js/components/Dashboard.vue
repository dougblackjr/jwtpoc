<template>
	<section>
		<div class="container">
			<div class="row">
				<login />
				<state-container />
			</div>
		</div>
	</section>
</template>

<script>

	import Login from './Login'
	import StateContainer from './StateContainer'

	export default {
		components: {
			Login,
			StateContainer
		},
		props: {},
		data() {
			return {

			}
		},
		methods: {
			
		},
		computed: {

		},
		created() {

		},
		beforeDestroy() {

		},
		mounted() {
			this.$store.dispatch('checkAuth')
		}
	};
</script>
<style lang="scss" scoped>
</style>