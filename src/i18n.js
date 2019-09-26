import Vue from "vue"
import VueI18n from "vue-i18n"

import de from "../content.js"

Vue.use(VueI18n)

const messages = {
	de
}

const i18n = new VueI18n({
	locale: "de",
	messages
})

export default i18n
