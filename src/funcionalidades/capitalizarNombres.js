/**
 * Crea una función que reciba una lista de personas y retorne
 * un nuevo array, con los mismos objetos del array original,
 * pero con los nombres de esas personas en mayúsculas.
 */

function capitalizarNombres(array) {
  return array.map((elem) => {
    return {
      // Primero se pone la propiedad que se quiere override
      ...elem,
      nombre: elem.nombre.toUpperCase(),
      // Después hacemos spread del resto de propiedades del elemento
    };
  });
}

// Versión larga sin ...elem

// return array.map((elem) => {
//   return {
//     nombre: elem.nombre.toUpperCase(),
//     seccion: elem.seccion,
//     rol: elem.rol,
//     id: elem.id
//   };
// });

export default capitalizarNombres;
