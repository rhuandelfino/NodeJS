const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o valor do raio da base do cone: ', (raio) => {
  rl.question('Digite o valor da altura do cone: ', (altura) => {
    const raioNum = parseFloat(raio);
    const alturaNum = parseFloat(altura);

    if (!isNaN(raioNum) && !isNaN(alturaNum)) {
      const area = Math.PI * raioNum * (raioNum + Math.sqrt(raioNum ** 2 + alturaNum ** 2));
      console.log(`A área superficial do cone é: ${area}`);
    } else {
      console.log('Valores inválidos. Certifique-se de inserir números válidos para o raio da base e a altura do cone.');
    }

    rl.close();
  });
});
