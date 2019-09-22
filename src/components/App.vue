<template>
	<main>
		<HeroSection
			headline="Entdecke unsere Hautfreundlichkeit"
		/>
		<ProductPicker />
		<HowTo
			:content="howToContent"
		/>
		<PackageContent
			:content="packageContent"
		/>
	</main>
</template>

<script>
	import { mapState } from "vuex"

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
				"howToContent",
				"packageContent"
			])
		}
	}
</script>

<style lang="scss">
	html {
		box-sizing: border-box;
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
