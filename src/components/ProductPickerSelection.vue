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
		data() {
			return {
				productDescriptionList: [
					"Automatischer Übergang ins jederzeit kündbare Windel-Abo für 49,50€ pro Lieferung.",
					"Preise inkl. MwSt., ggf. zzgl. Versandkosten"
				],
				productPickerItems: [
					{
						id: 0,
						label: {
							main: "1",
							detail: "(2-3 KG)"
						},
						product: "feb5419d5c8e41c679f994d7d2fce037"
					},
					{
						id: 1,
						label: {
							main: "2",
							detail: "(3-4 KG)"
						},
						product: "476e05df70e556c743e974efed620321"
					},
				]
			}
		}
	}
</script>
