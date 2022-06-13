import { personas as peopleData } from "./dataset/personas.js";
import mostrarNombres from "./funcionalidades/mostrarNombres.js";
import capitalizarNombres from "./funcionalidades/capitalizarNombres.js";
import filtrarPersonas from "./funcionalidades/filtrarPersonas.js";
import buscarPersona from "./funcionalidades/buscarPersona.js";

// 1. Mostrar los nombres de las personas en el archivo "personas.js" a través de la función que creaste en "mostrarNombres.js".

console.log("01. Lista de nombres de personas:");
mostrarNombres(peopleData);
// -> "Jhonny"
// -> "Manuel"
// -> "Fran"

// 2. Crear un nuevo array con los nombres de las personas en "personas.js" en mayúsculas.

console.log("\n02. Array de nombres en mayúsculas:");
let nombresCapitalizados = capitalizarNombres(peopleData);
console.log(nombresCapitalizados);
// -> [{nombre: "JHONNY", ... }, {...}]

// 3. Crear un nuevo array con las personas que tengan el rol de "viewer en la lista de "personas.js"
console.log("\n03. Array de viewers:");
let viewers = filtrarPersonas(peopleData, "rol", "viewer");
console.log(viewers);

/* 4. Crear un nuevo array con las personas pertenecientes al vip. */
console.log("\n04. Array de VIPs:");
let vips = filtrarPersonas(peopleData, "seccion", "vip");
console.log(vips);

/* 5. Crear un nuevo array con las personas de la seccion gold. */
console.log("\n05. Array de Golds:");
let asistentes = filtrarPersonas(peopleData, "seccion", "gold");
console.log(asistentes);

/* 6. Buscar a la persona con el id 5 */
console.log("\n06. Persona específica según id:");
let persona5 = buscarPersona(peopleData, 5);
console.log(persona5);
