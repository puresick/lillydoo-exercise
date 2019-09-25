<template>
	<h1>
		<slot />
	</h1>
</template>

<script>
	export default {
		name: "HeroHeadline"
	}
</script>

<style lang="scss" scoped>
	@import "../stylesheets/config";

	h1 {
		font-family: $font__headline;
		font-size: $font__size--hero-headline__base;
		text-align: center;
		width: 100%;
		overflow-wrap: break-word;
		margin: 0 0 $gap--headline__hero 0;
	}
</style>
