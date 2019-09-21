import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const store = new Vuex.Store({
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
		]
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
