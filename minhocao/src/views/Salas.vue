<template>
	<div class="salas">
		<v-container fluid grid-list-sm fill-height>
			<v-layout row wrap fill-height align-center justify-center>
				<v-flex xs3 v-for="sala in salas" :key="sala.title">
					<sala-card
						:conteudo="sala"
						@inscrever="abrirSala($event)"
					></sala-card>	
				</v-flex>
			</v-layout>
		</v-container>
	</div>
</template>

<script>
import SalaCard from '@/components/SalaCard.vue'

export default {
	name: 'Salas',
	components: {
		SalaCard,
	},
	data() {
		return {
			salas: [
				{
					imagem: 'https://http2.mlstatic.com/adesivo-caveira-vw-justiceiro-D_NQ_NP_343001-MLB20258043305_032015-F.jpg',
					titulo: 'teste1',
					limite: 15,
					tempo: 35,
				},
				{
					imagem: 'https://http2.mlstatic.com/adesivo-caveira-vw-justiceiro-D_NQ_NP_343001-MLB20258043305_032015-F.jpg',
					titulo: 'teste2',
					limite: 20,
					tempo: 35,
				},
				{
					imagem: 'https://http2.mlstatic.com/adesivo-caveira-vw-justiceiro-D_NQ_NP_343001-MLB20258043305_032015-F.jpg',
					titulo: 'teste3',
					limite: 25,
					tempo: 35,
				},
				{
					imagem: 'https://http2.mlstatic.com/adesivo-caveira-vw-justiceiro-D_NQ_NP_343001-MLB20258043305_032015-F.jpg',
					titulo: 'teste4',
					limite: 30,
					tempo: 35,
				},
				{
					imagem: 'https://http2.mlstatic.com/adesivo-caveira-vw-justiceiro-D_NQ_NP_343001-MLB20258043305_032015-F.jpg',
					titulo: 'teste5',
					limite: 35,
					tempo: 35,
				},
				{
					imagem: 'https://http2.mlstatic.com/adesivo-caveira-vw-justiceiro-D_NQ_NP_343001-MLB20258043305_032015-F.jpg',
					titulo: 'teste5',
					limite: 35,
					tempo: 35,
				},
			],
		};
	},
	methods: {
		abrirSala(sala) {
			this.$router.push({ name: 'detalhes', params: sala })
		},
	},
};
</script>

<style>
.salas {
	position: fixed;
	width: 100%;
	height: 100%;
	background-color: rgba(0,0,0,.4);
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center bottom;
	background-attachment: fixed;
	background-image: url('https://images.unsplash.com/photo-1481018085669-2bc6e4f00eed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80');
}
</style>
