<template>
	<h2>
		<slot />
	</h2>
</template>

<script>
	export default {
		name: "AppHeadline"
	}
</script>

<style lang="scss" scoped>
	@import "../stylesheets/config";

	h2 {
		font-family: $font;
		font-size: $font__size--4;
	}
</style>
