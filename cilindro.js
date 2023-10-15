const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o valor do raio da base do cilindro: ', (raio) => {
  rl.question('Digite o valor da altura do cilindro: ', (altura) => {
    const raioNum = parseFloat(raio);
    const alturaNum = parseFloat(altura);

    if (!isNaN(raioNum) && !isNaN(alturaNum)) {
      const area = 2 * Math.PI * raioNum * (raioNum + alturaNum);
      console.log(`A área da superfície do cilindro é: ${area}`);
    } else {
      console.log('Valores inválidos. Certifique-se de inserir números válidos para o raio da base e a altura do cilindro.');
    }

    rl.close();
  });
});
