import Vue from "vue"
import Vuex from "vuex"

import iconFlexibility from "../assets/icons/lillydoo-your-flexibility-icon.svg"
import iconSubscription from "../assets/icons/lillydoo-your-subscription-icon.svg"
import iconTrialbox from "../assets/icons/lillydoo-your-trialbox-icon.svg"
import imageDiaper from "../assets/images/lillydoo-little-blowballs-design-preview-tp.jpg"
import imageBabyWipesWater from "../assets/images/water-wipes-15-small.jpg"
import imageBabyWipesSensitive from "../assets/images/sensitive-wipes-15-small.jpg"

Vue.use(Vuex)

const store = new Vuex.Store({
	strict: true,
	state: {
		productPickerItems: [
			{
				id: 0,
				label: {
					main: "1",
					detail: "(2-3 KG)"
				},
				image: "../assets/images/product-1.jpg"
			},
			{
				id: 1,
				label: {
					main: "2",
					detail: "(3-4 KG)"
				},
				image: "../assets/images/product-2.jpg"
			},
		],
		productPickerActiveItemId: 0,
		productDescriptionList: [
			"Automatischer Übergang ins jederzeit kündbare Windel-Abo für 49,50€ pro Lieferung.",
			"Preise inkl. MwSt., ggf. zzgl. Versandkosten"
		],
		howToContent: {
			headline: "Wie es funktioniert",
			fragments: [
				{
					description: "Wir schenken dir die Produkte, du übernimmst nur das Porto.",
					icon: iconTrialbox,
					title: "Dein Testpaket"
				},
				{
					description: "Erste Monatsbox nach 14 Tagen für 49,50€ erhalten. Oder noch vor der ersten Lieferung kündigen.",
					icon: iconFlexibility,
					link: {
						href: "https://www.lillydoo.com/de/windel-abo",
						text: "Erfahre hier mehr über das LILLYDOO Windel-Abo"
					},
					title: "Deine Flexibilität"
				},
				{
					description: "Jederzeit Designs oder Lieferintervalle anpassen oder die Windelgröße ändern.",
					icon: iconSubscription,
					title: "Deine Monatsbox"
				}
			]
		},
		packageContent: {
			headline: "Dein Testpaket enthält",
			fragments: [
				{
					title: "10 Lillydoo Windels",
					list: [
						"0 % Parfüme & Lotionen, 100 % LILLYDOO Schutz",
						"Extra weich und super bequem",
						"Mit unseren Turbo Tunneln für eine ideale Passform und schnelle Absorption"
					],
					image: imageDiaper
				},
				{
					title: "15 Feuchttücher mit 99 % Wasser",
					list: [
						"0 % Parfüme & PEGs, 100 % biologisch abbaubar",
						"Natürlich rein, extra mild, Alternative zu \"Wasser & Watte\""
					],
					image: imageBabyWipesWater
				}
			]
		}
	},
	mutations: {
		setProductPickerActiveItemId(state, id) {
			// add parameter type checking
			state.productPickerActiveItemId = id
		},
		setPackageContentBabyWipesImage(state, image) {
			state.packageContent.fragments[1].image = image
		}
	},
	actions: {
		selectProduct({ commit }, id) {
			commit("setProductPickerActiveItemId", id)
			const image = (id > 2) ? imageBabyWipesWater : imageBabyWipesSensitive
			commit("setPackageContentBabyWipesImage", image)
		}
	}
})

export default store
