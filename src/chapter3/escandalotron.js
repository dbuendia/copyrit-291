/*

Escándalotron

Si el sumatorio de las 3 fuentes es > 0 y menor <= 30: se mostrará por consola "susurrando".
Si es mayor a 30 o menor o igual a 60: sonido normal.
Si la cantidad es mayor a 60: escándalo!

*/

console.clear();

function escandalotron(db1, db2, db3, config) {
  let sumatorio = db1 + db2 + db3;

  if (sumatorio <= config.LIMITE_INFERIOR) {
    console.log("Estáis susurrando");
  } else if (
    sumatorio > config.LIMITE_INFERIOR &&
    sumatorio <= config.LIMITE_MEDIO
  ) {
    console.log("Sonido normal");
  } else {
    console.log("¡Escándalo!");
  }
}

escandalotron(291, 2, 5, {
  LIMITE_INFERIOR: 30,
  LIMITE_MEDIO: 60
});

// escandalotron(0, 15, 20);
// escandalotron(30, 50, 60);
