<template>
	<section>
		<AppHeadline
			v-if="headline"
		>
			{{ headline }}
		</AppHeadline>
		<div>
			<slot />
		</div>
	</section>
</template>

<script>
	import AppHeadline from "./AppHeadline"

	export default {
		name: "AppSection",
		components: {
			AppHeadline
		},
		props: {
			headline: {
				default: undefined,
				type: String
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "../stylesheets/config";
	@import "../stylesheets/mixins";

	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: $gap--constraint__section;

		&:nth-child(even) {
			background-color: $color--snow;
		}

		&:nth-child(odd) {
			background-color: $color--stone;
		}
	}

	div {
		display: flex;
		flex-direction: column;
		width: 100%;
		max-width: $size--constraint;

		@include respond-from("medium") {
			flex-direction: row;
			width: auto;
		}

		& > * {
			flex-shrink: 1;
			flex-grow: 1;
			@include respond-from("medium") {
				margin: $gap--flex__large;
			}
		}
	}
</style>
