<template>
  <div class="home">
    <v-container fluid fill-height>
      <v-layout justify-center align-center fill-height>
        <div id="twitch">
          <div>Horror<span>Movie</span></div>
          <div>We Know<span>everything</span></div>
          <div><span>Monochrome</span> Glitches </div>
          <div>We See<span>you</span></div>
          <div>Moody<span>atmosphere</span></div>
          <div><span>Stay</span> Awake </div>
          <div>Creepy<span>style</span></div>
          <div><span>Look</span>Behind You</div>
            <input
              type="button"
              class="botao"
              @click="abrirPaginaDasSalas($event)"
              value="Entrar"
            >
            <input
              type="button"
              class="botao-regulamento"
              @click="abrirRegulamento($event)"
              value="Regulamento"
            >
          </div>
      </v-layout>
    </v-container>
  </div>
</template>

<script>

export default {
  name: 'Home',
  methods: {
    abrirPaginaDasSalas() {
      this.$router.push('/salas');
    },
    abrirRegulamento() {
      this.$router.push('/regulamento');
    },
  },
};
</script>

<style scoped>
  .home {
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

  #twitch {
    font-size: 4em;
    height: 100vh;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
  }

  #twitch span {
    display: block;
    font-size: .4em;
    opacity: .8;
  }

  #twitch div {
    position: fixed;
    margin: 2vh 0;
    opacity: 0;
    left: 40vw;
    width: 80vw;
    animation: switch 40s linear infinite;
  }

  #twitch div:nth-child(2) { animation-delay: 4s}
  #twitch div:nth-child(3) { animation-delay: 8s}
  #twitch div:nth-child(4) { animation-delay: 12s}
  #twitch div:nth-child(5) { animation-delay: 16s}
  #twitch div:nth-child(6) { animation-delay: 20s}
  #twitch div:nth-child(7) { animation-delay: 24s}
  #twitch div:nth-child(8) { animation-delay: 28s}

  @keyframes switch {
    0% { opacity: 0; filter: blur(3px); transform:scale(.95);
      text-shadow: 40px 42px 2px rgba(0,0,0,.2)}
    3% { opacity: .7; filter: blur(2px); transform:scale(1);
      text-shadow: 40px 42px 2px rgba(0,0,0,.1)}
    6% { opacity: .7; filter: blur(2px); transform:scale(1); color: #fff;
      text-shadow: 40px 42px 2px rgba(0,0,0,.1)}
    10% { opacity: .7; filter: blur(3px); transform:scale(1.1); color: #000;
      text-shadow: 40px 42px 2px rgba(0,0,0,.1)}
    10.1% { opacity: .8; filter: blur(2px); transform:scale(2); color: #fff;
      text-shadow: -40px -142px 2px rgba(0,0,0,.1)}
    10.2% { opacity: .8; filter: blur(2px); transform:scale(2); color: #fff;
      text-shadow: 40px 42px 2px rgba(0,0,0,0,.1)}
    11.1% { opacity: .8; filter: blur(2px); transform:scale(2); color: #111;
      text-shadow: 40px 42px 2px rgba(0,0,0,.1)}
    11.2% { opacity: .7; filter: blur(2px); transform:scale(2); color: #fff;
      text-shadow: 90px 52px 2px rgba(0,0,0,.1)}
    12% { opacity: .7; filter: blur(5px); transform:scale(1.1); color: black;
      text-shadow: 90px 52px 2px rgba(0,0,0,0)}
    12.1% { opacity: .7; filter: blur(5px); transform:scale(1.1); color: #000;
      text-shadow: -90px -52px 2px rgba(0,0,0,0)}
    13% { opacity: 0; filter: blur(3px); transform:scale(1); color: #000;
      text-shadow: 40px 42px 2px}
    12.1% { opacity: .7; filter: blur(5px); transform:scale(1.1); color: #000;
      text-shadow: -90px -52px 2px rgba(0,0,0,0)}
    80% { opacity: 0}
    100% { opacity: 0}
  }

  @keyframes flicker {
  0% {background: #fff;opacity: 0}
  10% {background: #fff;opacity: 0}
  10.1% {background: #fff;opacity: 1}
  10.2% {background: #fff;opacity: 0}
  23% {background: #fff;opacity: 0}
  23.1% {background: #fff;opacity: 1}
  23.2% {background: #fff;opacity: 0}
  35% {background: #fff;opacity: 0}
  35.1% {background: #fff;opacity: 1}
  35.2% {background: #fff;opacity: 0}
  48% {background: #fff;opacity: 0}
  48.1% {background: #fff;opacity: 1}
  48.2% {background: #fff;opacity: 0}
  60% {background: #fff;opacity: 0}
  60.1% {background: #fff;opacity: 1}
  60.2% {background: #fff;opacity: 0}
  72% {background: #fff;opacity: 0}
  72.1% {background: #fff;opacity: 1}
  72.2% {background: #fff;opacity: 0}
  85% {background: #fff;opacity: 0}
  85.1% {background: #fff;opacity: 1}
  85.2% {background: #fff;opacity: 0}
  99% {background: #fff;opacity: 0}
  99.1% {background: #fff;opacity: 1}
  99.2% {background: #fff;opacity: 0}
  100% {background: #fff;opacity: 0}
  }

  .botao{
    position: absolute;
    top: 75%;
    left: 40%;
    color: white;
    background-color: #1E1F27;
    opacity: 0.5;
    width: 150px;
    height: 50px;
    text-align: center;
    border-radius: 10px;
    border-bottom-color: #704418;
    font-style: normal;
    letter-spacing: 0.03em;
    font-weight: bold;
    font-size: 24px;
    font-family: 'Montserrat', sans-serif;
  }

  .botao-regulamento{
    position: absolute;
    top: 75%;
    left: 50%;
    color: white;
    background-color: #1E1F27;
    opacity: 0.5;
    width: 250px;
    height: 50px;
    text-align: center;
    border-radius: 10px;
    border-bottom-color: #704418;
    font-style: normal;
    letter-spacing: 0.03em;
    font-weight: bold;
    font-size: 24px;
    font-family: 'Montserrat', sans-serif;
  }
</style>
