import Vue from "vue"

import store from "./store"
import i18n from "./i18n"
import App from "./components/App"

new Vue({
	store,
	i18n,
	el: "#app",
	render: h => h(App)
})
