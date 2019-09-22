<template>
	<AppSection>
		<ProductPickerPresentation />
		<ProductPickerSelection />
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
		}
	}
</script>
