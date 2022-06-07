/* 

High Order Functions:
Son funciones que operan con otras funciones  (ya sea como argumento 
o retornando otras funciones). Nos permiten “abstraer” acciones.

*/

/* 
La función greaterThan recibe el parámetro n.
Devuelve una función anónima (que recibirá el parámetro m por argumento
y, a su vez devolverá un valor booleano si m es mayor que n)
*/

function greaterThan(n) {
  return (m) => m > n;
}

// Podemos definir una variable con nuestra función:
let greaterThan10 = greaterThan(10); // n = 10.

/* 
Ahora, podemos invocar la función que contiene nuestra variable greatherThan10
Como la variable ES la función anónima, el parámetro que pasamos, (11), 
es, por lo tanto m. La función es capaz de recordar que el valor de n es 10 gracias
al closure. 
*/

console.log("Greater than 10 test: ");
console.log(greaterThan10(11)); // m = 11
// → true

/*
A continuación, un ejemplo bastante más complejo de HOF:

Primero tenemos una función repeat, que recibe dos parámetros:
n (un número de veces a repetir) y una función a realizar:
*/

console.log("Is even function test: ");

function repeat(n, action) {
  // La función se invocará tantas veces como n
  for (let i = 0; i < n; i++) {
    action(i); // La función recibe por parámetro el contador de i (0, 1, 2...)
  }
}

/* 
Invocamos a la función con nuestros dos parámetros:

n = 3 (se repetirá 3 veces)
action = una función anónima que recibe por parámetro un número: (0, 1, 2...)
retorna la función unless.

*/

repeat(3, (n) => {
  // Si se cumple la condición, se retorna otra función anónima que loguea si n es par.
  unless(n % 2 == 1, () => {
    console.log(n, "is even");
  });
});

/*

La función unless recibe un parámetro test (revisará una condición booleana),
y una función then, que hará lo que sea si no se cumple.

*/
function unless(test, then) {
  if (!test) then(); // Then es a future callback. La función anónima anterior
} // Else, no se ejecuta nada.

/* 
Callback es una funcion que se ejecutará dentro de otra función en algún momento.
Normalmente se pasa como parámetro.
 */

// Para explicar de nuevo el closure consideremos la siguiente función:

function hola(nombre) {
  console.log(nombre);
  return (apellido) => {
    console.log(apellido);
    console.log(nombre + " " + apellido);
    return true;
    // No le hace falta return
  };
}

console.log(hola); // Devuelve sólo la función
hola("Alonso"); // Invocamos la función con el primer atributo, pero no usamos la interna (return)

// Creamos una variable con la función hola y le pasamos el atributo nombre:
let holaConJavi = hola("Javi");

// El siguiente argumento que pasemos a la función será el de la función interna.
// Gracias al closure, la función recuerda el scope que tenía cuando se creo, es decir que el nombre es "Javi"
holaConJavi("Rivera");
holaConJavi("Chanel");

// También se puede invocar todo de una con ambos argumentos:
let otraVar = hola("Daniel")("Buendía");
console.log("otravar");
otraVar;
console.log("console log otravar");
console.log(otraVar);

// console.log(hola("daniel")("buendia"));
/**************/

// Filter: es un método de arrays que
// Recorre los elementos de un array y devuelve otro array con aquellos que coinciden con cierto criterio.

console.log("Filter test:");

arrayStrings = ["hola", "ciao", "chanel"];

// Devuelve los elementos del array que tengan una length mayor a 4.
console.log(arrayStrings.filter((elem) => elem.length > 4));
// Chanel

arrayOfObjects = [{ number: 1 }, { number: 2 }, { number: 3 }];
// Devuelve los elementos del array de objetos cuya propiedad number sea 3.
console.log(arrayOfObjects.filter((elemento) => elemento.number == 3));

// Otro ejemplo que devuelve los objetos cuya propiedad1 sea hola.
array = [
  { propiedad1: "hola" },
  { propiedad1: "adios" },
  { propiedad1: "hola" },
];
console.log(array.filter((elemento) => elemento.propiedad1 === "hola"));

// Map: es un método de arrays que
// Recibe un array como parametro y devuelve un nuevo array del mismo tamaño tras aplicar una función a cada elemento.

console.log("Map test:");

// Devuelve los números del array multiplicados * 2
const numbers = [65, 44, 12, 4];
const newArr = numbers.map((element) => {
  console.log(element * 2);
});

// Devuelve true si la propiedad del elemento del array es hola
const newArray = array.map((elem) => elem.propiedad1 === "hola");
console.log(newArray);

/*

Foreach

Recorre todos los elementos de un array:

*/

// Por cada elemento del array numbers, loguea cool si es 4 o mal si no lo es.
numbers.forEach((elem) => {
  console.log(elem === 4 ? "cool" : "mal");
});

function makeFunc() {
  var name = "Mozilla";

  function displayName() {
    console.log(name);
  }

  return displayName;
}

var myFunc = makeFunc();
myFunc();
