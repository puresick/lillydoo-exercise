<template>
	<button>
		{{ label }}
	</button>
</template>

<script>
	export default {
		name: "AppButton",
		props: {
			label: {
				default: "ButtonLabel",
				type: String
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "../stylesheets/config";

	button {
		color: $color--shade-2;
		background: $color--accent-0;
		border: none;
		font-size: $font__size--2;
		text-transform: uppercase;
		height: 3rem;
		width: 100%;
		max-width: 20rem;
		cursor: pointer;

		&:hover {
			background: $color--accent-1;
		}
	}
</style>
