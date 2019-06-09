<template>
  <div class="sidebar">
		<v-navigation-drawer
			fill-height
			permanent
		>
			<v-layout column fill-height class="sidebar-layout">
				<v-divider></v-divider>
				<v-list
					dense
				>
					<v-list-tile
						v-for="item in items"
						:key="item.title"
						justify-center
						@click="onClick(item)"
						class="items"
					>
						<v-list-tile-action class="action">
							<v-icon color="primary">
								{{ item.icon }}
							</v-icon>
						</v-list-tile-action>
						<v-list-tile-content>
							<v-list-tile-title class="title">
								{{ item.title }}
							</v-list-tile-title>
						</v-list-tile-content>
					</v-list-tile>
				</v-list>
			</v-layout>
		</v-navigation-drawer>
	</div>
</template>

<script>
export default {
	name: 'Sidebar',
	data() {
		return {
			items: [
				{
					title: 'Inscrição',
					icon: 'person_add',
					route: 'inscricao',
				},
				{
					title: 'Regulamento',
					icon: 'event_note',
					route: 'regulamento',
				},
			],
		};
	},
	methods: {
		onClick(itemSelecionado) {
			this.items.forEach((elemento) => {
				const objeto = elemento;
				objeto.active = objeto.title === itemSelecionado.title;
			});
			this.$router.push({ name: itemSelecionado.route });
		},
	},
};
</script>

<style>
.sidebar {
  height: 100vh;
}

.sidebar-layout {
	background-color: #211717;
	padding: 2vh;
}

.action {
	justify-content: center;
}

.action .v-icon {
	color: #dfddc7;
}

.items {
	border: 2px solid white;
	border-radius: 0.5vh;
	margin-bottom: 2vh;
	color: #dfddc7;
	background-color: #a34a28;
}

.title {
	font-size: 20px !important;
	margin-top: 5px;
}
</style>
