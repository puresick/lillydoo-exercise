<template>
	<section>
		<HeroHeadline>
			Hero
		</HeroHeadline>
		<AppHeadline>
			Headline
		</AppHeadline>
		<AppSubHeadline>
			SubHeadline
		</AppSubHeadline>
		<AppButton
			label="Label"
		/>
	</section>
</template>

<script>
	import AppButton from "./AppButton"
	import AppHeadline from "./AppHeadline"
	import AppSubHeadline from "./AppSubHeadline"
	import HeroHeadline from "./HeroHeadline"

	export default {
		name: "App",
		components: {
			AppButton,
			AppHeadline,
			AppSubHeadline,
			HeroHeadline
		}
	}
</script>
