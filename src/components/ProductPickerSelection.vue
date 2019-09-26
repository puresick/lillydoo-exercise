<template>
	<article>
		<AppHeadline>
			{{ headline }}
		</AppHeadline>
		<AppSubHeadline>
			{{ subHeadline }}
		</AppSubHeadline>
		<ProductPickerSelectionInput
			:items="items"
			:activeItem="activeItem"
			:selectProduct="selectProduct"
		/>
		<AppParagraph>
			{{ description }}
		</AppParagraph>
		<AppList
			:items="list"
		/>
		<AppButton
			fluid
			:label="cta"
		/>
	</article>
</template>

<script>
	import AppButton from "./AppButton"
	import AppHeadline from "./AppHeadline"
	import AppList from "./AppList"
	import AppParagraph from "./AppParagraph"
	import AppSubHeadline from "./AppSubHeadline"
	import ProductPickerSelectionInput from "./ProductPickerSelectionInput"

	export default {
		name: "ProductPickerSelection",
		components: {
			AppButton,
			AppHeadline,
			AppList,
			AppParagraph,
			AppSubHeadline,
			ProductPickerSelectionInput
		},
		props: {
			cta: {
				default: "",
				type: String
			},
			description: {
				default: "",
				type: String
			},
			headline: {
				default: "",
				type: String
			},
			subHeadline: {
				default: "",
				type: String
			},
			items: {
				default: [],
				type: Array
			},
			list: {
				default: [],
				type: Array
			},
			activeItem: {
				default: () => ({}),
				type: Object
			},
			selectProduct: {
				default: () => {},
				type: Function
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "../stylesheets/config";
	@import "../stylesheets/mixins";

	article {
		@include respond-from("medium") {
			padding: $gap--picker;
		}
	}
</style>
