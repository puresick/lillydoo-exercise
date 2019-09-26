<template>
	<AppSection>
		<div id="overlay">
			<HeroHeadline>
				{{ content.headline }}
			</HeroHeadline>
			<AppButton
				:label="content.cta"
				:action="cta"
			/>
		</div>
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
			default: () => ({}),
			type: Object
		}
	},
	methods: {
		cta() {
			document.querySelector("#picker").scrollIntoView({
				behavior: "smooth"
			})
		}
	}
}
</script>

<style lang="scss" scoped>
	@import "../stylesheets/config";
	@import "../stylesheets/mixins";

	section {
		background: url("../../assets/images/header-trialbox-mobile.jpg");
		background-size: cover;
		background-repeat: no-repeat;
		padding: $gap--constraint__section--hero__base;
		min-height: $size--min-height--section__hero__base;
		display: flex;
		flex-direction: column-reverse;
		

		@include respond-from("medium") {
			background: url("../../assets/images/header-trialbox-tablet.jpg");
			background-size: cover;
			background-repeat: no-repeat;
			min-height: $size--min-height--section__hero__large;
			flex-direction: row-reverse;
			height: 100%;
			padding: $gap--constraint__section--hero__large;
		};

		@include respond-from("large") {
			background: url("../../assets/images/header-trialbox-desktop.jpg");
			background-size: cover;
			background-repeat: no-repeat;
		};

		div {
			display: flex;
			flex-direction: column;
			flex-grow: 1;
			flex-shrink: 1;
			justify-content: center;
			align-items: center;
			margin: 0;
			padding: $gap--constraint__section--hero--overlay__base;
			background: rgba(255, 255, 255, 0.7);

			@include respond-from("medium") {
				justify-content: center;
				padding: $gap--constraint__section--hero--overlay__large;
				max-width: $size--overlay--width;
			}
		}
	}
</style>
