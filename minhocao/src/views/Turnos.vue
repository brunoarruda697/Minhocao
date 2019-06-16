<template>
  <div class="turnos">
    <v-layout
      justify-center
      align-center
      pa-5
      fill-height
    >
      <v-layout
        justify-center
        align-center
        pa-5
        fill-height
      >
        <v-card width="100%" height="100%" class="elevation-10">
          <v-layout column fill-height>
            <v-layout justify-center align-center black>
              <span class="titulo-turno">Manhã</span>
            </v-layout>
            <v-layout row fill-height>
              <v-flex xs6>
                <v-layout justify-center align-center fill-height pa-5>
                  <button class="botao-turno" @click="entrarNasSalas('manha', 1)">
                    <span>
                      1º Turno
                    </span>
                  </button>
                </v-layout>
              </v-flex>
              <v-flex xs6>
                <v-layout justify-center align-center fill-height pa-5>
                  <button class="botao-turno" @click="entrarNasSalas('manha', 2)">
                    <span>
                      2º Turno
                    </span>
                  </button>
                </v-layout>
              </v-flex>
            </v-layout>
            <v-layout justify-center align-center black>
              <span class="titulo-turno">Tarde</span>
            </v-layout>
            <v-layout row fill-height>
              <v-flex xs6>
                <v-layout justify-center align-center fill-height pa-5>
                  <button class="botao-turno" @click="entrarNasSalas('tarde', 1)">
                    <span>
                      1º Turno
                    </span>
                  </button>
                </v-layout>
              </v-flex>
              <v-flex xs6>
                <v-layout justify-center align-center fill-height pa-5>
                  <button class="botao-turno" @click="entrarNasSalas('tarde', 2)">
                    <span>
                      2º Turno
                    </span>
                  </button>
                </v-layout>
              </v-flex>
            </v-layout>
            <v-layout justify-center align-center black>
              <span class="titulo-turno">Noite</span>
            </v-layout>
            <v-layout row fill-height>
              <v-flex xs6>
                <v-layout justify-center align-center fill-height pa-5>
                  <button class="botao-turno" @click="entrarNasSalas('noite', 1)">
                    <span>
                      1º Turno
                    </span>
                  </button>
                </v-layout>
              </v-flex>
              <v-flex xs6>
                <v-layout justify-center align-center fill-height pa-5>
                  <button class="botao-turno" @click="entrarNasSalas('noite', 2)">
                    <span>
                      2º Turno
                    </span>
                  </button>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-layout>
        </v-card>
      </v-layout>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: 'Turnos',
  methods: {
    entrarNasSalas(periodo, turno) {
      this.$router.push(`/${periodo}/${turno}`);
    }
  },
};
</script>

<style>
.turnos {
  height: 100vh;
}

.titulo-turno {
  font-size: 30px;
  color: white;
}

.botao-turno {
  width: 100%;
  height: 100%;
  border: 1px solid black;
  border-radius: 5px;
  outline: none;
}

.botao-turno span {
  font-size: 20px;
}

.v-card{
  border-radius: 5px;
}
</style>
