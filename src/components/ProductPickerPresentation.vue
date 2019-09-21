<template>
	<p>{{ productPickerActiveItemId }}</p>
</template>

<script>
	import { mapState } from "vuex"

	export default {
		name: "ProductPickerPresentation",
		computed: {
			...mapState([
				"productPickerActiveItemId"
			])
		}
	}
</script>

<style scoped>
</style>
