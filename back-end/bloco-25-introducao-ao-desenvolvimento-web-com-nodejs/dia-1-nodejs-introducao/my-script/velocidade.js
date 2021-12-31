const readline = require('readline-sync');

const distancia = readline.questionInt('Informe a distância em metros: ');
const tempo = readline.questionInt('Informe o tempo em segundos: ');

const calcVelocidade = (distancia, tempo) => {
  const vel = (distancia / tempo);

  console.log('=====================================================');
  console.log(`Considerando a distância de ${distancia}m e o tempo de ${tempo}s:`);
  console.log(`               A velocidade foi de  ${vel}m/s`);
  console.log('=====================================================');

}

calcVelocidade(distancia, tempo);
