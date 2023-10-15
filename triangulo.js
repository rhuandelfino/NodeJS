const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o valor da base do triângulo: ', (base) => {
  rl.question('Digite o valor da altura do triângulo: ', (altura) => {
    const baseNum = parseFloat(base);
    const alturaNum = parseFloat(altura);

    if (!isNaN(baseNum) && !isNaN(alturaNum)) {
      const area = (baseNum * alturaNum) / 2;
      console.log(`A área do triângulo é: ${area}`);
    } else {
      console.log('Valores inválidos. Certifique-se de inserir números válidos para a base e a altura.');
    }

    rl.close();
  });
});
