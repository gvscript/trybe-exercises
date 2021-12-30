const readline = require('readline-sync');



const result = (inputNum, randomNum) => {
  if (inputNum !== randomNum) {
    return console.log(`Não foi dessa vez. O número sorteado foi ${randomNum}`);
  } 

  return console.log(`Parabéns, você acertou!`);
}

const sorteio = () => {
  const randomNum = parseInt(Math.random() * 10);
  const inputNum = readline.questionInt('Informe um número inteiro entre 0 e 10: ');

  result(inputNum, randomNum);

  const restart = readline.question('Tecle "s" caso queira tentar novamente: ');
  if (restart !== 's') {
    return console.log('Ok, podemos tentar novamente em outro momento ');
  }

  sorteio()
}



sorteio();