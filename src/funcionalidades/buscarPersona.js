/**
 *
 *  Crea una función que reciba una lista de personas y un id (número)
 * como argumento, y que retorne el objeto de la persona que corresponda
 * con el id especificado.
 *
 */

function buscarPersona(array, id) {
  let persona = array.find((elem) => elem.id === id);
  return persona;
}

export default buscarPersona;
