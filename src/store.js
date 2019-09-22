import Vue from "vue"
import Vuex from "vuex"

import iconFlexibility from "../assets/icons/lillydoo-your-flexibility-icon.svg"
import iconSubscription from "../assets/icons/lillydoo-your-subscription-icon.svg"
import iconTrialbox from "../assets/icons/lillydoo-your-trialbox-icon.svg"

Vue.use(Vuex)

const contentDiaper = {
	title: "10 Lillydoo Windels",
	list: [
		"0 % Parfüme & Lotionen, 100 % LILLYDOO Schutz",
		"Extra weich und super bequem",
		"Mit unseren Turbo Tunneln für eine ideale Passform und schnelle Absorption"
	],
	image: require("../assets/images/lillydoo-little-blowballs-design-preview-tp.jpg")
}

const contentBabyWipesWater = {
	title: "15 Feuchttücher mit 99 % Wasser",
	list: [
		"0 % Parfüme & PEGs, 100 % biologisch abbaubar",
		"Natürlich rein, extra mild, Alternative zu \"Wasser & Watte\""
	],
	image: require("../assets/images/water-wipes-15-small.jpg")
}

const contentBabyWipesSensitive = {
	title: "15 sensitive Feuchttücher",
	list: [
		"0 % Parfüme & PEGs, 100 % biologisch abbaubar",
		"Extra dickes und kompostierbares Tuch"
	],
	image: require("../assets/images/sensitive-wipes-15-small.jpg")
}

const store = new Vuex.Store({
	strict: true,
	state: {
		productPickerContent: {
			headline: "Unser gratis Testpaket",
			subHeadline: "Wähle deine Größe",
			description: "Teste jetzt unsere Windeln und Feuchttücher. Wir zahlen die Produkte, Du nur den Versand.",
			cta: "In den Warenkorb legen",
			activeItem: {},
			list: [
				"Automatischer Übergang ins jederzeit kündbare Windel-Abo für 49,50€ pro Lieferung.",
				"Preise inkl. MwSt., ggf. zzgl. Versandkosten"
			],
			items: [
				{
					id: 0,
					label: {
						main: "1",
						detail: "(2-3 KG)"
					},
					image: require("../assets/images/lillydoo-testpaket-10.jpg"),
					packageContent: [
						contentDiaper,
						contentBabyWipesWater
					]
				},
				{
					id: 1,
					label: {
						main: "2",
						detail: "(3-4 KG)"
					},
					image: require("../assets/images/lillydoo-testpaket-20.jpg"),
					packageContent: [
						contentDiaper,
						contentBabyWipesWater
					]
				},
				{
					id: 2,
					label: {
						main: "3",
						detail: "(4-7 KG)"
					},
					image: require("../assets/images/lillydoo-testpaket-30.jpg"),
					packageContent: [
						contentDiaper,
						contentBabyWipesWater
					]
				},
				{
					id: 3,
					label: {
						main: "4",
						detail: "(7-10 KG)"
					},
					image: require("../assets/images/lillydoo-testpaket-40.jpg"),
					packageContent: [
						contentDiaper,
						contentBabyWipesSensitive
					]
				},
				{
					id: 4,
					label: {
						main: "5",
						detail: "(10-12 KG)"
					},
					image: require("../assets/images/lillydoo-testpaket-50.jpg"),
					packageContent: [
						contentDiaper,
						contentBabyWipesSensitive
					]
				}
			],
		},
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
			headline: "Dein Testpaket enthält"
		}
	},
	mutations: {
		setProductPickerActiveItem(state, item) {
			// add parameter type checking
			state.productPickerContent.activeItem = item
		}
	},
	actions: {
		async selectProduct({ commit }, item) {
			await commit("setProductPickerActiveItem", item)
		}
	}
})

export default store
