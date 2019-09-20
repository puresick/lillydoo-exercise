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
	section {
		min-height: 64vh;
		display: flex;
		padding: 0 4rem;

		& > * {
			flex-shrink: 1;
			flex-grow: 1;
		}
	}
</style>
