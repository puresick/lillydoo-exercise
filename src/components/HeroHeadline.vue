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
		font-family: $font;
		font-size: $font__size--5;
		text-align: center;
	}
</style>
