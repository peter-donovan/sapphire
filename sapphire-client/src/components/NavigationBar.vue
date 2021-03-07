<template>
	<div>
		<v-navigation-drawer app clipped v-model="drawer">
			<v-list nav>
				<v-list-item v-for="(item, index) in items" :key="index" :to="item.path" link exact>
					<v-list-item-content class="text-uppercase">
						<v-list-item-title>{{ item.name }}</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>
		<v-app-bar app clipped-left>
			<v-app-bar-nav-icon x-large @click.stop="drawer = !drawer" />
			<v-toolbar-title>
				<router-link class="text-decoration-none" to="/">
					<h2 class="font-weight-black text-uppercase white--text">Sapphire</h2>
				</router-link>
			</v-toolbar-title>
			<v-spacer />
			<v-toolbar-items class="hidden-md-and-down" v-for="(item, index) in items" :key="index" :to="item.path">
				<v-container v-if="item.path !== '/'">
					<v-btn exact-active-class="btn-active" :to="item.path" exact text>{{ item.name }}</v-btn>
				</v-container>
			</v-toolbar-items>
		</v-app-bar>
	</div>
</template>

<script>
export default {
	name: 'NavigationBar',
	data() {
		return {
			buttonState: this.$route.matched,
			drawer: false,
			items: [
				{ name: 'Home', path: '/' },
				{ name: 'Register', path: '/register' },
				{ name: 'Login', path: '/login' },
			],
		};
	},
};
</script>

<style lang="scss" scoped>
.container--debug {
	border: 1px solid red;
}
</style>
