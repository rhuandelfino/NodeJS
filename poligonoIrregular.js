const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const vertices = [];

function calculatePolygonArea(vertices) {
  const n = vertices.length;
  let area = 0;

  for (let i = 0; i < n; i++) {
    const x1 = vertices[i][0];
    const y1 = vertices[i][1];
    const x2 = vertices[(i + 1) % n][0];
    const y2 = vertices[(i + 1) % n][1];

    area += (x1 * y2 - x2 * y1);
  }

  area = Math.abs(area) / 2;
  return area;
}

function promptForVertex() {
  rl.question('Digite as coordenadas de um vértice (x y) ou "calcular" para calcular a área: ', (input) => {
    if (input.toLowerCase() === 'calcular') {
      if (vertices.length < 3) {
        console.log('Pelo menos três vértices são necessários para calcular a área de um polígono.');
        rl.close();
        return;
      }
      const area = calculatePolygonArea(vertices);
      console.log(`A área do polígono irregular é: ${area}`);
      rl.close();
    } else {
      const [x, y] = input.split(' ').map(parseFloat);
      if (!isNaN(x) && !isNaN(y)) {
        vertices.push([x, y]);
      } else {
        console.log('Entrada inválida. Por favor, insira as coordenadas no formato "x y".');
      }
      promptForVertex();
    }
  });
}

console.log('Insira as coordenadas dos vértices do polígono. Quando terminar, digite "calcular".');
promptForVertex();
