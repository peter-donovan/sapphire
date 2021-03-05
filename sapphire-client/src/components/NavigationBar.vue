<template>
	<v-app-bar class="px-3" app>
		<v-toolbar-title>
			<router-link to="/">
				<h2 class="font-weight-black text-uppercase white--text">
					<v-icon class="icon" color="blue lighten-3" large>mdi-diamond-outline</v-icon>
					Sapphire
				</h2>
			</router-link>
		</v-toolbar-title>
		<v-spacer />
		<v-app-bar-nav-icon class="mdi-diamond-outline"> </v-app-bar-nav-icon>
		<v-navigation-drawer app> </v-navigation-drawer>
		<v-toolbar-items class="align-center flex justify-end" v-for="(link, name) in routes" :key="name">
			<router-link class="text-uppercase" :to="link">
				{{ name }}
			</router-link>
		</v-toolbar-items>
	</v-app-bar>
</template>

<script>
export default {
	name: 'NavigationBar',
	data() {
		return {
			routes: {
				home: '/',
				chat: '/chat',
				register: '/register',
				login: '/login',
			},
		};
	},
};
</script>

<style lang="scss" scoped>
.spacer {
	flex-grow: 2;
}

a {
	text-decoration: none;
}
</style>
