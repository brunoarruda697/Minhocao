<template>
  <div class="detalhes">
    <v-layout fill-height column>
      <v-flex fill-height xs6>
        <v-card width="100%" height="30vh" class="elevation-0">
          <v-layout fill-height>
            <v-img :src="sala.imagem"></v-img>
          </v-layout>
        </v-card>
      </v-flex>
      <v-layout fill-height pl-4 pb-4 pr-4 pt-3 column>
        <v-layout row>
          <v-flex xs12>
            <span class="sala-titulo">{{ sala.titulo }}</span>
          </v-flex>
        </v-layout>
        <v-layout fill-height>
          <v-flex xs12>
            <v-layout pa-3 justify-start align-center>
              <p class="sala-descricao">{{ sala.descricao }}</p>
            </v-layout>
          </v-flex>
        </v-layout>
        <v-layout row fill-height>
          <v-flex xs12>
            <v-card width="100%" height="100%">
              <v-flex xs12 fill-height>
                <v-layout fill-height pa-3 row justify-space-between>
                  <v-flex xs5>
                    <v-layout fill-height pa-3 column justify-space-between>
                      <span class="inscricao-titulo-campos">Nome</span>
                      <v-text-field
                        solo
                        v-model="inscricao.nome"
                      ></v-text-field>
                      <span class="inscricao-titulo-campos">Curso</span>
                      <v-select
                        solo
                        absolute
                        :menu-props="{ maxHeight: 100 }"
                        :items="cursos"
                        item-text="curso"
                        v-model="inscricao.curso"
                      ></v-select>
                      <v-flex xs12></v-flex>
                    </v-layout>
                  </v-flex>
                  <v-flex xs5>
                    <v-layout fill-height pa-3 column justify-space-between>
                      <span class="inscricao-titulo-campos">R.A.</span>
                      <v-text-field
                        solo
                        maxlength="8"
                        v-model="inscricao.ra"
                      ></v-text-field>
                      <span class="inscricao-titulo-campos">Turno</span>
                      <v-select
                        solo
                        absolute
                        :items="turno"
                        item-text="turno"
                        v-model="inscricao.turno"
                      ></v-select>
                      <v-flex xs12>
                        <v-layout align-center justify-end fill-height>
                          <v-btn class="botao" @click="realizarInscricao($event)">
                            <span class="botao-texto">Inscrever</span>
                          </v-btn>
                        </v-layout>
                      </v-flex>
                    </v-layout>
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-card>
          </v-flex>
        </v-layout>
      </v-layout>
    </v-layout>
  </div>
</template>

<script>
import { buscarPorNumeroDaSala, fazerInscricao } from '@/views/service';
import Cursos from '@/utils/cursos';

export default {
  name: 'Detalhes',
  data() {
    return {
      sala: {},
      cursos: Cursos,
      inscricao: {
        nome: '',
        ra: '',
        curso: '',
      },
      turno: [
        { turno: 'Manhã' },
        { turno: 'Tarde' },
        { turno: 'Noite' },
      ],
    };
  },
  created() {
    const numeroDaSala = this.$route.params.id;
    this.pegarSalaPorNumero(numeroDaSala);
  },
  methods: {
    pegarSalaPorNumero(numeroDaSala) {
      buscarPorNumeroDaSala(numeroDaSala)
      .then(({ data }) => {
        this.sala = data;
      });
    },
    realizarInscricao() {
      fazerInscricao(this.inscricao)
      .then(() => {
        /* eslint-disable */
        alert('Inscrição realizada com sucesso!');
      })
      .catch(() => {
        alert('Erro na realização da inscrição');
      });
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

.detalhes{
  height: 100vh;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 500;
  color: #000000;
}

.sala-titulo {
  font-size: 3vh;
}

.sala-descricao {
  font-size: 2vh;
}

.inscricao-titulo-campos {
  font-size: 2vh;
  margin-bottom: 0.3vh;
  margin-left: 1.2vh;
}

.botao {
  margin-right: 0px;
  width: 18vh;
  height: 100%;
}

.botao-texto {
  font-size: 1.5vh;
}
</style>
