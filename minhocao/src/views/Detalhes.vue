<template>
  <div class="detalhes">
    <v-layout fill-height>
      <v-card width="100vh">
        <v-flex xs12>
          <v-img class="imagem" :src="sala.imagem" aspect-ratio="1"></v-img>
        </v-flex>
        <v-card-text>
          <span> alo</span>
        </v-card-text>
      </v-card>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: 'Detalhes',
  data() {
    return {
      sala: {},
    };
  },
  created() {
    this.sala = this.$route.params;
  },
};
</script>

<style>
.detalhes{
  height: 100vh;
}

.imagem {
  max-width: 100%;
  height: auto;
}
</style>
