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
		min-height: 80vh;
		@include respond-from("large") { min-height: 45vh; }
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 0 4rem;

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

		@include respond-from("large") {
			flex-direction: row;
		}

		& > * {
			flex-shrink: 1;
			flex-grow: 1;
		}
	}
</style>
