<template>
	<p
		:class="{ centered }"
	>
		<slot />
	</p>
</template>

<script>
	export default {
		name: "AppParagraph",
		props: {
			centered: {
				default: false,
				type: Boolean
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "../stylesheets/config";

	p {
		margin: 0 0 $gap--paragraph;
	}
	.centered {
		text-align: center;
	}
</style>
