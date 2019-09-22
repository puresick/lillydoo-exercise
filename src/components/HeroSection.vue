<template>
	<AppSection>
		<div>
			<HeroHeadline>
				{{ content.headline }}
			</HeroHeadline>
			<AppButton
				:label="content.cta"
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
			content: {
				default: {},
				type: Object
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "../stylesheets/mixins";

	section {
		background: url("../../assets/images/header-trialbox-mobile.jpg");
		background-size: center;
		background-repeat: no-repeat;

		@include respond-from("medium") {
			background: url("../../assets/images/header-trialbox-tablet.jpg");
			background-size: center;
			background-repeat: no-repeat;
		};

		@include respond-from("large") {
			background: url("../../assets/images/header-trialbox-desktop.jpg");
			background-size: center;
			background-repeat: no-repeat;
		};

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
