const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o valor do raio da esfera: ', (raio) => {
  const raioNum = parseFloat(raio);

  if (!isNaN(raioNum)) {
    const area = 4 * Math.PI * Math.pow(raioNum, 2);
    console.log(`A área da esfera é: ${area}`);
  } else {
    console.log('Valor inválido. Certifique-se de inserir um número válido para o raio da esfera.');
  }

  rl.close();
});
