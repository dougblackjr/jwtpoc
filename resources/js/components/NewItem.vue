<template>
	<div class="row">
		<div class="col-md-12">
			<form class="form-inline form-group">
				<input type="text" class="form-control" v-model="name" :disabled="!canCreateItem" placeholder="Item Name" />
				<input type="submit" class="btn btn-primary" v-on:click.prevent="create" :disabled="!canCreateItem" :value="canCreateItemText" />
			</form>
		</div>
	</div>
</template>

<script>
	export default {
		components: {},
		props: {},
		data() {
			return {
				name: ''
			}
		},
		methods: {
			create() {
				this.$store.dispatch('createItem', this.name)
			}
		},
		computed: {
			canCreateItem() {
				return this.$store.dispatch('can', 'create')
			},
			canCreateItemText() {
				return this.$store.dispatch('can', 'create') ? 'Go ahead' : 'You don\'t have permission'
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