<template>
	<AppSection id="picker">
		<ProductPickerPresentation
			:active-item="activeItem"
		/>
		<ProductPickerSelection
			:headline="content.headline"
			:sub-headline="content.subHeadline"
			:description="content.description"
			:items="content.items"
			:active-item="activeItem"
			:list="content.list"
			:cta="content.cta"
			:select-product="selectProduct"
		/>
	</AppSection>
</template>

<script>
import AppSection from "./AppSection"
import ProductPickerPresentation from "./ProductPickerPresentation"
import ProductPickerSelection from "./ProductPickerSelection"

export default {
	name: "ProductPicker",
	components: {
		AppSection,
		ProductPickerPresentation,
		ProductPickerSelection
	},
	props: {
		content: {
			default: () => ({}),
			type: Object
		},
		selectProduct: {
			default: () => {},
			type: Function
		},
		activeItem: {
			default: () => ({}),
			type: Object
		}
	}
}
</script>
