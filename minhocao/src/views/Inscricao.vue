<template>
	<div class="inscricao">
		<v-container
			fill-height
			align-center
			justify-center
		>
			<v-card
				class="card"
				width="100%"
				height="100%"
				elevation="20"
			>
				<v-layout
					row
					wrap
					justify-start
					align-center
					pa-3
				>
					<v-flex xs3>
						<v-text-field
							box
							v-model="pessoa.ra"
							label="Registro Academico (R.A)"
						>
						</v-text-field>
					</v-flex>
					<v-flex xs3 ml-3>
						<v-text-field
							box
							v-model="pessoa.nome"
							label="Nome"
						>
						</v-text-field>
					</v-flex>
					<v-flex xs3 ml-3 d-flex>
						<v-select
							box
							v-model="pessoa.curso"
							:items="cursos"
							item-text="curso"
							no-data-text="Curso inválido."
							label="Curso"
							absolute
						>
						</v-select>
					</v-flex>
				</v-layout>
			</v-card>
		</v-container>
	</div>
</template>

<script>
import Cursos from '@/utils/cursos';

export default {
	name: 'Inscricao',
	data() {
		return {
			pessoa: {
				ra: '',
				nome: '',
				curso: '',
			},
			cursos: Cursos,
		};
	},
};
</script>

<style>
.inscricao {
	height: 100vh;
}
</style>
