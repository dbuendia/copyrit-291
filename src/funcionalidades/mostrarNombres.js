/**
 * Crea una función que reciba una lista de personas y muestre
 * por consolas sus nombres.
 */

function mostrarNombres(array) {
  array.forEach((elem) => {
    console.log(elem.nombre);
  });
}

export default mostrarNombres;
