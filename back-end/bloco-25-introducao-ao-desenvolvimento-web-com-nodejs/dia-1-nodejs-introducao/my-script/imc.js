const peso = 80;
const altura = 1.79;

const calcIMC = (peso, altura) => {
  const calc = (peso / Math.pow(altura, 2)).toFixed(2);

  console.log('=====================================================');
  console.log(`Considerando peso de ${peso}Kg e alura de ${altura}m:`);
  console.log(`               O IMC é ${calc}`);
  console.log('=====================================================');

};


calcIMC(peso, altura);
