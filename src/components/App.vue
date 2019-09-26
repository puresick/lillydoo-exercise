<template>
	<main>
		<HeroSection
			:content="$t('hero')"
		/>
		<ProductPicker
			:content="$t('productPicker')"
			:select-product="selectProduct"
			:active-item="productPicker.activeItem"
		/>
		<HowTo
			:content="$t('howTo')"
		/>
		<PackageContent
			:content="$t('packageContent')"
			:fragments="productPicker.activeItem.packageContent"
		/>
	</main>
</template>

<script>
import { mapState, mapActions } from "vuex"

import HeroSection from "./HeroSection"
import HowTo from "./HowTo"
import PackageContent from "./PackageContent"
import ProductPicker from "./ProductPicker"

export default {
	name: "App",
	components: {
		HeroSection,
		HowTo,
		PackageContent,
		ProductPicker
	},
	computed: {
		...mapState([
			"heroContent",
			"howToContent",
			"packageContent",
			"productPicker"
		])
	},
	methods: {
		...mapActions([
			"selectProduct"
		])
	}
}
</script>

<style lang="scss">
	@import "../stylesheets/config";

	html {
		box-sizing: border-box;
		font-family: $font__text;
	}

	*, *:before, *:after {
		box-sizing: inherit;
	}

	body {
		margin: 0;
	}

	main {
		display: flex;
		flex-direction: column;
	}
</style>
