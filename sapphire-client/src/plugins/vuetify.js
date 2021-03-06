import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
	theme: {
		dark: true,
		options: {
			customProperties: true,
		},
		themes: {
			dark: {
				primary: colors.lightBlue.lighten1,
				secondary: colors.grey.darken4,
				accent: colors.teal.accent3,
				success: colors.green.lighten1,
				info: colors.blue.lighten3,
				warning: colors.yellow.lighten1,
				error: colors.red.lighten1,
				anchor: colors.teal.accent3,
			},
		},
	},
});
