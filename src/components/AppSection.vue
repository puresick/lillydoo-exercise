<template>
	<section>
		<slot />
	</section>
</template>

<script>
	export default {
		name: "AppSection"
	}
</script>

<style lang="scss" scoped>
	@import "../stylesheets/config";

	section {
		min-height: 64vh;
		display: flex;
		padding: 0 4rem;

		& > * {
			flex-shrink: 1;
			flex-grow: 1;
		}

		&:nth-child(even) {
			background-color: $color--snow;
		}

		&:nth-child(odd) {
			background-color: $color--stone;
		}
	}
</style>
