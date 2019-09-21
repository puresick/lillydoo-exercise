<template>
	<article>
		<AppHeadline>
			Unser gratis Testpaket
		</AppHeadline>
		<AppSubHeadline>
			Wähle deine Größe
		</AppSubHeadline>
		<ProductPickerSelectionInput
			:items="productPickerItems"
			:activeItemId="productPickerActiveItemId"
			:selectProduct="selectProduct"
		/>
		<AppParagraph>
			Teste jetzt unsere Windeln und Feuchttücher. Wir zahlen die Produkte, Du nur den Versand.
		</AppParagraph>
		<AppList
			:items="productDescriptionList"
		/>
		<AppButton
			fluid
			label="In den Warenkorb legen"
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

	import { mapState, mapActions } from "vuex"

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
		computed: {
			...mapState([
				"productDescriptionList",
				"productPickerItems",
				"productPickerActiveItemId"
			])
		},
		methods: {
			...mapActions([
				"selectProduct"
			])
		}
	}
</script>
