<template>
	<img
		:src="activeItem.image"
	/>
</template>

<script>
	export default {
		name: "ProductPickerPresentation",
		props: {
			activeItem: {
				default: {},
				type: Object
			}
		}
	}
</script>

<style scoped>
</style>
