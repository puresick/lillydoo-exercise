<template>
	<p>{{ activeItemId }}</p>
</template>

<script>
	export default {
		name: "ProductPickerPresentation",
		props: {
			activeItemId: {
				default: 0,
				type: Number
			}
		}
	}
</script>

<style scoped>
</style>
