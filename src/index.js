import { personas as peopleData } from "./dataset/personas.js";
import mostrarNombres from "./funcionalidades/mostrarNombres.js";
import capitalizarNombres from "./funcionalidades/capitalizarNombres.js";
/**
 * En este archivo deberás:
 *
 * 1. Mostrar los nombres de las personas en el archivo "personas.js"
 * a través de la función que creaste en "mostrarNombres.js"
 *
 */

console.log("01. Lista de nombres de personas:");
mostrarNombres(peopleData);
// -> "Jhonny"
// -> "Manuel"
// -> "Fran"

/*
 * 2. Crear un nuevo array con los nombres de las personas en "personas.js"
 * en mayúsculas.
 */

console.log("\n02. Array de nombres en mayúsculas:");
let nombresCapitalizados = capitalizarNombres(peopleData);
console.log(nombresCapitalizados);
// -> [{nombre: "JHONNY", ... }, {...}]
