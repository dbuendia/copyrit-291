const personas = [
  { first: "Albert", last: "Einstein", nacio: 1879, murio: 1955 },
  { first: "Isaac", last: "Newton", nacio: 1643, murio: 1727 },
  { first: "Galileo", last: "Galilei", nacio: 1564, murio: 1642 },
  { first: "Marie", last: "Curie", nacio: 1867, murio: 1934 },
  { first: "Johannes", last: "Kepler", nacio: 1571, murio: 1630 },
  { first: "Nicolaus", last: "Copernicus", nacio: 1473, murio: 1543 },
  { first: "Max", last: "Planck", nacio: 1858, murio: 1947 },
  { first: "Katherine", last: "Blodgett", nacio: 1898, murio: 1979 },
  { first: "Ada", last: "Lovelace", nacio: 1815, murio: 1852 },
  { first: "Sarah E.", last: "Goode", nacio: 1855, murio: 1905 },
  { first: "Lise", last: "Meitner", nacio: 1878, murio: 1968 },
  { first: "Hanna", last: "Hammarström", nacio: 1829, murio: 1909 },
];

// Utiliza .map para crear un nuevo array de objetos,
// donde cada objeto tenga solo el nombre y apellido de cada persona

let arrayNombreyApellido = personas.map((elem) => {
  return { nombre: elem.first, apellido: elem.last };
});

console.log("Array de objetos con nombres y apellidos:");
console.log(arrayNombreyApellido);

// Utiliza .map para crear un nuevo array de objetos,
// donde cada objeto tenga solo el nombre y la fecha de nacimiento de cada persona

let arrayNombreyFecha = personas.map((elem) => {
  return {
    nombre: elem.first,
    nacimiento: elem.nacio,
    //"Fecha Completa": elem.nacio + " - " + elem.murio,
  };
});

console.log("Array de objetos con nombres y fechas de nacimiento:");
console.log(arrayNombreyFecha);

// Utiliza .filter para crear un nuevo array de objetos
// donde cada objeto represente la persona que haya nacido durante el 1800

let arraySigloXIX = personas.filter((elem) => {
  return elem.nacio >= 1800 && elem.nacio < 1900;
});

console.log("Array de objetos de personas nacidas durante el siglo XIX");
console.log(arraySigloXIX);

// Utiliza .map para crear un nuevo array de objetos con el apellido
// de cada persona y su edad (murio - nacio)

let arrayApellidoyEdad = personas.map((elem) => {
  return {
    apellido: elem.last,
    edadFallecimiento: elem.murio - elem.nacio,
  };
});

console.log(
  "Array de objetos de personas con apellido y edad de fallecimiento:"
);
console.log(arrayApellidoyEdad);

// Utiliza .filter para crear un nuevo array de objetos con las personas
// cuyo nombre sea mayor a 4 letras

let arrayNombreMayor4 = personas.filter((elem) => elem.first.length > 4);

console.log("Array de objetos de personas cuyo nombre sea mayor a 4 letras");
console.log(arrayNombreMayor4);

// Utiliza .filter para crear un nuevo array de objetos con las personas
// que hayan nacido después de 1800

let arrayPost1800 = personas.filter((elem) => elem.nacio > 1800);

console.log("Array de objetos de personas nacidas después de 1800:");
console.log(arrayPost1800);

// Utiliza .filter  para para crear un nuevo array de objetos con las personas
// que hayan tenido una edad par (edad % 2 === 0, busca en google el operador "modulo")

let arrayEdadFallecimientoPar = personas.filter((elem) => {
  return (elem.murio - elem.nacio) % 2 === 0;
});

console.log("Array de objetos de personas con edad de fallecimiento par:");
console.log(arrayEdadFallecimientoPar);

console.log("Mostramos dichas edades:");

let even = arrayEdadFallecimientoPar.map((elem) => {
  return { edadFallecimientoPar: elem.murio - elem.nacio };
});
console.log(even);
