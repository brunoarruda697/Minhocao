<template>
  <div class="sidebar">
		<v-navigation-drawer
			fill-height
			permanent
		>
			<v-layout column fill-height>
				<v-divider></v-divider>
				<v-list
					dense
				>
					<v-list-tile
						v-for="item in items"
						:key="item.title"
						justify-center
						@click="onClick(item)"
					>
						<v-list-tile-action>
							<v-icon
								large
							>
								{{ item.icon }}
							</v-icon>
						</v-list-tile-action>
						<v-list-tile-content>
							<v-list-tile-title>
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
</style>
