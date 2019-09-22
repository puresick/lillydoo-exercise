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

	section {
		min-height: 64vh;
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
		flex-direction: row;

		& > * {
			flex-shrink: 1;
			flex-grow: 1;
		}
	}
</style>
