// Atajos de teclado:

// Modo multiculsor:
// Seleccionar la palabra y pulsar cmd+d

// Copiar línea:
// Shift + option + down

// Mover línea
// Alt + up or down

// Abrir o cerrar la barra lateral:
// cmd + b (barra)

// Console Log
// clg + tab

// Console Log Object (O cualquier variable)
// clo + tab

/************/

// Misc:

/*

Buscar documentación en: https://developer.mozilla.org/es/docs/Web/JavaScript
DEV.TO
Medium

*/

/*

Diferencia entre un valor primitivo y uno estructural:
El primitivo se guarda/pasa por valor y el estructural se guarda/pasa por referencia.

*/

/*

Abstraction (Abstraer)
Aislar e individualizar las instrucciones que tiene que realizar el código
tanto como se pueda con el objetivo de que sea más fácil de leer y depurar
(pues cada fragmento de código hará una sola cosa). Una buena manera de abstraer
es usar funciones (pues nos permiten aislar acciones).

*/

/*

Closure:

Se produce cuando una función utiliza una variable que proviene de fuera de ella misma.
Es decir: cuando una función que referencia variables que están fuera de su inner scope.

De hecho, el closure es la combinación de una función y el scope en el momento en que fue
creada.

Es una función que guarda referencias del estado del scope en que fue creada. (Ver ejemplo greaterThan10)

*/

/*

Función pura:
Aquella que dados los mismos parámetros retorna el mismo resultado.

*/

/*

High Order Functions:
Son funciones que operan con otras funciones (ya sea como argumento
o retornando otras funciones). Nos permiten “abstraer” acciones.

*/

/*

Callback:
Es una funcion que se ejecutará dentro de otra función en algún momento. Normalmente se pasa como parámetro.

*/

/*

Asincronismo

Javascript es un lenguaje sincrónico y de un solo hilo.
Es el concepto que le permite a una aplicación web poder hacer tareas simultáneamente
sin la necesidad de bloquear procesos, esperando las completaciones.
En javascript se maneja con el callstack y el event loop.

*/

/*

Event loop:

Es la forma en la que el runtime de javascript gestiona las llamadas a las funciones.

El runtime vendría a ser el modelo de ejecución de un lenguaje de programación.
En el caso de javascript, el runtime está basado en un “event loop”, responsable de
ejecutar el código, recoger, procesar eventos, y ejecutar tareas en cola.

Tiene varias partes:

Memory Heap: donde se realiza la asignación de memoria (allocation).
Ahí javascript guarda en una memoria desestructurada los objetos y funciones.

Call Stack: Es como una pila de tareas en proceso, donde el runtime lleva la cuenta de
las llamadas a las distintas funciones. Si una función llama a otra función,
se agrega sobre la anterior. Hay que tratar de no desbordar la pila (stack overflow).
Cuando la acción se ha resuelto, se elimina del stack.

Queue: Es la cola de tareas que están esperando a ser procesadas.
Aquí irán nuestras funciones asíncronas. Aquellas que requieran una respuesta por
parte de una web api externa (DOM, timeouts, etc.).

Javascript es un lenguaje de un solo hilo, y solo puede realizar una función cada vez.
Por eso solo hay una call stack. Las funciones asíncronas nos permiten no tener que
esperar las respuestas (promesas) de estas llamadas externas y que el código no
sea bloqueante y se pueda seguir interactuando con la web mientras se espera.
Cuando están listas para ser ejecutadas, las funciones se colocan en la cola y
se ejecutan cuando no haya tareas en el stack, eso sí: siempre después de una
primera lectura secuencial del código (las funciones síncronas).

¿Por qué se bloquea la UI? El navegador hace un proceso de renderizado cada cierto tiempo,
pero NO puede realizarlo si hay tareas en el stack, debe esperar a que esté vacío.

Más referencias: https://www.youtube.com/watch?v=8aGhZQkoFbQ y latentflip.com
*/

/*

Promise / Promesas

Es un objeto que permite realizar una acción asíncrona, de la cual no sabemos (a priori)
el resultado, y que va a gestionarse fuera del front-end (en el servidor, una api externa, etc).

En general, desde el front-end vamos a solicitar una promesa al backend para que nos
devuelva cierta acción. La promesa tiene el estado inicial de pending. Luego,
puede completarse (fulfilled) o rechazarse (rejected) y debemos gestionar ambas opciones,
normalmente con los métodos .then y .catch.

*/

/*

API

TODO: Application Programming Interface

https://www.redhat.com/es/topics/api/what-is-a-rest-api

*/
