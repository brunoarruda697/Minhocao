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
</style>
