<template>
	<main>
		<HeroSection
			headline="Entdecke unsere Hautfreundlichkeit"
		/>
		<ProductPicker />
	</main>
</template>

<script>
	import HeroSection from "./HeroSection"
	import ProductPicker from "./ProductPicker"

	export default {
		name: "App",
		components: {
			HeroSection,
			ProductPicker
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
