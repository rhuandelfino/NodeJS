const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o valor do lado do quadrado: ', (lado) => {
  const ladoNum = parseFloat(lado);

  if (!isNaN(ladoNum)) {
    const area = ladoNum * ladoNum;
    console.log(`A área do quadrado é: ${area}`);
  } else {
    console.log('Valor inválido. Certifique-se de inserir um número válido para o lado do quadrado.');
  }

  rl.close();
});
