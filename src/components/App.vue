<template>
	<main>
		<HeroSection
			headline="Entdecke unsere Hautfreundlichkeit"
		/>
	</main>
</template>

<script>
	import AppHeadline from "./AppHeadline"
	import AppSubHeadline from "./AppSubHeadline"
	import HeroSection from "./HeroSection"

	export default {
		name: "App",
		components: {
			AppHeadline,
			AppSubHeadline,
			HeroSection
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
