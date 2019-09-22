<template>
	<article>
		<img
			:src="fragment.icon"
		/>
		<AppSubHeadline>
			{{ fragment.title }}
		</AppSubHeadline>
		<AppParagraph centered>
			{{ fragment.description }}
		</AppParagraph>
	</article>
</template>

<script>
	import AppParagraph from "./AppParagraph"
	import AppSubHeadline from "./AppSubHeadline"

	export default {
		name: "HowToFragment",
		components: {
			AppParagraph,
			AppSubHeadline
		},
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

	article {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
