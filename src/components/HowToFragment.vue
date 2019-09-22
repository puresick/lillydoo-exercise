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
		<AppLink
			v-if="fragment.link"
			:href="fragment.link.href"
			centered
		>
			{{ fragment.link.text }}
		</AppLink>
	</article>
</template>

<script>
	import AppLink from "./AppLink"
	import AppParagraph from "./AppParagraph"
	import AppSubHeadline from "./AppSubHeadline"

	export default {
		name: "HowToFragment",
		components: {
			AppLink,
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
