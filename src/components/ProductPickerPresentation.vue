<template>
	<picture>
		<img
			:src="activeItem.image"
			/>
	</picture>
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
	picture {
		display: flex;
	}

	img {
		object-position: center center;
		object-fit: contain;
	}
</style>
