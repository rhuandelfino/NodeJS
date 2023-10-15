const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculateRectangularPrismArea(base, alturaBase, alturaPrisma) {
  const areaBase = base * alturaBase;
  const perimetroBase = 2 * (base + alturaBase);
  const area = 2 * areaBase + perimetroBase * alturaPrisma;
  return area;
}

rl.question('Digite o valor da base do prisma: ', (base) => {
  rl.question('Digite o valor da altura da base: ', (alturaBase) => {
    rl.question('Digite o valor da altura do prisma: ', (alturaPrisma) => {
      const baseNum = parseFloat(base);
      const alturaBaseNum = parseFloat(alturaBase);
      const alturaPrismaNum = parseFloat(alturaPrisma);

      if (!isNaN(baseNum) && !isNaN(alturaBaseNum) && !isNaN(alturaPrismaNum)) {
        const area = calculateRectangularPrismArea(baseNum, alturaBaseNum, alturaPrismaNum);
        console.log(`A área do prisma retangular é: ${area}`);
      } else {
        console.log('Valores inválidos. Certifique-se de inserir números válidos para a base, altura da base e altura do prisma.');
      }

      rl.close();
    });
  });
});
