<template>
	<div class="col-md-6">
		<login-state />
		<new-item />
		<item-manager />
	</div>
</template>

<script>

	import LoginState from './LoginState'
	import ItemManager from './ItemManager'
	import NewItem from './NewItem'

	export default {
		components: {
			LoginState,
			ItemManager,
			NewItem
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

		}
	};
</script>
<style lang="scss" scoped>
</style>