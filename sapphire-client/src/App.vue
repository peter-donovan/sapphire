<template>
	<v-app id="app">
		<NavigationBar />

		<v-main>
			<v-container fluid>
				<router-view></router-view>
			</v-container>
		</v-main>
	</v-app>
</template>

<style lang="scss">
.main {
	text-align: center;
}
//#app {
//	font-family: Avenir, Helvetica, Arial, sans-serif;
//	-webkit-font-smoothing: antialiased;
//	-moz-osx-font-smoothing: grayscale;
//	text-align: center;
//	color: #2c3e50;
//}

//#nav {
//	padding: 30px;
//
//	a {
//		font-weight: bold;
//		color: #2c3e50;
//
//		&.router-link-exact-active {
//			color: #42b983;
//		}
//	}
//}
</style>
<script>
import NavigationBar from '@/components/NavigationBar';
export default {
	components: { NavigationBar },
};
</script>
