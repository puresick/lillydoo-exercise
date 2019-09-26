<template>
	<AppSection id="picker">
		<ProductPickerPresentation
			:activeItem="activeItem"
		/>
		<ProductPickerSelection
			:headline="content.headline"
			:subHeadline="content.subHeadline"
			:description="content.description"
			:items="content.items"
			:activeItem="activeItem"
			:list="content.list"
			:cta="content.cta"
			:selectProduct="selectProduct"
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
				default: {},
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
