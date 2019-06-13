import axios from 'axios';

const instanciaDoAxios = axios.create();

function buscarTudo() {
  return instanciaDoAxios.get('http://5d004052d021760014b74dab.mockapi.io/salas');
}

function buscarPorNumeroDaSala(numeroDaSala) {
  return instanciaDoAxios.get(`http://5d004052d021760014b74dab.mockapi.io/salas/${numeroDaSala}`);
}

function fazerInscricao(informacoes) {
  return instanciaDoAxios.post('http://5d004052d021760014b74dab.mockapi.io/inscricao', informacoes);
}

export {
  buscarTudo,
  buscarPorNumeroDaSala,
  fazerInscricao,
};
