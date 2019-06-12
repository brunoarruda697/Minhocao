import axios from 'axios';

const instanciaDoAxios = axios.create();

function buscarTudo() {
  return instanciaDoAxios.get('http://5d004052d021760014b74dab.mockapi.io/salas');
}

function buscarPorNumeroDaSala(numeroDaSala) {
  return instanciaDoAxios.get(`http://5d004052d021760014b74dab.mockapi.io/salas/${numeroDaSala}`);
}

export {
  buscarTudo,
  buscarPorNumeroDaSala,
};
