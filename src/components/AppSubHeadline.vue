<template>
	<h3>
		<slot />
	</h3>
</template>

<script>
	export default {
		name: "AppSubHeadline"
	}
</script>

<style lang="scss" scoped>
	@import "../stylesheets/config";

	h3 {
		font-family: $font;
		font-size: $font__size--3;
		font-weight: normal;
		text-transform: uppercase;
	}
</style>
