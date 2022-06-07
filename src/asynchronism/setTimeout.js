console.log("Subo al bus de Alcañiz");

// La función setTimeout se ejecutará después de las demás, en 4h y media (en ms).
setTimeout(() => console.log("Ya hemos llegado a Alcañiz"), 16200000);

console.log("Leo");
console.log("Escucho música");
console.log("Me mareo");

/*************/

// Super Mario Kart

// De manera sincrónica, se ejecuta de arriba abajo.

/*
console.log("Peach 🍑");
console.log("Toad 🍄");
console.log("Bowser 🐲");
setTimeout(() => console.log("Huesitos 🦴"), 3000);
// Con el timeout, el último en llegar será Huesitos, en 3 segundos.
*/

console.log("Nueva carrera");
/* Si comentamos la carrera anterior, en esta nueva carrera podremos observar como, 
aunque el timeout sea de 0 ms, la función se va a ejecutar después del resto */

setTimeout(function () {
  console.log("Peach 🍑");
}, 0);

console.log("Toad 🍄");
console.log("Bowser 🐲");

/* 

Esto ocurre porque si javascript detecta que hay alguna función asíncrona, la va a
resolver después de las demás. Se gestiona por lo que se conoce como "event loop", 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop 
que gestiona este tipo de funciones (peticiones al servidor, etc). En este caso, DESPUÉS
de haber ejecutado las funciones síncronas, se dispara el timeout de 0 ms y se resuelve la función.

*/

// Ejercicio:

/*
console.log("Vuelta 4");
setTimeout(function () {
  console.log("Mario 🏎");
}, 0);
setTimeout(() => console.log("Luigi 🐢"), 0);
console.log("Toad 🍄");
// Toad Mario Luigi
*/

/*
console.log("Vuelta 5");
console.log("Mario 🏎");
setTimeout(() => console.log("Luigi 🐢"), 0);
console.log("Toad 🍄");
// Mario Toad Luigi
*/

/*
console.log("Vuelta 6");
*/

/* 
Cuidado con poner timeouts demasiado bajos. 
Si por ejemplo usamos valores de 1 ms en Mario y 0 en Luigi, en realidad 
va a llegar antes Mario, porque el timeout se dispara más rápido del tiempo
que tarda javascript en leer y enviar Luigi a la cola (aunque su timeout sea de 0). */

/*
setTimeout(() => console.log("Mario 🏎"), 1000);

setTimeout(() => console.log("Luigi 🐢"), 0);

console.log("Toad 🍄");
// Toad Luigi Mario
*/

/*
console.log("Vuelta 7");
setTimeout(() => console.log("Mario 🏎"), 0);
console.log("Luigi 🐢");
setTimeout(() => console.log("Toad 🍄"), 1);
// Luigi Mario Toad
*/
