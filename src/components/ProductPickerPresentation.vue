<template>
	<picture>
		<img
			:src="activeItem.image"
		>
	</picture>
</template>

<script>
export default {
	name: "ProductPickerPresentation",
	props: {
		activeItem: {
			default: () => ({}),
			type: Object
		}
	}
}
</script>

<style lang="scss" scoped>
	@import "../stylesheets/config";
	@import "../stylesheets/mixins";

	picture {
		display: flex;
		max-width: 100%;
		margin: $gap--flex__base;
		@include respond-from("medium") {
			max-width: 45%;
		}
	}

	img {
		object-position: center center;
		object-fit: contain;
		width: 100%;
	}
</style>
