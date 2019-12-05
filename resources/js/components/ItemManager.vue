<template>
	<div>
		<div class="row" v-if="canRead" v-for="i in items" :key="i.id">
			<div class="col-md-6">
				{{ i.name }}
			</div>
			<div class="col-md-3">
				
			</div>
			<div class="">
				
			</div>
		</div>
		<div v-else>
			<p>
				<img src="https://media.giphy.com/media/l2JejnZKsFIoWeReo/giphy.gif" />
			</p>
		</div>
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
			update(id, data) {

			},
			delete(id) {

			}
		},
		computed: {
			items() {
				return this.$store.state.items
			},
			canRead() {
				return this.$store.dispatch('can', 'read')
			},
			canUpdate() {
				return this.$store.dispatch('can', 'update')
			},
			canDelete() {
				return this.$store.dispatch('can', 'create')
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