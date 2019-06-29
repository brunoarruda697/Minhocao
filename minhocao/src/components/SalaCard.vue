<template>
  <div class="sala-card">
    <v-layout justify-center align-center>
      <v-card
        width="27vh"
        height="100%"
        class="card-style"
      >
        <v-img
          :src="conteudo.imagem"
          aspect-ratio="1"
          class="grey lighten-2"
        >
          <v-layout pa-2 column fill-height class="lightbox white--text">
            <v-spacer></v-spacer>
            <v-flex shrink>
              <div class="subheading">{{ conteudo.card }}</div>
            </v-flex>
          </v-layout>
        </v-img>
        <v-flex xs12>
          <v-layout column pa-2 fill-height>
            <v-flex xs12>
              <v-layout ml-2 mt-1 justify-start>
                <span>Limite: {{ conteudo.limite }}</span>
              </v-layout>
            </v-flex>
            <v-flex xs12 mt-2>
              <v-layout ml-2 justify-start>
                <span>Tempo: {{ conteudo.tempo }}</span>
              </v-layout>
            </v-flex>
            <v-flex xs12 mt-3>
              <v-layout justify-end>
                <v-flex xs4>
                  <button class="botao-detalhes" @click="inscricao($event)">
                    <span class="botao-detalhes-texto">DETALHES</span>
                  </button>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-card>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: 'SalaCard',
  props: {
    conteudo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    inscricao() {
      this.$emit('inscrever', this.conteudo);
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

.sala-card {
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-size: 2vh;
  font-weight: normal;
  color: #000000;
}

.card-style {
  border-radius: 1vh;
}

.botao-detalhes {
  outline: none;
}

.botao-detalhes-texto {
  font-family: 'Roboto', sans-serif;
  font-size: 15px;
}
</style>
