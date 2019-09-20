<template>
	<AppSection>
		<div>
			<HeroHeadline>
				{{ headline }}
			</HeroHeadline>
			<AppButton
				label="Jetzt deine Größe wählen"
			/>
		</div>
		<div />
	</AppSection>
</template>

<script>
	import AppButton from "./AppButton"
	import AppSection from "./AppSection"
	import HeroHeadline from "./HeroHeadline"

	export default {
		name: "HeroSection",
		components: {
			AppButton,
			AppSection,
			HeroHeadline
		},
		props: {
			headline: {
				default: "hero headline",
				type: String
			}
		}
	}
</script>

<style lang="scss" scoped>
	section {
		background: url("../../assets/images/hero.jpg");
		background-size: cover;
		background-repeat: no-repeat;

		div {
			flex-basis: 50%;
			display: flex;
			flex-direction: column;
			flex-grow: 1;
			flex-shrink: 1;
			justify-content: center;
			align-items: center;
		}
	}
</style>
