<template>
  <div class="regulamento">
    <v-layout fill-height justify-center align-center pa-5>
      <v-card width="80%" height="100%">
        <v-card-title>
          <v-layout justify-start align-center>
            <v-btn
              icon
              title="Voltar"
              @click="voltarPagina($event)"
            >
              <v-icon large>
                keyboard_backspace
              </v-icon>
            </v-btn>
          </v-layout>
        </v-card-title>
        <v-card-text>
          <v-layout ml-5 mr-5 justify-center align-start column fill-height>
            <h1 class="regulamento-texto-titulo">
              Sobre o Jogo MinhocãoII com temáticas para o escape Game
            </h1>
            <br>
            <p>•	Um grupo será trancado em uma sala e terá um tempo determinado para encontrar a solução de sua saída;</p>
            <p>•	Nesta sala o grupo deve usar sua intuição, inteligência e habilidades, trabalhando em grupo para poder sair da sala;</p>
            <p>•	Para chegar à solução final o grupo deverá usar suas habilidades para decifrar uma serie de enigmas, códigos e puzzles;</p>
            <p>•	Os jogos são denominados “casos clínicos baseados em filmes e livros” e cada uma delas apresenta uma história e uma sala temática;</p>
            <p>•  Os jogos são projetados para serem uma experiência de entretenimento, desafio intelectual e também como uma ferramenta de desenvolvimento humano.</p>
            <h1 class="regulamento-texto-titulo">
              Sobre os Jogadores
            </h1>
            <br>
            <p>•	Jogadores de todas as idades são bem-vindos, porém menores de 18 anos devem estar acompanhados pelos pais ou responsável autorizado;</p>
            <h1 class="regulamento-texto-titulo">
              Sobre as Sessões
            </h1>
            <br>
            <p>•	A ocupação da sala fica disponível até completar o seu máximo de jogadores. Você poderá jogar com desconhecidos e fazer novas amizades;</p>
            <h1 class="regulamento-texto-titulo">
              Sobre as histórias baseados nos casos clínicos
            </h1>
            <table>
              <td>
                <span class="tabela-titulo">Aventura</span>
                <tr>
                  O vagão dos ossos
                </tr>
                <tr>
                  Quebrando as regras com o Crossfit
                </tr>
                <tr>
                  O Despertar do Conde Dracula
                </tr>
                <tr>
                  Hotel California
                </tr>
                <tr>
                  Morte à Meia Noite
                </tr>
                <tr>
                  Escola de Magia
                </tr>
              </td>
              <td>
                Capacidade
                <tr>
                  6 Pessoas
                </tr>
                <tr>
                  6 Pessoas
                </tr>
                <tr>
                  6 Pessoas
                </tr>
                <tr>
                  6 Pessoas
                </tr>
                <tr>
                  6 Pessoas
                </tr>
                <tr>
                  6 Pessoas
                </tr>
              </td>
              <td>
                Duração
                <tr>
                  30 Minutos
                </tr>
                <tr>
                  30 Minutos
                </tr>
                <tr>
                  30 Minutos
                </tr>
                <tr>
                  30 Minutos
                </tr>
                <tr>
                  30 Minutos
                </tr>
                <tr>
                  30 Minutos
                </tr>
              </td>
            </table>
          </v-layout>
        </v-card-text>
      </v-card>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: 'Regulamento',
  methods: {
    voltarPagina() {
      this.$router.go(-1);
    },
  },
};
</script>

<style>
.regulamento {
  height: 100vh;
}

.regulamento-texto-titulo {
  font-size: 24px;
  font-style: italic;
}

.tabela-titulo{
  font-size: 18px;
  font-weight: 900;
}

p {
  font-size: 18px;
}

td {
  padding-right: 20px;
}
</style>
