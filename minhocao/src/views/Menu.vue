<template>
	<div class="menu">
		<v-layout row>
			<sidebar></sidebar>
			<v-content>
				<transition>
					<router-view></router-view>
				</transition>
			</v-content>
		</v-layout>
	</div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';

export default {
	name: 'Menu',
	components: {
		Sidebar,
	},
};
</script>

<style>
.menu {
	height: 100vh;
}
</style>
