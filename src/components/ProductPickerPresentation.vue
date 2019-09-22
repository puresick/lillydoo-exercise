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

<style lang="scss" scoped>
	img {
		width: 100%;
	}
</style>
