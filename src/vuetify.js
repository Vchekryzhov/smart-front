import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import ru from "vuetify/es5/locale/ru";

Vue.use(Vuetify);

export default new Vuetify({
	lang: {
		locales: { ru },
		current: "ru"
	},
	icons: {
		iconfont: "md"
	},
	theme: {
		themes: {
			light: {
				primary: "#005B9C",
			}
		}
	}
});