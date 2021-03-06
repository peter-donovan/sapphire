<template>
	<div>
		<v-app-bar class="px-3" clipped-left app>
			<v-toolbar-title>
				<router-link to="/">
					<h2 class="font-weight-black text-uppercase white--text">Sapphire</h2>
				</router-link>
			</v-toolbar-title>
			<v-spacer />
			<!-- Navigation Drawer Button (trigger) -->
			<v-app-bar-nav-icon class="hidden-lg-and-up" x-large @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
			<!-- Navbar Links -->
			<v-toolbar-items class="hidden-md-and-down" v-for="(item, index) in items" :key="index" :to="item.path">
				<template>
					<v-btn class="text-uppercase" :to="item.path" link exact text>{{ item.name }}</v-btn>
				</template>
			</v-toolbar-items>
		</v-app-bar>
		<!-- Navigation Drawer / Sidebar -->
		<v-navigation-drawer class="hidden-lg-and-up" v-model="drawer" app>
			<v-list nav>
				<v-list-item v-for="(item, index) in items" :key="index" :to="item.path" link exact>
					<v-list-item-content class="text-uppercase">
						<v-list-item-title>{{ item.name }}</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>
	</div>
</template>

<script>
export default {
	name: 'NavigationBar',
	data() {
		return {
			// clipped: true,
			drawer: false,
			items: [
				{ name: 'Home', path: '/' },
				{ name: 'Chat', path: '/chat' },
				{ name: 'Register', path: '/register' },
				{ name: 'Login', path: '/login' },
			],
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
