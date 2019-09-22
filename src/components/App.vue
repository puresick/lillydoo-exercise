<template>
	<main>
		<HeroSection
			headline="Entdecke unsere Hautfreundlichkeit"
		/>
		<ProductPicker />
		<HowTo
			:content="howToContent"
		/>
	</main>
</template>

<script>
	import { mapState } from "vuex"

	import HeroSection from "./HeroSection"
	import HowTo from "./HowTo"
	import ProductPicker from "./ProductPicker"

	export default {
		name: "App",
		components: {
			HeroSection,
			HowTo,
			ProductPicker
		},
		computed: {
			...mapState([
				"howToContent"
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
