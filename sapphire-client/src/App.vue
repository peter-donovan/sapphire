<template>
	<v-app>
		<NavigationBar />
		<v-main>
			<router-view></router-view>
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
