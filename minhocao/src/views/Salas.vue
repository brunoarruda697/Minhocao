<template>
	<div class="salas">
		<v-container fluid grid-list-sm fill-height>
			<v-layout row wrap fill-height align-center justify-center>
				<v-flex pt-3 pb-3 xs3 v-for="sala in salas" :key="sala.titulo">
					<sala-card
						:conteudo="sala"
						@inscrever="abrirSala(sala.id)"
					></sala-card>	
				</v-flex>
			</v-layout>
		</v-container>
	</div>
</template>

<script>
import SalaCard from '@/components/SalaCard.vue';
import { buscarTudo } from '@/views/service';

export default {
	name: 'Salas',
	components: {
		SalaCard,
	},
	data() {
		return {
			salas: [],
		};
	},
	created() {
		this.pegarSalas();
	},
	methods: {
		pegarSalas() {
			buscarTudo()
			.then(({ data }) => {
				this.salas = data;
			});
		},
		abrirSala(id) {
			this.$router.push(`salas/${id}`);
		},
	},
};
</script>

<style>
.salas {
	height: 100vh;
}
</style>
