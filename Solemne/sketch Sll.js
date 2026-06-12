
let columnas = 15;
let filas = 20;

function setup() {
  createCanvas(700, 900);
}

function draw() {
  background(230, 225, 215);

  composicion();
}

function composicion() {

  // Input continuo
  let desplazamiento = map(mouseX, 0, width, 50, 200);
  let tamañoInicial = map(mouseY, 0, height, 5, 60);

  for (let y = 0; y < filas; y++) {

    for (let x = 0; x < columnas; x++) {

      let px = 50 + x * 45;
      let py = 100 + y * 40;

      // Deformación de la retícula
      let movimiento = map(
        abs(y - filas / 2),
        0,
        filas / 2,
        -desplazamiento,
        0
      );

      // Movimiento constante para hacerlo dinámico
      let onda = sin(frameCount * 0.03 + x * 0.5 + y * 0.2) * 15;

      px = px + movimiento + onda;

      // Tamaño variable
      let tam = map(
        x,
        0,
        columnas - 1,
        5,
        tamañoInicial
      );

      // Condicional 1
      if (mouseX > width / 2) {
        fill(20);
      } else {
        fill(80);
      }

      // Condicional 2
      if (tam > 30) {
        fill(0);
      }

      // Condicional 3 (extra)
      if (mouseY < height / 3) {
        fill(50, 50, 50);
      }

      noStroke();
      circle(px, py, tam);
    }
  }
}