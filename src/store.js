import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const store = new Vuex.Store({
	strict: true,
	state: {
		productPicker: {
			activeItem: {}
		}
	},
	mutations: {
		setProductPickerActiveItem(state, item) {
			state.productPicker.activeItem = item
		}
	},
	actions: {
		async selectProduct({ commit }, item) {
			await commit("setProductPickerActiveItem", item)
		}
	}
})

export default store
