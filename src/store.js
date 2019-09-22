import Vue from "vue"
import Vuex from "vuex"

import iconFlexibility from "../assets/icons/lillydoo-your-flexibility-icon.svg"
import iconSubscription from "../assets/icons/lillydoo-your-subscription-icon.svg"
import iconTrialbox from "../assets/icons/lillydoo-your-trialbox-icon.svg"

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
					link: "",
					title: "Dein Testpaket"
				},
				{
					description: "Erste Monatsbox nach 14 Tagen für 49,50€ erhalten. Oder noch vor der ersten Lieferung kündigen.",
					icon: iconFlexibility,
					link: "",
					title: "Deine Flexibilität"
				},
				{
					description: "Jederzeit Designs oder Lieferintervalle anpassen oder die Windelgröße ändern.",
					icon: iconSubscription,
					link: "",
					title: "Deine Monatsbox"
				}
			]
		}
	},
	mutations: {
		setProductPickerActiveItemId(state, id) {
			// add parameter type checking
			state.productPickerActiveItemId = id
		}
	},
	actions: {
		selectProduct({ commit }, id) {
			commit("setProductPickerActiveItemId", id)
		}
	}
})

export default store
