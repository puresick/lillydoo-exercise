<template>
	<article>
		{{ fragment.title }}
	</article>
</template>

<script>
	export default {
		name: "HowToFragment",
		props: {
			fragment: {
				default: {},
				type: Object
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "../stylesheets/config";
</style>
