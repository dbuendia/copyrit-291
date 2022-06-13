/**
 * Crea una función que reciba una lista de personas,
 * una propiedad y un valor (la funcion recibe 3 parametros),
 * para retornar un nuevo array de personas filtradas por esa
 * propiedad y el valor.
 *
 * Los valores permitidos son: rol y seccion.
 * No es necesario validar estos campos.
 */

function filtrarPersonas(array, prop, value) {
  //Como la propiedad llega por parámetro y no es una de las palabras reservadas por javascript, tenemos que usar la square bracket notation.
  // Ref: https://stackoverflow.com/questions/40635366/array-filter-by-object-property-argument-is-not-defined/40635440#40635440
  // Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
  return array.filter((elem) => elem[prop] === value);
}

export default filtrarPersonas;
