<template>
	<div>
		<div class="row" v-for="i in items" :key="i.id">
			<div class="col-md-6">
				{{ i.name }}
			</div>
			<div class="col-md-3">
				
			</div>
			<div class="">
				
			</div>
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