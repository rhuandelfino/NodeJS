const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o valor da base1 do trapézio: ', (base1) => {
  rl.question('Digite o valor da base2 do trapézio: ', (base2) => {
    rl.question('Digite o valor da altura do trapézio: ', (altura) => {
      const base1Num = parseFloat(base1);
      const base2Num = parseFloat(base2);
      const alturaNum = parseFloat(altura);

      if (!isNaN(base1Num) && !isNaN(base2Num) && !isNaN(alturaNum)) {
        const area = ((base1Num + base2Num) / 2) * alturaNum;
        console.log(`A área do trapézio é: ${area}`);
      } else {
        console.log('Valores inválidos. Certifique-se de inserir números válidos para base1, base2 e altura.');
      }

      rl.close();
    });
  });
});
