const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Bem-vindo à Calculadora de Áreas!");
console.log("Escolha uma forma geométrica para calcular a área:");
console.log("1. Retângulo");
console.log("2. Triângulo");
console.log("3. Quadrado");
console.log("4. Trapézio");
console.log("5. Polígono Regular");
console.log("6. Cilindro");
console.log("7. Cone");
console.log("8. Esfera");
console.log("9. Prisma");
console.log("10. Polígono Irregular");

rl.question("Digite o número correspondente à forma geométrica: ", (opcao) => {
  if (opcao === '1') {
    calcularAreaRetangulo();
  } else if (opcao === '2') {
    calcularAreaTriangulo();
  } else if (opcao === '3') {
    calcularAreaQuadrado();
  } else if (opcao === '4') {
    calcularAreaTrapezio();
  } else if (opcao === '5') {
    calcularAreaPoligonoRegular();
  } else if (opcao === '6') {
    calcularAreaCilindro();
  } else if (opcao === '7') {
    calcularAreaCone();
  } else if (opcao === '8') {
    calcularAreaEsfera();
  } else if (opcao === '9') {
    calcularAreaPrisma();
  } else if (opcao === '10') {
    calcularAreaPoligonoIrregular();
  } else {
    console.log("Opção inválida.");
  }

  rl.close();
});

function calcularAreaRetangulo() {
  rl.question("Digite a largura do retângulo: ", (largura) => {
    rl.question("Digite a altura do retângulo: ", (altura) => {
      const area = largura * altura;
      console.log(`A área do retângulo é: ${area}`);
    });
  });
}

function calcularAreaTriangulo() {
  rl.question("Digite a base do triângulo: ", (base) => {
    rl.question("Digite a altura do triângulo: ", (altura) => {
      const area = (base * altura) / 2;
      console.log(`A área do triângulo é: ${area}`);
    });
  });
}

function calcularAreaQuadrado() {
  rl.question("Digite o lado do quadrado: ", (lado) => {
    const area = lado * lado;
    console.log(`A área do quadrado é: ${area}`);
  });
}

function calcularAreaTrapezio() {
  rl.question("Digite a base maior do trapézio: ", (baseMaior) => {
    rl.question("Digite a base menor do trapézio: ", (baseMenor) => {
      rl.question("Digite a altura do trapézio: ", (altura) => {
        const area = ((baseMaior + baseMenor) / 2) * altura;
        console.log(`A área do trapézio é: ${area}`);
      });
    });
  });
}

function calcularAreaPoligonoRegular() {
  rl.question("Digite o número de lados do polígono regular: ", (lados) => {
    rl.question("Digite o comprimento do lado do polígono regular: ", (comprimentoLado) => {
      const area = (lados * Math.pow(comprimentoLado, 2)) / (4 * Math.tan(Math.PI / lados));
      console.log(`A área do polígono regular é: ${area}`);
    });
  });
}

function calcularAreaCilindro() {
  rl.question("Digite o raio da base do cilindro: ", (raio) => {
    rl.question("Digite a altura do cilindro: ", (altura) => {
      const area = 2 * Math.PI * raio * (raio + altura);
      console.log(`A área da superfície do cilindro é: ${area}`);
    });
  });
}

function calcularAreaCone() {
  rl.question("Digite o raio da base do cone: ", (raio) => {
    rl.question("Digite a altura do cone: ", (altura) => {
      const area = Math.PI * raio * raio + Math.sqrt(Math.pow(altura, 2) + Math.pow(raio, 2));
      console.log(`A área da superfície do cone é: ${area}`);
    });
  });
}

function calcularAreaEsfera() {
  rl.question("Digite o raio da esfera: ", (raio) => {
    const area = 4 * Math.PI * Math.pow(raio, 2);
    console.log(`A área da superfície da esfera é: ${area}`);
  });
}

function calcularAreaPrisma() {
  rl.question("Digite o número de lados da base do prisma: ", (lados) => {
    rl.question("Digite o comprimento do lado da base do prisma: ", (comprimentoLado) => {
      rl.question("Digite a altura da base do prisma: ", (alturaBase) => {
        rl.question("Digite a altura do prisma: ", (altura) => {
          const areaLateral = lados * comprimentoLado * altura;
          const areaBase = lados * (comprimentoLado * alturaBase);
          const areaTotal = 2 * areaBase + areaLateral;
          console.log(`A área total do prisma é: ${areaTotal}`);
        });
      });
    });
  });
}

function calcularAreaPoligonoIrregular() {
  // Implemente o cálculo da área de um polígono irregular com base nas coordenadas dos vértices aqui
}
 