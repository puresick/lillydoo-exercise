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
	.centered {
		text-align: center;
	}
</style>
