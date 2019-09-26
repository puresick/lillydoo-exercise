<template>
	<button
		:class="{ fluid }"
		@click="action"
	>
		{{ label }}
	</button>
</template>

<script>
	export default {
		name: "AppButton",
		props: {
			action: {
				default: () => {},
				type: Function
			},
			fluid: {
				default: false,
				type: Boolean
			},
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
		color: $color--snow;
		background: $color--lillydoo;
		border: none;
		font-size: $font__size--2;
		text-transform: uppercase;
		height: 3rem;
		width: 100%;
		max-width: 20rem;
		cursor: pointer;

		&.fluid {
			max-width: 100%;
		}

		&:hover {
			background: $color--oceanfoam;
			transition: $transition--button;
		}
	}
</style>
