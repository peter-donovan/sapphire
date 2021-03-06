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

<style lang="scss"></style>
<script>
import NavigationBar from '@/components/NavigationBar';
export default {
	components: {
		NavigationBar,
	},
};
</script>
