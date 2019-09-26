<template>
	<article>
		<img
			:src="fragment.icon"
		>
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
			default: () => ({}),
			type: Object
		}
	}
}
</script>

<style lang="scss" scoped>
	@import "../stylesheets/config";
	@import "../stylesheets/mixins";

	article {
		display: flex;
		flex-direction: column;
		align-items: center;
		flex-basis: 100%;
		margin: $gap--flex__base;

		@include respond-from("medium") {
			margin: $gap--flex__medium;
		}
	}

	img {
		margin: $gap--icon;
		width: $size--icon;
	}
</style>
