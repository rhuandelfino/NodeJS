const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculateEquilateralTriangleArea(base, altura) {
  const area = (base * altura) / 2;
  return area;
}

rl.question('Digite o valor da base do triângulo equilátero: ', (base) => {
  rl.question('Digite o valor da altura do triângulo equilátero: ', (altura) => {
    const baseNum = parseFloat(base);
    const alturaNum = parseFloat(altura);

    if (!isNaN(baseNum) && !isNaN(alturaNum)) {
      const area = calculateEquilateralTriangleArea(baseNum, alturaNum);
      console.log(`A área do triângulo equilátero é: ${area}`);
    } else {
      console.log('Valores inválidos. Certifique-se de inserir números válidos para a base e a altura.');
    }

    rl.close();
  });
});
