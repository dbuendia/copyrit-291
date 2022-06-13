/**
 * Crea una función que reciba una lista de personas y retorne
 * un nuevo array, con los mismos objetos del array original,
 * pero con los nombres de esas personas en mayúsculas.
 */

function capitalizarNombres(array) {
  return array.map((elem) => {
    return {
      // La función retorna un array de objetos
      // Primero hacemos un spread de las propiedades de cada elemento
      ...elem,
      // Después hacemos override de la propiedad que queremos modificar
      nombre: elem.nombre.toUpperCase(),
    };
  });
}

// Versión larga sin ...elem

/*
return array.map((elem) => {
  return {
    nombre: elem.nombre.toUpperCase(),
    seccion: elem.seccion,
    rol: elem.rol,
    id: elem.id
  };
});
*/

export default capitalizarNombres;
